from flask import Flask
from config import *

import importlib, logging, os
from logging.handlers import RotatingFileHandler

from flask_sqlalchemy import SQLAlchemy as _BaseSQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_bootstrap import Bootstrap  # This loads bootstrap-flask
from flask_mail import Mail
from flask_executor import Executor
from flask_toastr import Toastr
from flask_compress import Compress
from flask_qrcode import QRcode
from flask_marshmallow import Marshmallow
from flask_dropzone import Dropzone
from flask_talisman import Talisman
from flask_seasurf import SeaSurf

class SQLAlchemy(_BaseSQLAlchemy):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(app, options)
        options['pool_pre_ping'] = True
db = SQLAlchemy()

migrate = Migrate()
login = LoginManager()
login.login_view = 'user.login'
bootstrap = Bootstrap()
mail = Mail()
executor = Executor()
toastr = Toastr()
compress = Compress()
ma = Marshmallow()
dropzone = Dropzone ()
csrf = SeaSurf()
talisman = Talisman()

def create_app(config_class):
    myo_app = Flask(__name__)
    myo_app.config.from_object(config_class)

    myo_app.jinja_env.cache = {}

    db.init_app(myo_app)
    migrate.init_app(myo_app, db)
    myo_app.app_context().push()

    login.init_app(myo_app)
    bootstrap = Bootstrap(myo_app)
    mail.init_app(myo_app)
    executor.init_app(myo_app)
    toastr.init_app(myo_app)
    compress.init_app(myo_app)
    qrcode = QRcode(myo_app)
    ma.init_app(myo_app)
    dropzone.init_app(myo_app)
    csrf.init_app(myo_app)

    # Set a talisman policy
    csp = {
        'default-src': [
            '\'self\'',
            '\'unsafe-inline\'',
            'cdnjs.cloudflare.com',
            'fonts.googleapis.com',
            'fonts.gstatic.com',
            '*.pusher.com',
            '*.w3.org',
            'kit-free.fontawesome.com',
            'googleads.g.doubleclick.net',
        ],
        'img-src': [
            '*',
            '\'self\'',
            'data:'
        ],
        'style-src': [
            '*',
            '\'self\'',
            '\'unsafe-inline\'',
            '\'unsafe-eval\'',
        ],
        'connect-src': [
            '\'self\'',
            '*.pusher.com',
            'wss://ws-ap3.pusher.com',
            'rtg.prowritingaid.com',
            'pagead2.googlesyndication.com',
        ],
        'font-src': [
            '\'self\'',
            'data:',
            '*.fontawesome.com',
            'fonts.gstatic.com',
        ],
        'script-src': [
            '\'self\'',
            '\'unsafe-inline\'',
            'pagead2.googlesyndication.com',
            '*.pusher.com',
            'ajax.googleapis.com',
            'code.jquery.com',
            'cdn.jsdelivr.net',
            'cdnjs.cloudflare.com',
            'cdn.prowritingaid.com',
            'https://buttons.github.io/buttons.js',
        ]
    }
    talisman.init_app(myo_app, content_security_policy=csp, force_https=False)

    # Compile registry of blueprints
    basic_services = [
        {'path': 'app.main'},
        {'path': 'app.errors'},
        {'path': 'app.api'},
        {'path': 'app.user', 'url_prefix': '/user'},
        {'path': 'app.activities', 'url_prefix': '/activities'},
    ]
    all_services = basic_services + myo_app.config['CUSTOM_SERVICES']
    
    # Enable each service
    for service in all_services:
        module = importlib.import_module(service['path'], package='app')
        if 'url_prefix' in service:
            myo_app.register_blueprint(getattr(module, 'bp'), url_prefix=service['url_prefix'])
        else:
            myo_app.register_blueprint(getattr(module, 'bp'))

    # Create an uploads folder if non-existant
    if not os.path.exists(os.path.join(myo_app.config['UPLOAD_FOLDER'])):
        os.mkdir(myo_app.config['UPLOAD_FOLDER'])

    # Create a thumbnails folder if non-existant
    if not os.path.exists(os.path.join(myo_app.config['THUMBNAIL_FOLDER'])):
        os.mkdir(myo_app.config['THUMBNAIL_FOLDER'])

    # Log errors to local log
    if not myo_app.debug and not myo_app.testing:
        logsPath = os.path.join(myo_app.config['APP_ROOT'], 'logs')
        if not os.path.exists(os.path.join(logsPath)):
            os.mkdir(logsPath)
        file_handler = RotatingFileHandler(os.path.join(
            logsPath, 'myo_app.log'), maxBytes=10240, backupCount=10)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        myo_app.logger.addHandler(file_handler)

        myo_app.logger.setLevel(logging.INFO)
        myo_app.logger.info('WorkUp App startup')

    db.create_all()
    db.session.commit()

    return myo_app
