import os
basedir = os.path.abspath(os.path.dirname(__file__))

class myo(object):
	APP_NAME = 'myo'
	APP_URL = 'https://myo-app.com'

	# Generate with python3 -c "import uuid; print(uuid.uuid4().hex)"
	SECRET_KEY = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	JWT_SECRET_KEY = '39a84ef123514d1c966127ae89514343'
	MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # Max content (default: 16MB)
	APP_ROOT = basedir

	# Auth0
	CLIENT_ID = 'iBtRx9Hw4263FF4ZXs6MED5Ljb1OlvRx'
	CLIENT_SECRET = '8hyZMXHnJQ9HMZZol4TLUEDWrjUard5zWaw75-_VSxgzPFDwl3dIeZSIiTaROH9y'

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
