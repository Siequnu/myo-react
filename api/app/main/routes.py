"""
Main routes for myo
"""
from flask import current_app

from flask_jwt_extended import get_current_user, verify_jwt_in_request

from app import db
from datetime import datetime
from contextlib import suppress


@current_app.before_request
def before_request():
    """
    If user is logged in, register as seen
    """
    with suppress(Exception):
        verify_jwt_in_request()
        user = get_current_user()
        user.last_seen = datetime.now()
        db.session.commit()


@current_app.after_request
def close_request_session(response):
    """
    Fix for Mysql server gone away
    """
    db.session.remove()
    return response


@current_app.errorhandler(404)
def not_found():
    """
    On 404 error, return the main React file
    """
    return current_app.send_static_file('index.html')


@current_app.route('/')
def index():
    """
    Index route, return HTML
    N.B. this should not ever actually be accessed, \
        as Flask is running in API mode
    """
    return current_app.send_static_file('index.html')
