"""
Api routes
"""
from flask import jsonify
from flask import request

from app import db
from . import bp
from .models import get_activities_json, ActivityCompletion

from datetime import datetime

from flask_jwt_extended import jwt_required
from flask_jwt_extended import current_user


@bp.route("/api/list")
def get_all_activities():
    """
    Get all the activities
    """
    activities = get_activities_json()
    if activities is False:
        return {'error': 'An error occured while loading the activities file'}

    return jsonify({'activities': activities})


@bp.route("/api/get/<int:activity_id>")
def get_single_activity(activity_id):
    """
    Get single activity
    """
    activities = get_activities_json()
    if activities is False:
        return {'error': 'An error occured while loading the activities file'}

    try:
        activity = activities[activity_id]
    except Exception as error:
        print(error)
        return {'error', 'An error occured.'}
    return jsonify({'activity': activity})


@bp.route('/api/complete', methods=['POST'])
@jwt_required()
def mark_activity_as_complete():
    """
    Mark an activity as completed
    """
    try:
        # Get activity data from the request
        activity_id = request.json.get('activity_id', None)
        activity_feedback = request.json.get('activity_feedback', None)

        complete_activity = ActivityCompletion(
            user_id=current_user.id,
            activity_id=activity_id,
            timestamp=datetime.now(),
            activity_feedback_json=activity_feedback
        )

        db.session.add(complete_activity)
        db.session.commit()

        return {'success': 'Marked this activity as complete'}
    except Exception as error:
        print(error)
        return jsonify({'error': 'An error occured.'})
