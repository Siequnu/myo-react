from flask import Blueprint

bp = Blueprint('activities', __name__, template_folder='templates')

from . import routes, models