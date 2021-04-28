from flask import render_template, flash, abort, current_app, request, redirect, url_for, send_from_directory, jsonify
from flask_login import current_user, login_required

from ..models import is_admin, User
from . import bp
from . import models
from .models import ActivityFeedbackAnswer, ActivityCompletion
from .forms import CourseForm, ActivityForm, MaterialForm
from ..user.models import OnboardingAnswer

from app import db

import json
from datetime import datetime

"""
Api routes
"""

@bp.route("/api/get")
def get_all_activities():
	"""
	Get all the activities
	"""
	activities_file = open('../public/activities/activities.json')
	activities = json.load(activities_file)
	return jsonify({ 'activities': activities})

# Route to save the activity feedback data
@bp.route("/api/feedback/<int:activity_id>", methods=['POST'])
@login_required
def save_activity_feedback_data(activity_id):
	if current_user.is_authenticated:
			
			# !FIXME need to implement activity check
			
			feedback = ActivityFeedbackAnswer(
				activity_id=activity_id,
				user_id=current_user.id,
				data=json.dumps(request.json)
			)
			db.session.add(feedback)
			db.session.commit()

			flash ('Thank you for your feedback! ', 'success')
			return jsonify({'success': 'Feedback data added'})
	else:
		abort (403)

# Route to check if a user has completed an activity
@bp.route("/api/feedback/<int:activity_id>",)
@login_required
def activity_completion_check(user_id, activity_id):
	if current_user.is_authenticated:

			if models.activity_completion_check (user_id, activity_id):
				return jsonify({'completed': 'false'})
			else:
				return jsonify({'completed': 'true'})
	else:
		abort (403)

# Route to mark an activity as complete
@bp.route("/api/complete/<int:activity_id>", methods=['POST'])
@login_required
def mark_activity_as_completed(activity_id):
	if current_user.is_authenticated:
			
			# !FIXME need to implement activity check
			
			activity_completion = ActivityCompletion(
				activity_id=activity_id,
				user_id=current_user.id,
				completed_timestamp = datetime.now()
			)
			db.session.add(activity_completion)
			db.session.commit()

			flash ('Thank you for your feedback! ', 'success')
			return jsonify({'success': 'Feedback data added'})
	else:
		abort (403)