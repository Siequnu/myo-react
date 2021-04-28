from flask import render_template, redirect, url_for, session, flash, request, abort, current_app, jsonify
import datetime
from flask_login import current_user, login_user, login_required, logout_user
from werkzeug.urls import url_parse
from app.models import User
from app import db
import app.email_model
import app.main.forms
from app.user import bp, models, forms
from datetime import datetime
from app import executor
from time import sleep
import os
import json
from .models import OnboardingAnswer


# Route to save the onboarding data
@bp.route("/api/onboarding/", methods=['POST'])
@login_required
def save_onboarding_data():
	if current_user.is_authenticated:
		if OnboardingAnswer.query.filter_by(user_id=current_user.id).first() is None:
			new_onboarding = OnboardingAnswer(
				user_id=current_user.id,
				data=json.dumps(request.json)
			)
			db.session.add(new_onboarding)
			db.session.commit()
			flash ('Welcome to Myo!', 'success')
			return jsonify({'success': 'Onboarding data added'})
		return jsonify({'error': 'Already had onboarding data for this user'})
	else:
		abort (403)

# Superintendant API route to get currently active users
@bp.route("/api/users/active")
@login_required
def get_active_users():
	if current_user.is_superintendant:
		return jsonify({'active_users': app.user.models.get_active_user_names()})
	abort(403)

# Log-in page
@bp.route('/login', methods=['GET', 'POST'])
def login():
	if current_user.is_authenticated:
		return redirect(url_for('main.index'))
	form = app.user.forms.LoginForm()
	if form.validate_on_submit():
		user = User.query.filter_by(username=form.username.data).first()

		# If this user isn't registered
		if user is None:
			flash('Invalid username or password', 'error')
			return redirect(url_for('user.login'))

		'''
		# Check for email validation
		if User.user_email_is_confirmed(user.username) == False:
			flash('Please click the confirmation link in the email that was sent to you.', 'warning')
			return redirect(url_for('user.login'))
		'''

		# If the user somehow has no password, due to registration issues, send a link
		if user.password_hash is None or user.password_hash == '':
			send_password_reset_email(user.username, user.email)
			flash('You must set a password before you continue. An email has been sent to your inbox with a link to recover your password.', 'info')
			return redirect(url_for('main.index'))

		# If this is the wrong password
		if not user.check_password(form.password.data):
			flash('Invalid username or password', 'error')
			return redirect(url_for('user.login'))

		# All checks passed, log-in user
		login_user(user, remember=form.remember_me.data)
		flash('Welcome back, ' + user.username, 'success')
		next_page = request.args.get('next')
		if not next_page or url_parse(next_page).netloc != '':
			next_page = url_for('activities.spark')
		return redirect(next_page)
	return render_template('user/login.html', title='Sign in to Myo', form=form)


# Log-out page
@bp.route('/logout')
def logout():
	logout_user()
	return redirect(url_for('main.index'))

# Display a user profile


@bp.route('/profile/<user_id>')
def user_profile(user_id):
	try:
		user = User.query.get(int(user_id))
	except:
		abort(404)

	# Is user an admin (do not show student profiles)
	if user is not None and app.models.is_admin(user.username):
		# Display their profile
		return render_template('user/user_profile.html', title='User profile', user=user)
	else:
		abort(404)


# Display the onboarding
@bp.route('/welcome')
def onboarding():

	return render_template(
		'user/onboarding.html')

# Registration
@bp.route('/register', methods=['GET', 'POST'])
def register():
	# If the user is authenticated, and not an admin (admin can use this form to register a student), redirect to index
	if current_user.is_authenticated and app.models.is_admin(current_user.username) is not True:
		return redirect(url_for('main.index'))

	# If registration is open or we are an admin, create a new form
	if current_app.config['REGISTRATION_IS_OPEN'] == True or current_user.is_authenticated and app.models.is_admin(current_user.username):
		form = app.user.forms.RegistrationForm()

		# If we are an admin (i.e., creating an account for the student) remove the form.password and sign up code fields
		if current_user.is_authenticated and app.models.is_admin(current_user.username):
			del form.password
			del form.signUpCode

		# On submission
		if form.validate_on_submit():
			# If the sign up code is correct, or we are admin
			if form.signUpCode and form.signUpCode.data in current_app.config['SIGNUP_CODES'] or current_user.is_authenticated and app.models.is_admin(current_user.username):

				# Create a new user
				user = User(username=form.username.data,
				            email=form.email.data, registered=datetime.now())

				# If we are not an admin, set the user's password (this field does not exist in the admin form)
				if current_user.is_authenticated is not True:
					user.set_password(form.password.data)

				# Add the user and flush
				db.session.add(user)
				db.session.flush()  # Access the new user.id field in the next step

				# Build an email with a sign-up completion link
				subject = current_app.config['APP_NAME'] + \
					" - your account is almost ready"
				token = app.email_model.ts.dumps(
					str(form.email.data), salt=current_app.config["TS_SALT"])

				# If we are an admin, send essentially a password reset email, but with a welcome message
				if current_user.is_authenticated and app.models.is_admin(current_user.username):
					# Send the email confirmation link, with link to set a password
					recover_url = url_for('user.reset_with_token',
					                      token=token, _external=True)
					html = render_template('email/set_password.html', recover_url=recover_url,
					                       username=form.username.data, app_name=current_app.config['APP_NAME'])
					flash('An email has been sent to the new user with further instructions.', 'success')

				# Otherwise, send a normal email confirmation link
				else:
					# Send the email confirmation link
					confirm_url = url_for('user.confirm_email', token=token, _external=True)
					html = render_template('email/activate.html', confirm_url=confirm_url,
					                       username=form.username.data, app_name=current_app.config['APP_NAME'])
					#flash('An email has been sent to you with further instructions.', 'success')

				# Send email in background
				executor.submit(app.email_model.send_email, user.email, subject, html)
				
				# Log the user in and redirect to activities.spark (which will trigger the onboarding)
				db.session.commit()
				login_user(user, remember=True)
				return redirect(url_for('activities.spark'))
			else:
				flash('An error occured while signing up. Please contact us for help.', 'warning')
				return redirect(url_for('user.login'))
		return render_template('user/register.html', title='Register', form=form)
	else:
		flash('Sign up is currently closed.', 'warning')
		return redirect(url_for('main.index'))

# Send new confirmation email to all unconfirmed users (bulk)
@bp.route('/confirmation/bulk')
def send_new_confirmation_email_to_all_unconfirmed_users():
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		unconfirmed_users = User.query.filter_by(email_confirmed=False).all()
		for user in unconfirmed_users:
			send_new_confirmation_email(user.id)
			sleep(1)
		flash('Sent a new confirmation email to ' +
		      str(len(unconfirmed_users)) + ' users.')
		return redirect(url_for('user.manage_users'))
	abort(403)

# Send new confirmation email


@bp.route('/confirmation/<user_id>')
def send_new_confirmation_email(user_id):
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		user = User.query.filter_by(id=user_id).first_or_404()
		subject = current_app.config['APP_NAME'] + \
			" - please confirm your email address"
		token = app.email_model.ts.dumps(
			str(user.email), salt=current_app.config["TS_SALT"])
		confirm_url = url_for('user.confirm_email', token=token, _external=True)

		html = render_template('email/activate.html', confirm_url=confirm_url,
		                       username=user.username, app_name=current_app.config['APP_NAME'])
		executor.submit(app.email_model.send_email, user.email, subject, html)
		flash('A new confirmation email has been sent to ' +
		      user.username + ' with further instructions.', 'success')
		return redirect(url_for('user.manage_users'))
	abort(403)


# Confirm email
@bp.route('/confirm/<token>')
def confirm_email(token):
	try:
		email = app.email_model.ts.loads(
			token, salt=current_app.config["TS_SALT"], max_age=current_app.config['TS_MAX_AGE'])
	except:
		abort(404)
	user = User.query.filter_by(email=email).first_or_404()
	user.email_confirmed = True
	db.session.commit()
	flash('Your email has been confirmed. Please log-in now.', 'success')
	return redirect(url_for('user.login'))


# Reset password form
@bp.route('/reset', methods=["GET", "POST"])
def reset():
	form = app.user.forms.EmailForm()
	if form.validate_on_submit():
		user = User.query.filter_by(email=form.email.data).first_or_404()
		send_password_reset_email(user.username, user.email)
		flash('An email has been sent to your inbox with a link to recover your password.', 'info')
		return redirect(url_for('main.index'))

	return render_template('user/reset.html', form=form)


# Helper method to send a password reset email
def send_password_reset_email(username, email):
	subject = "Password reset requested"
	token = app.email_model.ts.dumps(
		email, salt=current_app.config["TS_RECOVER_SALT"])

	recover_url = url_for('user.reset_with_token', token=token, _external=True)
	html = render_template('email/recover.html', recover_url=recover_url,
	                       username=username, app_name=current_app.config['APP_NAME'])

	executor.submit(app.email_model.send_email, email, subject, html)


# Reset password with token
# This also confirms the email address
@bp.route('/reset/<token>', methods=["GET", "POST"])
def reset_with_token(token):
	try:
		email = app.email_model.ts.loads(
			token, salt=current_app.config['TS_RECOVER_SALT'], max_age=current_app.config['TS_MAX_AGE'])
	except:
		abort(404)
	form = app.user.forms.PasswordForm()
	if form.validate_on_submit():
		user = User.query.filter_by(email=email).first_or_404()
		user.email_confirmed = True
		user.set_password(form.password.data)
		db.session.commit()
		flash('Your password has been changed. You can now log-in with your new password.', 'success')
		return redirect(url_for('user.login'))
	return render_template('user/reset_with_token.html', form=form, token=token)


# Route to edit a user
@bp.route('/edit/<user_id>', methods=['GET', 'POST'])
def edit_user(user_id):
	# Only admins (or above) can edit users
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		# Get the user
		user_to_edit = User.query.get(user_id)

		# If not superintendant, can only edit own students
		# Account for both Null (i.e. before implementation) and False
		if current_user.is_superintendant is not True:

			# Any "normal" admin can not edit other admins, or superintendants
			if user_to_edit.is_superintendant is True or user_to_edit.is_admin is True:
				flash("You can not edit admin profiles. Please contact an administrator to change admin details.", 'warning')
				return redirect(url_for('main.index'))

		form = app.user.forms.EditUserForm(obj=user_to_edit)

		if form.validate_on_submit():
			# Assign form variables to object
			user_to_edit.username = form.username.data
			user_to_edit.email = form.email.data

			db.session.commit()
			flash('User edited successfully.', 'success')
			return redirect(url_for('user.manage_users'))
		return render_template('user/register.html', title='Edit user', form=form)
	abort(403)


@bp.route('/delete/<user_id>', methods=['GET', 'POST'])
def delete_user(user_id):
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		user = User.query.get(user_id)

		# If not superintendant, can only edit own students
		if current_user.is_superintendant is not True:  # Account for both Null and False

			# Any "normal" admin can not edit other admins, or superintendants
			if user.is_superintendant is True or user.is_admin is True:
				flash("You can not edit other teacher profiles. Please contact an administrator to change other teacher details.", 'warning')
				return redirect(url_for('main.index'))

		form = app.user.forms.ConfirmationForm()
		confirmation_message = 'Are you sure you want to delete ' + \
			user.username + "'s account?"
		if form.validate_on_submit():

			app.models.User.delete_user(user_id)

			flash('User deleted successfully.', 'success')
			return redirect(url_for('user.manage_users'))

		return render_template('confirmation_form.html',
                         title='Delete user',
                         confirmation_message=confirmation_message,
                         form=form)
	abort(403)

# Manage Users


@bp.route('/users/manage')
@login_required
def manage_users():
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		# !FIXME get all non admin users
		return render_template(
			'user/manage_users.html',
			title='Manage users',
			# !FIXME get user nfo
			sign_up_code=current_app.config['SIGNUP_CODES'],
			registration_is_open=current_app.config['REGISTRATION_IS_OPEN'],
			custom_service_is_enabled=app.models.custom_service_is_enabled)
	abort(403)

# Toggle registration status


@bp.route('/registration/toggle')
@login_required
def toggle_registration_status():
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		current_app.config.update(
			REGISTRATION_IS_OPEN=not current_app.config['REGISTRATION_IS_OPEN']
		)
		flash('Registration status changed successfully')
		return redirect(url_for('user.manage_users'))

	abort(403)


# Change registration code
@bp.route('/registration/code', methods=['GET', 'POST'])
@login_required
def change_registration_code():
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		form = forms.RegistrationCodeChangeForm()
		if form.validate_on_submit():
			current_app.config.update(
				SIGNUP_CODES=[form.registration_code.data]
			)
			flash('Sign up code changed successfully to ' + form.registration_code.data)
			return redirect(url_for('user.manage_users'))
		return render_template('user/change_registration_code.html', title='Change registration code', form=form)
	abort(403)

# Manage Users


@bp.route('/admin/manage')
@login_required
def manage_admins():
	if current_user.is_authenticated and current_user.is_superintendant:
		teacher_info = app.user.models.get_all_admin_info()
		return render_template('user/manage_admin.html', title='Manage admins', teacher_info=teacher_info)
	abort(403)


# Convert normal user into admin
@bp.route('/give_admin_rights/<user_id>')
@login_required
def give_admin_rights(user_id):
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		try:
			# Make DB call to convert user into admin
			app.models.User.give_admin_rights(user_id)
			flash('User successfully made into administrator.', 'success')
		except:
			flash('An error occured when changing the user to an administrator.', 'error')
		return redirect(url_for('user.manage_users'))
	else:
		abort(403)

# Remove admin rights from user


@bp.route('/remove_admin_rights/<user_id>')
@login_required
def remove_admin_rights(user_id):
	if current_user.is_authenticated and app.models.is_admin(current_user.username):
		try:
			app.models.User.remove_admin_rights(user_id)
			flash('Administrator rights removed from the user.', 'success')
		except:
			flash('An error occured when changing the user to an administrator.', 'error')
		return redirect(url_for('user.manage_users'))
	else:
		abort(403)


# Convert normal user into admin
@bp.route('/superintendant/add/<user_id>')
@login_required
def make_superintendant(user_id):
	if current_user.is_authenticated and current_user.is_superintendant:
		try:
			user = User.query.get(user_id)
			if user is None:
				flash('Could not find the user you requested.', 'error')
				return redirect(url_for('user.manage_admin'))

			# Make DB call to convert user into admin
			app.models.User.give_superintendant_rights(user_id)
			flash(user.username + ' successfully made into superintendant.', 'success')
		except:
			flash('An error occured when changing ' +
			      user.username + ' to a superintendant.', 'error')
		return redirect(url_for('user.manage_admin'))
	else:
		abort(403)

# Remove admin rights from user


@bp.route('/superintendant/remove/<user_id>')
@login_required
def strip_of_superintendant(user_id):
	if current_user.is_authenticated and current_user.is_superintendant:
		try:
			app.models.User.remove_superintendant_rights(user_id)
			flash('Superintendant rights removed from the user.', 'success')
		except:
			flash('An error occured when removing superintendant roles from the user.', 'error')
		return redirect(url_for('user.manage_admin'))
	else:
		abort(403)


# Admin can register a new user
@bp.route('/register/admin', methods=['GET', 'POST'])
@login_required
def register_admin():
	if current_user.is_authenticated and current_user.is_superintendant:
		form = forms.AdminRegistrationForm()

		if current_user.is_superintendant is not True:
			del form.is_superintendant

		if form.validate_on_submit():
			if current_user.is_superintendant is not True:
				is_superintendant = False
			else:
				is_superintendant = form.is_superintendant.data

			user = User(
				username=form.username.data,
				email=form.email.data,
				is_admin=True,
				registered=datetime.now(),
				is_superintendant=is_superintendant
			)
			db.session.add(user)
			db.session.commit()

			# Send the email confirmation link, with link to set a password
			subject = current_app.config['APP_NAME'] + " - your account is almost ready"
			token = app.email_model.ts.dumps(
				str(form.email.data), salt=current_app.config["TS_SALT"])
			recover_url = url_for('user.reset_with_token', token=token, _external=True)
			html = render_template('email/set_password.html', recover_url=recover_url,
			                       username=form.username.data, app_name=current_app.config['APP_NAME'])
			executor.submit(app.email_model.send_email, user.email, subject, html)

			flash('An email has been sent to the new user with further instructions.', 'success')
			return redirect(url_for('user.login'))
		return render_template('user/register_admin.html', title='Register Admin', form=form)
	else:
		abort(403)
