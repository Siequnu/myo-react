from app import db
from . import bp

@bp.app_errorhandler(403)
def access_denied(error):
    return {'error': '403'}, 403

@bp.app_errorhandler(404)
def not_found_error(error):
    print (error)
    return {'error': '404'}, 404

@bp.app_errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return {'error': '500'}, 500