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
	activities_file = open('app/static/activities/activities.json')
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


"""
Main routes
"""


@bp.route('/home/')
@login_required
def home():
	courses = models.Course.query.all()
	activities = models.Course.query.all()
	materials = models.ActivityMaterial.query.all()

	# Access the activities from the json file
	activities_file = open('app/static/activities/activities.json')
	activities = json.load(activities_file)
	
	return render_template(
            'app_home.html',
         			courses=courses,
         			activities=activities,
         			materials=materials)


@bp.route('/spark/')
@login_required
def spark():
	if OnboardingAnswer.query.filter_by(user_id=current_user.id).first() is None:
		return redirect(url_for('main.onboarding'))
	
	courses = models.Course.query.all()
	activities = models.Course.query.all()
	materials = models.ActivityMaterial.query.all()

	# Access the activities from the json file
	activities_file = open('app/static/activities/activities.json')
	activities = json.load(activities_file)

	# Add the completion data
	counter = 1
	current_activity_tripswitch = False # Tripswitch to identify the first activity that hasn't been completed
	for activity in activities:
		completed_status = models.check_activity_completion (current_user.id, counter)
		
		# If this is the NEXT activity to be done
		if completed_status is False and current_activity_tripswitch is False:
			current_activity_tripswitch = True
			activity['current'] = True
		
		activity['completed'] = completed_status
		counter += 1

	return render_template(
            'app_spark.html',
         			courses=courses,
         			activities=activities,
         			materials=materials)


@bp.route('/create/')
@login_required
def create():

	if OnboardingAnswer.query.filter_by(user_id=current_user.id).first() is None:
		return redirect(url_for('main.onboarding'))
		
	courses = models.Course.query.all()
	activities = models.Course.query.all()
	materials = models.ActivityMaterial.query.all()
	
	# Access the activities from the json file
	activities_file = open('app/static/activities/activities.json')
	activities = json.load(activities_file)
	
	return render_template(
            'app_create.html',
         			courses=courses,
         			activities=activities,
         			materials=materials)


@bp.route('/me/')
@login_required
def me():
	user_info = User.query.get(current_user.id)
	return render_template(
            'app_me.html',
         			user_info=user_info)


@bp.route('/view/<int:activity_id>')
@bp.route('/view/')
@login_required
def view_activity(activity_id=False):

	if OnboardingAnswer.query.filter_by(user_id=current_user.id).first() is None:
		return redirect(url_for('main.onboarding'))
	
	# Activity index starts at 1, not 0
	activity_id = activity_id - 1

	# Create fake dataset until we figure out a model for this
	activities_file = open('app/static/activities/activities.json')
	activities = json.load(activities_file)

	if activity_id:
		#activity = models.Activity.query.get_or_404(activity_id)
		activity = activities[activity_id]
	else:
		activity = activities[0]
	return render_template(
            'app_view_activity.html',
           	activity=activity,
         			activity_id=activity_id,
         			thumbnail_url='/static/activities/' +
        				str(activity_id + 1) + '/' + activity['thumbnail'],
        )


@bp.route('/feedback/view/all')
@login_required
def view_activity_feedback():
	"""
	View all the user feedback
	"""
	if current_user.is_admin:

		activities_file = open('app/static/activities/activities.json')
		activities = json.load(activities_file)

		feedback = ActivityFeedbackAnswer.query.all()
		feedback_dict = {}

		for answer in feedback:
			if answer.activity_id not in feedback_dict:
				feedback_dict[answer.activity_id] = []
			
			feedback_dict[answer.activity_id].append (json.loads(answer.data))

		return render_template(
			'view_activity_feedback.html',
			feedback=feedback_dict,
			activities = activities)


@bp.route('/onboarding/view/all')
@login_required
def view_onboarding_answers():
	"""
	View all the onboarding answers
	"""
	if current_user.is_admin:

		answers = OnboardingAnswer.query.all()

		return render_template(
			'view_onboarding_answers.html',
			answers = answers)