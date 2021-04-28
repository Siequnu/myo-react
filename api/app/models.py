from datetime import datetime
from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app import login
from flask import current_app

@login.user_loader
def load_user(id):
	return User.query.get(int(id))

def is_admin (username):
	# Returns True if user is admin, False if not
	try:
		return User.query.filter(User.username==username).one_or_none().is_admin
	except:
		return False


def custom_service_is_enabled (service_name):
	is_enabled = False
	for service in current_app.config['CUSTOM_SERVICES']:
		enabled_name = service['path'].split('.')[1]
		if enabled_name == service_name:
			is_enabled = True

	return is_enabled


class User(UserMixin, db.Model):
	__table_args__ = {'sqlite_autoincrement': True}
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(64), index=True, unique=True)
	email = db.Column(db.String(120), index=True, unique=True)
	password_hash = db.Column(db.String(128))
	last_seen = db.Column(db.DateTime, default=datetime.now())
	registered = db.Column(db.DateTime, default=datetime.now())
	email_confirmed = db.Column(db.Boolean, default=False)
	is_admin = db.Column(db.Boolean, default=False)
	can_return_to_admin = db.Column(db.Boolean, default=False)
	is_superintendant = db.Column(db.Boolean, default=False)

	courses = db.relationship('Course', backref='user', lazy='dynamic')
	activities = db.relationship('Activity', backref='user', lazy='dynamic')

	def __repr__(self):
		return '<User {}>'.format(self.username)
	
	def set_password(self, password):
		self.password_hash = generate_password_hash(password)

	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

	def set_can_return_to_admin(self, boolean):
		self.can_return_to_admin = boolean
		db.session.commit ()

	@staticmethod
	def user_email_is_confirmed (username):
		return User.query.filter_by(username=username).first().email_confirmed
	
	@staticmethod
	def give_admin_rights(user_id):
		user = User.query.get(user_id)
		user.is_admin = True
		db.session.commit()
	
	@staticmethod
	def remove_admin_rights(user_id):
		user = User.query.get(user_id)
		user.is_admin = False
		db.session.commit()

	@staticmethod
	def give_superintendant_rights(user_id):
		user = User.query.get(user_id)
		user.is_superintendant = True
		db.session.commit()
	
	@staticmethod
	def remove_superintendant_rights(user_id):
		if int(user_id) != 1: # Can't remove original admin
			user = User.query.get(user_id)
			user.is_superintendant = False
			db.session.commit()
	
	@staticmethod
	def delete_user (user_id):
		if int(user_id) != 1: # Can't remove original admin			
			user = User.query.get(user_id)
			db.session.delete(user)
			db.session.commit()
			return True
		else:
			return False

