from flask import abort, current_app, request, jsonify, render_template, url_for
from . import bp
from app import jwt

from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import current_user

from app import executor
import app.email_model

from .models import User


@jwt.user_identity_loader
def user_identity_lookup(user):
    """
    Register a callback function that takes whatever object is passed in as the
    identity when creating JWTs and converts it to a JSON serializable format.
    """
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    """
    # Register a callback function that loades a user from your database whenever
    # a protected route is accessed. This should return any python object on a
    # successful lookup, or None if the lookup failed for any reason (for example
    # if the user has been deleted from the database).
    """
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    user = User.query.filter_by(username=username).first()

    if user is None:
	    return jsonify({'error': 'Bad username or password'}), 401

    # Check for email validation
    if User.user_email_is_confirmed(user.username) == False:
        return jsonify({'error': 'Please click the confirmation link in the email that was sent to you.'}), 401

    # If the user somehow has no password, due to registration issues, send a link
    if user.password_hash is None or user.password_hash == '':
        send_password_reset_email(user.username, user.email)
        return jsonify({'error': 'You must set a password before you continue. An email has been sent to your inbox with a link to recover your password.'}), 401

    # If this is the wrong password
    if not user.check_password(password):
        return jsonify({'error': 'Bad username or password'}), 401

    # All checks passed, send back token
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)


@bp.route('/profile/<int:user_id>')
@jwt_required()
def view_user_profile(user_id):
    """ 
    Return a user object
    """
    user = User.query.get(user_id)

    if user is None:
	    return jsonify({'error': 'Could not find the user'}), 401

    return jsonify({
        'username': user.username,
        'last_seen': user.last_seen,
        'is_admin': user.is_admin
    })


@bp.route('/profile/')
@jwt_required()
def get_current_user():
    """
    Access current logged in sqlalchemy User object via `current_user`.
    """
    return jsonify(
        id=current_user.id,
        username=current_user.username,
        last_seen=current_user.last_seen,
        is_admin=current_user.is_admin
    )


def send_password_reset_email(username, email):
    """
    Helper method to send a password reset email
    """
    subject = "Password reset requested"
    token = app.email_model.ts.dumps(
        email, salt=current_app.config["TS_RECOVER_SALT"])

    recover_url = url_for('user.reset_with_token', token=token, _external=True)
    html = render_template('email/recover.html', recover_url=recover_url,
                           username=username, app_name=current_app.config['APP_NAME'])

    executor.submit(app.email_model.send_email, email, subject, html)
