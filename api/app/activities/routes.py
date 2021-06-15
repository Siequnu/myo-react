"""
Api routes
"""
from flask import jsonify
from flask import request

from app import db
from . import bp
from .models import get_activities_json, ActivityCompletion, SparkPlan

from datetime import datetime
import random
import json

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


@bp.route("/api/spark/plan")
@jwt_required()
def generate_spark_plan():
    """
    Generate a Spark plan for a single user
    """
    try:
        activities = get_activities_json()
        if activities is False:
            return {'error': 'An error \
                occured while loading the activities file'}

        # Get the plan length from the request, or default to 20

        spark_plan_length = 20

        # Randomly pop elements from this array and take note of the IDs
        activity_plan_ids = []
        for i in range(0, spark_plan_length):
            # Get a random activity
            random_activity = activities.pop(
                random.randrange(len(activities)))

            # Add its activityId to the list
            activity_plan_ids.append(random_activity['activityId'])

        # Dump this string
        activities_string = json.dumps(activity_plan_ids)

        # Save this as the new Spark plan
        spark_plan = SparkPlan(
            user_id=current_user.id,
            activity_set_json=activities_string
        )
        db.session.add(spark_plan)
        db.session.commit()

        return {'success': 'Your Spark plan was created successfully'}

    except Exception as error:
        print(error)
        return {'error', 'An error occured while generating the Spark plan.'}


@bp.route("/api/spark/get")
@jwt_required()
def get_spark_plan():
    """
    Retrieve a user's Spark plan
    """
    try:
        # Retrieve the Spark plan and parse the Spark plan list
        spark_plan = SparkPlan.query.filter_by(user_id=current_user.id).first()
        if spark_plan is None:
            # Generate a spark plan
            generate_spark_plan()

            # Try to query again
            spark_plan = SparkPlan.query.filter_by(
                user_id=current_user.id).first()

        spark_plan_list = json.loads(spark_plan.activity_set_json)

        # Get the list of activities
        activities = get_activities_json(current_user.id)

        # Populate the exercises, in order
        populated_activities = []
        for activity_id in spark_plan_list:
            populated_activities.append(activities[activity_id-1])

        return jsonify({'activities': populated_activities})

    except Exception as error:
        print(error)
        return {'error', 'An error occured while generating the Spark plan.'}
