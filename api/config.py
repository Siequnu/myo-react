import os
basedir = os.path.abspath(os.path.dirname(__file__))

class myo(object):
	APP_NAME = 'myo'
	APP_URL = 'https://myo-app.com'

	CUSTOM_SERVICES = []

	WTF_CSRF_ENABLED = False
	# Generate with python3 -c "import uuid; print(uuid.uuid4().hex)"
	SECRET_KEY = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # Max content (default: 16MB)
	APP_ROOT = basedir

	THUMBNAIL_FOLDER = os.path.join(basedir, 'app/static/thumbnails/')
	THUMBNAIL_RESOLUTION = 120
	UPLOAD_FOLDER = os.path.join(basedir, 'uploads')
	ALLOWED_EXTENSIONS = set(
		['pdf', 'doc', 'docx', 'pages', 'key', 'ppt', 'pptx', 'zip', 'rar'])

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

	PUSHER_APP_ID = ''
	PUSHER_KEY = ''
	PUSHER_SECRET = ''
	PUSHER_CLUSTER = 'ap3'
	PUSHER_SSL = True

	FIREBASE_API_KEY = ""
	FIREBASE_AUTH_DOMAIN = ""
	FIREBASE_DATABASE_URL = ""
	
	PRO_WRITING_AID_API_KEY = ''
	BEYOND_GRAMMAR_API_KEY = ''

	TOASTR_OPACITY = False
	TOASTR_PROGRESS_BAR = 'false'
	TOASTR_EXTENDED_TIMEOUT = 50
	TOASTR_JQUERY_VERSION = '3.5.0'

	EXECUTOR_PROPAGATE_EXCEPTIONS = True
	EXECUTOR_TYPE = 'process'

	TS_SALT = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	TS_RECOVER_SALT = 'e6c53089d6e5411eb6ff46f8bf83c5d4'
	TS_MAX_AGE = 86400

	COMPRESS_MIMETYPES = ['text/html', 'text/css', 'text/xml', 'application/json', 'application/javascript']
	COMPRESS_LEVEL = 6
	COMPRESS_MIN_SIZE = 500

	DROPZONE_ALLOWED_FILE_CUSTOM = True
	DROPZONE_ALLOWED_FILE_TYPE = 'image/*, .pdf, .txt, .pptx, .ppt, .xls, .xlsx'

	SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://myo:myo@localhost:3306/myo'
	SQLALCHEMY_ENGINE_OPTIONS = {'pool_pre_ping': True, 'pool_size' : 20, 'pool_recycle' : 15}
	SQLALCHEMY_TRACK_MODIFICATIONS = True
	SQLALCHEMY_POOL_PRE_PING = True
