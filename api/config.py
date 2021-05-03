import os
basedir = os.path.abspath(os.path.dirname(__file__))

class myo(object):
	APP_NAME = 'myo'
	APP_URL = 'https://myo-app.com'

	WTF_CSRF_ENABLED = False
	# Generate with python3 -c "import uuid; print(uuid.uuid4().hex)"
	SECRET_KEY = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # Max content (default: 16MB)
	APP_ROOT = basedir

	SIGNUP_CODES = {'croissant'}
	REGISTRATION_IS_OPEN = True

	MAIL_SERVER = 'mail.hover.com'
	MAIL_PORT = 587
	MAIL_USE_TLS = True
	MAIL_USE_SSL = False
	MAIL_DEBUG = False
	MAIL_USERNAME = 'noreply@workupnow.online'
	MAIL_PASSWORD = 'bIkpu5-xorvux-fysgic'
	MAIL_DEFAULT_SENDER = 'noreply@workupnow.online'

	EXECUTOR_PROPAGATE_EXCEPTIONS = True
	EXECUTOR_TYPE = 'process'

	TS_SALT = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	TS_RECOVER_SALT = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	TS_MAX_AGE = 86400

	SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://myo:myo@localhost:3306/myo'
	SQLALCHEMY_TRACK_MODIFICATIONS = True
