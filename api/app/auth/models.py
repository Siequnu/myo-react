"""
Provides models for authentication module
"""
from datetime import datetime
from app import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    """
    User class
    """
    __table_args__ = {'sqlite_autoincrement': True}
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    last_seen = db.Column(db.DateTime, default=datetime.now())
    registered = db.Column(db.DateTime, default=datetime.now())
    email_confirmed = db.Column(db.Boolean, default=False)
    is_admin = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        """
        Set a user password
        """
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @staticmethod
    def user_email_is_confirmed(username):
        return User.query.filter_by(username=username).first().email_confirmed

    @staticmethod
    def give_admin_rights(user_id):
        """
        Give admin rights to a user
        """
        user = User.query.get(user_id)
        user.is_admin = True
        db.session.commit()

    @staticmethod
    def remove_admin_rights(user_id):
        """
        Remove admin rights from a user
        """
        user = User.query.get(user_id)
        user.is_admin = False
        db.session.commit()

    @staticmethod
    def delete_user(user_id):
        """
        Delete a user
        """
        if int(user_id) != 1:  # Can't remove original admin
            user = User.query.get(user_id)
            db.session.delete(user)
            db.session.commit()
            return True
        else:
            return False
