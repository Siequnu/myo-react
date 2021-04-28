from flask import Blueprint
from flask_restful import Api

bp = Blueprint('api', __name__, template_folder='templates')
api = Api (bp)

from app.api import routes, schemas

