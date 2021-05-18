"""
Provides routes for authentication module
"""
from flask import current_app, request, jsonify, render_template

from flask_jwt_extended import (
    create_access_token,
    create_refresh_token
)
from flask_jwt_extended import jwt_required
from flask_jwt_extended import current_user
from flask_jwt_extended import get_jwt_identity

from app import executor
from app import jwt
from app import db
import app.email_model

from . import bp
from .models import User


@jwt.user_identity_loader
def user_identity_lookup(user):
    """
    Register a callback function that takes whatever object is passed in as the
    identity when creating JWTs and converts it to a JSON serializable format.

    This sometimes receives an int (user_id), and sometimes the user object.
    # !TODO figure out why
    """
    if isinstance(user, int):
        return user
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    """
    Register a callback function that loads a user from database whenever
    # a protected route is accessed. This should return any python object on a
    # successful lookup, or None if the lookup failed for any reason
    # (for example if the user has been deleted from the database).
    """
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@bp.route('/login', methods=['POST'])
def login():
    """
    Api route to login a user
    """

    # Get the username and password from request details
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({'error': 'Invalid username or password'}), 401

    # Check for email validation
    if User.user_email_is_confirmed(user.username) is False:
        return jsonify({'error': 'Please click the confirmation \
            link in the email that was sent to you.'}), 401

    # If the user somehow has no password, send a link
    if user.password_hash is None or user.password_hash == '':
        send_password_reset_email(user.username, user.email)
        return jsonify({'error': 'You must set a password before you \
            continue. An email has been sent to your inbox with a link \
                to recover your password.'}), 401

    # If this is the wrong password
    if not user.check_password(password):
        return jsonify({'error': 'Invalid username or password'}), 401

    # All checks passed, send back token
    access_token = create_access_token(identity=user, fresh=True)
    refresh_token = create_refresh_token(user)
    return jsonify(
        access_token=access_token,
        refresh_token=refresh_token
    )


@bp.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    """
    Api route to refresh a JWT.
    We are using the `refresh=True` options in jwt_required to only allow
    refresh tokens to access this route.
    """
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)


@bp.route('/reset', methods=['POST'])
def reset():
    """
    Api route to send an email to reset password
    """

    # Get the email from request details
    email = request.json.get('email', None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({'error': 'Could not find an account \
            registered with this email.'}), 404

    send_password_reset_email(user.username, user.email)
    return {
        'success': 'An email has been sent with a link to reset your password.'
    }


@bp.route('/profile/<int:user_id>')
@jwt_required()
def view_user_profile(user_id):
    """
    Return a user object
    """
    user = User.query.get(user_id)

    if user is None:
        return jsonify({'error': 'Could not find the user'}), 404

    return jsonify(
        username=user.username,
        last_seen=user.last_seen,
        registered=user.registered,
        is_admin=user.is_admin
        )


@bp.route('/profile')
@jwt_required()
def get_current_user():
    """
    Access current logged in sqlalchemy User object via `current_user`.
    """
    return jsonify(
        id=current_user.id,
        username=current_user.username,
        registered=current_user.registered,
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

    # !TODO as Flask is running as API, the port will be wrong
    recover_url = current_app.config['APP_URL'] + \
        current_app.config['RECOVER_EXTERNAL_URL'] + token

    html = render_template(
        'email/recover.html',
        recover_url=recover_url,
        username=username,
        app_name=current_app.config['APP_NAME']
    )

    executor.submit(app.email_model.send_email, email, subject, html)


@bp.route('/reset/token', methods=["POST"])
def reset_with_token():
    """
    Reset password with token
    This also confirms the email address
    """

    # Get password and token from payload
    token = request.json.get('token', None)
    password = request.json.get('password', None)

    # Load the token, which contains the email
    try:
        email = app.email_model.ts.loads(
            token,
            salt=current_app.config['TS_RECOVER_SALT'],
            max_age=current_app.config['TS_MAX_AGE'])
    except Exception as e:
        print(e)
        return {'error': 'An error occured while verifying the token.'}

    # Set the new password
    try:
        user = User.query.filter_by(email=email).first()
        user.email_confirmed = True
        user.set_password(password)
        db.session.commit()
        return {'success': 'Your password has been changed. \
            You can now log-in with your new password.'}
    except Exception as error:
        return {'error': error}
