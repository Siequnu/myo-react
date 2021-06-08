from flask import jsonify
from . import bp
import json
from colorthief import ColorThief

"""
Class helpers for the Activities module
"""


def write_activities_json(activities_object):
    """
    Write the activites file to disk
    """
    try:
        activities_file = open('../public/activities/activities.json', 'w')
        json.dump(activities_object, activities_file)
        activities_file.close()
    except Exception as e:
        print('An error occured while trying to \
            write the activities.json file')
        print(e)


def get_activities_json():
    """
    Open, parse and return the activites JSON file
    """
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
            print(f"Generating for {activity_id}")
            if 'background_colour' not in activity or \
                    OVERWRITE_BACKGROUND_COLOURS:
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
    except Exception as error:
        print(error)
        return {'error', 'An error occured.'}
    return jsonify({'activity': activity})
