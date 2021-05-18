from datetime import timedelta
import os
basedir = os.path.abspath(os.path.dirname(__file__))


class myo(object):
    APP_NAME = 'myo'
    APP_URL = 'https://myo-app.com'
    RECOVER_EXTERNAL_URL = '/reset/'

    # Generate with python3 -c "import uuid; print(uuid.uuid4().hex)"
    JWT_SECRET_KEY = '6aa2209617b64929b59eb07f374e5d50'
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=6)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)

    SECRET_KEY = '82a232c417cc4de1aef8027ee21d5a5c'
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

    TS_SALT = '79ddf70f548c4f609e98430712914eb5'
    TS_RECOVER_SALT = '1bae870a4af94f808708ad12f5c11a66'
    TS_MAX_AGE = 86400

    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://myo:myo@localhost:3306/myo'
    SQLALCHEMY_TRACK_MODIFICATIONS = True
