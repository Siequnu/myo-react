from flask import render_template, flash, current_app, request, redirect, url_for, send_from_directory
from flask_login import current_user, login_required

import datetime

from app import db
from app.main import bp
import app.user
import os
from app.user.models import OnboardingAnswer


@current_app.before_request
def before_request():
	if current_user.is_authenticated:
		current_user.last_seen = datetime.datetime.now()
		db.session.commit()
	

@current_app.after_request
def close_request_session(response):
	# 解决mysql server gone away
	db.session.remove()
	return response


@current_app.context_processor
def inject_background():
	backgrounds = []
	for background in os.listdir(os.path.join(current_app.static_folder, 'backgrounds')):
		backgrounds.append(
			url_for('static', filename=os.path.join('backgrounds', background)))

	return dict(backgrounds=backgrounds)


# Public facing page
@bp.route('/')
@bp.route('/index')
def index():
	return render_template('public_index.html')

# Main entrance to the app


@bp.route('/app')
@login_required
def myo_app():
	if current_user.is_authenticated:
		# All models get the greeting
		greeting = app.main.models.get_greeting()
		return render_template('app_create.html')


# Admin page
@bp.route('/superintendant')
@login_required
def superintendant():
	if current_user.is_authenticated and current_user.is_admin == True:
		return render_template('superintendant.html')
	else:
		abort (403)


# Onboarding questions
@bp.route('/onboarding')
@login_required
def onboarding():
	if current_user.is_authenticated:

		onboarding_questions = {
			"questions":[
				{
					"title":"What kind of creative activity are you interested in?",
					"answers":[
						"Drawing",
						"Writing",
						"Painting",
						"Crafts",
						"Photography"
					]
				},
				{
					"title":"What would you like to use Myo for?",
					"answers":[
						"To relax",
						"To learn new skills",
						"To use my imagination",
						"To better express myself",
						"To discover new arts"
					]
				},
				{
					"title":"What would you like Myo to offer?",
					"answers":[
						"Breadth of activities",
						"In depth skill building",
						"Global perspectives",
						"Interaction with artists & users"
					]
				},
				{
					"title":"What skills are you most interested in developing?",
					"answers":[
						"Imagination",
						"Persistence",
						"Discipline",
						"Inquisitiveness",
						"Collaboration"
					]
				},
				{
					"title":"How often do you engage in creative activities?",
					"answers":[
						"Everyday",
						"Two or three times a week",
						"Once every now and again",
						"Never!"
					]
				},
				{
					"title":"How often would you like to engage in creative activities?",
					"answers":[
						"Everyday",
						"Two or three times a week",
						"Once every now and again",
						"Never!"
					]
				},
				{
					"title":"For how long?",
					"answers":[
						"No more than 5mins at a time",
						"5mins to 10mins",
						"10mins to 20mins",
						"20mins to 40mins",
						"Sky’s the limit!"
					]
				},
				{
					"title":"How ‘experienced’ do you think you are?",
					"answers":[
						"Complete beginner",
						"Want to take it easy",
						"I like a challenge!",
						"Experience grrrr!!"
					]
				},
				{
					"title":"What materials do you have access to?",
					"answers":[
						"Pens and paper only",
						"Own some pencils",
						"Watercolour paints",
						"Acrylic paints",
						"General arts & crafts stuff",
						"Camera (phone will do)"
					]
				}
			]
		}

		# If user has already completed onboarding
		if OnboardingAnswer.query.filter_by(user_id=current_user.id).first() is not None:
			return redirect(url_for('activities.spark'))

		return render_template(
			'app_onboarding.html',
			onboarding_questions = onboarding_questions
			)
