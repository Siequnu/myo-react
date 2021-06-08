from flask import Blueprint

bp = Blueprint('onboarding', __name__)

from . import routes, models
