"""
Provides models for onboarding module
"""
from datetime import datetime
from app import db


class UserOnboarding(db.Model):
    """
    Store user onboarding answers
    """
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    onboarding_completed_timestamp = db.Column(
        db.DateTime, default=datetime.now())
    onboarding_json = db.Column(db.String(5000))

    def __repr__(self):
        return '<UserOnboarding {}>'.format(self.username)
