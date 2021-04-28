from app import db
import app.models, app.email_model
from app.models import User
from flask_login import current_user
import string, time, xlrd
from flask import url_for, render_template, redirect, session, flash, request, abort, current_app
from datetime import datetime, timedelta
from time import sleep
import random
from sqlalchemy import func

from app import executor


class OnboardingAnswer(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	data = db.Column(db.String(5000))


def get_total_user_count ():
	# Remove admins?
	return len(User.query.all())


def get_active_user_count ():
	now = datetime.now()
	active_cutoff = now - timedelta(minutes=1)
	return User.query.filter(User.last_seen > active_cutoff).count()


def get_active_user_names ():
	now = datetime.now()
	active_cutoff = now - timedelta(minutes=1)
	users = []
	for user in User.query.filter(User.last_seen > active_cutoff).all():
		users.append (user.username)
	return users


def get_all_admin_info():
	return User.query.filter(User.is_admin==True).all()