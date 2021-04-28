from flask import render_template, flash, current_app, request, redirect, url_for, send_from_directory
from flask_login import current_user, login_required

import datetime

from app import db
from app.main import bp
import app.user
import os


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