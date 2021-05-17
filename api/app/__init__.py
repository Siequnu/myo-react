from flask import Flask
from config import *

import importlib, logging, os
from logging.handlers import RotatingFileHandler

from flask_sqlalchemy import SQLAlchemy as _BaseSQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_executor import Executor
from flask_marshmallow import Marshmallow

from flask_jwt_extended import JWTManager

from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode

class SQLAlchemy(_BaseSQLAlchemy):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(app, options)
        options['pool_pre_ping'] = True
db = SQLAlchemy()

migrate = Migrate()
mail = Mail()
executor = Executor()
ma = Marshmallow()
jwt = JWTManager()
oauth = OAuth()

auth0 = oauth.register(
    'auth0',
    client_id='iBtRx9Hw4263FF4ZXs6MED5Ljb1OlvRx',
    client_secret='8hyZMXHnJQ9HMZZol4TLUEDWrjUard5zWaw75-_VSxgzPFDwl3dIeZSIiTaROH9y',
    api_base_url='https://dev-z4eaow9y.eu.auth0.com',
    access_token_url='https://dev-z4eaow9y.eu.auth0.com/oauth/token',
    authorize_url='https://dev-z4eaow9y.eu.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)

def create_app(config_class):
    myo_app = Flask(__name__, static_folder='../build', static_url_path='/')
    myo_app.config.from_object(config_class)

    db.init_app(myo_app)
    migrate.init_app(myo_app, db)
    myo_app.app_context().push()

    mail.init_app(myo_app)
    executor.init_app(myo_app)
    ma.init_app(myo_app)

    jwt.init_app(myo_app)

    oauth.init_app(myo_app)

    # Compile registry of blueprints
    services = [
        {'path': 'app.main'},
        {'path': 'app.errors'},
        {'path': 'app.user', 'url_prefix': '/user'},
        {'path': 'app.activities', 'url_prefix': '/activities'},
    ]
    
    # Enable each service
    for service in services:
        module = importlib.import_module(service['path'], package='app')
        if 'url_prefix' in service:
            myo_app.register_blueprint(getattr(module, 'bp'), url_prefix=service['url_prefix'])
        else:
            myo_app.register_blueprint(getattr(module, 'bp'))

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
        myo_app.logger.info('Myo App startup')

    db.create_all()
    db.session.commit()

    return myo_app
