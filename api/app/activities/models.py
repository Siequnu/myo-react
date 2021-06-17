"""
Provides models for Myo activities
"""
from datetime import datetime
from app import db
import json
from colorthief import ColorThief
from sqlalchemy_serializer import SerializerMixin


class Activity(db.Model, SerializerMixin):
    """
    Store Myo activities
    """
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500))
    description = db.Column(db.String(1000))
    thumbnail = db.Column(db.String(200))
    chips = db.Column(db.String(200))
    pages = db.Column(db.String(5000))
    background_colour = db.Column(db.String(50))
    activityId = db.Column(db.Integer)

    def __repr__(self):
        return '<Activity {}>'.format(self.title)


class ActivityCompletion(db.Model):
    """
    Store when a user completes an activity
    """
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    activity_id = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, default=datetime.now())
    activity_feedback_json = db.Column(db.String(5000))

    def __repr__(self):
        return '<ActivityCompletion {}>'.format(self.id)


class SparkPlan(db.Model):
    """
    Stores a custom Spark activity sequence for each user
    """
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    activity_set_json = db.Column(db.String(5000))
    completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<SparkPlan {}>'.format(self.id)


"""
Class helpers for the Activities module
"""


def write_activities_json(activities_object):
    """
    Write the activities file to disk
    """
    try:
        activities_file = open('../public/activities/activities.json', 'w')
        json.dump(activities_object, activities_file)
        activities_file.close()
    except Exception as e:
        print('An error occured while trying to \
            write the activities.json file')
        print(e)


def get_activities_json(user_id=False):
    """
    Open, parse and return the activities JSON file
    """
    try:
        # Open and parse the JSON file
        activities_file = open('../public/activities/activities.json')
        raw_activities = json.load(activities_file)

        # Add an ID for each activity
        activities = []
        id = 1
        for activity in raw_activities:
            activity['activityId'] = id
            activities.append(activity)
            id += 1

        # If a user_id was received, add in activity completion status
        if user_id:
            activities_with_status = []
            for activity in activities:
                completion_status = ActivityCompletion.query.filter_by(
                    user_id=user_id).filter_by(
                    activity_id=activity['activityId']).first() is not None

                activity['completed'] = completion_status

                activities_with_status.append(activity)

            activities = activities_with_status

        return activities

    except Exception as e:
        print('An error occured while trying to load the activities.json file')
        print(e)
        return False


def rgb2hex(color):
    """Converts a list or tuple of color to an RGB string

    Args:
        color (list|tuple): the list or tuple of integers
        (e.g. (127, 127, 127))

    Returns:
        str:  the rgb string
    """
    return f"#{''.join(f'{hex(c)[2:].upper():0>2}' for c in color)}"


"""
Startup routes
"""


def get_dominant_colour(image_path):
    """
    Calculates the dominant colours of activity images
    """
    color_thief = ColorThief(image_path)
    dominant_color = color_thief.get_color(quality=1)
    return dominant_color


# DEBUG
OVERWRITE_BACKGROUND_COLOURS = False


def calculate_and_write_background_colours():
    """
    Iterate through the activites, and generate
    a background colour from each thumbnail
    """
    try:
        activities = get_activities_json()

        path_prefix = '../public/activities/'
        activity_id = 1
        for activity in activities:
            if 'background_colour' not in activity or \
                    OVERWRITE_BACKGROUND_COLOURS:
                print(f"Generating for {activity_id}")
                thumbnail_path = path_prefix + \
                    str(activity_id) + '/' + activity['thumbnail']
                colour = get_dominant_colour(thumbnail_path)
                colour_hex = rgb2hex(colour)
                activities[activity_id - 1]['background_colour'] = colour_hex

            activity_id += 1

        write_activities_json(activities)
        print('Successfully finished processing.')

    except Exception as e:
        print('An error occured while \
            processing the activity background colours.')
        print(e)


print('Startup task: generating activity background colours.')
calculate_and_write_background_colours()


def load_activities_into_db():
    """
    On app startup, parse the JSON file, and add activities
    into the database
    """
    activities = get_activities_json()
    for activity in activities:

        if Activity.query.filter_by(
                activityId=int(activity['activityId'])).first() is None:

            # Add the new activity
            print(f"Adding new activity: {activity['title']}")
            new_activity = Activity(
                title=activity['title'],
                description=activity['description'],
                thumbnail=activity['thumbnail'],
                chips=(json.dumps(activity['chips']) if
                       ('chips' in activity) else json.dumps([])),
                pages=json.dumps(activity['pages']),
                background_colour=activity['background_colour'],
                activityId=activity['activityId']
            )
            db.session.add(new_activity)
    db.session.commit()
    print('Finished adding new activities.')


print('Startup task: adding new activities to DB.')
load_activities_into_db()


def get_activities_from_db(user_id=False):
    """
    Return all activities from the database
    """
    activities = []
    for activity in Activity.query.all():
        activities.append(activity.to_dict())

    # If a user_id was received, add in activity completion status
    if user_id:
        activities_with_status = []
        for activity in activities:
            completion_status = ActivityCompletion.query.filter_by(
                user_id=user_id).filter_by(
                activity_id=activity['activityId']).first() is not None

            activity['completed'] = completion_status

            activities_with_status.append(activity)

        activities = activities_with_status
    return activities
