from flask import current_app, request, redirect, url_for, send_from_directory, jsonify, session

import datetime

from app import auth0
from app import db
from . import bp
import os


@current_app.before_request
def before_request():
	return
	'''
	if current_user.is_authenticated:
		current_user.last_seen = datetime.datetime.now()
		db.session.commit()
	'''
	

@current_app.after_request
def close_request_session(response):
	# Fix for Mysql server gone away
	db.session.remove()
	return response
