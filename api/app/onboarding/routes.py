"""
Myo onboarding routes
"""
from datetime import datetime

from flask import request

from flask_jwt_extended import jwt_required
from flask_jwt_extended import current_user

from app import db
from . import bp
from .models import UserOnboarding


@bp.route("/status")
@jwt_required()
def get_user_onboarding_status():
    """
    Return onboarding status for a user
    """
    onboarding_status = UserOnboarding.query.filter_by(
        user_id=current_user.id).first()

    if onboarding_status is None:
        return {'error': 'User has not completed onboarding'}

    return {'success': 'User has completed onboarding'}


@bp.route('/save', methods=['POST'])
@jwt_required()
def save_onboarding():
    """
    Save a new user onboarding
    """
    try:
        # Get onboarding data from the request
        onboarding_json = request.json.get('onboarding_json', None)

        if onboarding_json is None:
            return {'error': 'Did not receive any onboarding JSON'}

        onboarding = UserOnboarding(
            user_id=current_user.id,
            onboarding_completed_timestamp=datetime.now(),
            onboarding_json=onboarding_json
        )

        db.session.add(onboarding)
        db.session.commit()

        return {'success': 'The new product was added successfully'}
    except Exception as error:
        print(error)
        return {'error': 'An error occured saving your onboarding. \
            Please contact support.'}
