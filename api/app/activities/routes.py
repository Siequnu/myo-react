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

from colorthief import ColorThief
"""
Class helpers
"""


def write_activities_json(activities_object):
	try:
		activities_file = open('../public/activities/activities.json', 'w')
		json.dump(activities_object, activities_file)
		activities_file.close()
	except Exception as e:
		print('An error occured while trying to write the activities.json file')
		print(e)


def get_activities_json():
	try:
		activities_file = open('../public/activities/activities.json')
		activities = json.load(activities_file)
		return activities

	except Exception as e:
		print('An error occured while trying to load the activities.json file')
		print(e)
		return False


def rgb2hex(color):
    """Converts a list or tuple of color to an RGB string

    Args:
        color (list|tuple): the list or tuple of integers (e.g. (127, 127, 127))

    Returns:
        str:  the rgb string
    """
    return f"#{''.join(f'{hex(c)[2:].upper():0>2}' for c in color)}"


"""
Startup routes
"""
# At startup, calculate all colours


def get_dominant_colour(image_path):
	color_thief = ColorThief(image_path)
	dominant_color = color_thief.get_color(quality=1)
	return dominant_color

OVERWRITE_BACKGROUND_COLOURS = False 
def calculate_and_write_background_colours():
	try:
		activities = get_activities_json()

		path_prefix = '../public/activities/'
		activity_id = 1
		for activity in activities:
			if 'background_colour' not in activity or OVERWRITE_BACKGROUND_COLOURS:
				thumbnail_path = path_prefix + str(activity_id) + '/' + activity['thumbnail']
				colour = get_dominant_colour(thumbnail_path)
				colour_hex = rgb2hex(colour)
				activities[activity_id - 1]['background_colour'] = 	colour_hex

			activity_id += 1
		
		write_activities_json (activities)
		print ('Successfully finished processing.')

	except Exception as e:
		print('An error occured while processing the activity background colours.')
		print(e)


print('Activities startup task: generating activity background colours.')
calculate_and_write_background_colours()


"""
Api routes
"""


@bp.route("/api/list")
def get_all_activities():
	"""
	Get all the activities
	"""
	activities_file = open('../public/activities/activities.json')
	activities = json.load(activities_file)
	return jsonify({'activities': activities})


@bp.route("/api/get/<int:activity_id>")
def get_single_activity(activity_id):
	"""
	Get single activity
	"""
	activities_file = open('../public/activities/activities.json')
	activities = json.load(activities_file)
	try:
		activity = activities[activity_id]
	except Exception as e:
		return jsonify({'error', 'An error occured.'})
	return jsonify({'activity': activity})

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

		flash('Thank you for your feedback! ', 'success')
		return jsonify({'success': 'Feedback data added'})
	else:
		abort(403)

# Route to check if a user has completed an activity


@bp.route("/api/feedback/<int:activity_id>")
@login_required
def activity_completion_check(user_id, activity_id):
	if current_user.is_authenticated:

		if models.activity_completion_check(user_id, activity_id):
			return jsonify({'completed': 'false'})
		else:
			return jsonify({'completed': 'true'})
	else:
		abort(403)

# Route to mark an activity as complete

@bp.route("/api/complete/<int:activity_id>", methods=['POST'])
@login_required
def mark_activity_as_completed(activity_id):
	if current_user.is_authenticated:

		# !FIXME need to implement activity check

		activity_completion = ActivityCompletion(
				activity_id=activity_id,
				user_id=current_user.id,
				completed_timestamp= datetime.now()
			)
		db.session.add(activity_completion)
		db.session.commit()

		flash('Thank you for your feedback! ', 'success')
		return jsonify({'success': 'Feedback data added'})
	else:
		abort(403)
