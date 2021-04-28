from datetime import datetime

from app import db


class ActivityFeedbackAnswer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # !FIXME link to activity foreign key
    activity_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    data = db.Column(db.String(5000))


class ActivityCompletion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # !FIXME link to activity foreign key
    activity_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    completed_timestamp = db.Column(db.DateTime, default=datetime.now())
    
def check_activity_completion (user_id, activity_id):
    query = ActivityCompletion.query.filter_by(user_id=user_id).filter_by(activity_id=activity_id).first()
    if query is None:
        return False
    else:
        return True