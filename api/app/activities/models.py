from datetime import datetime

from app import db


class Course(db.Model):
    __table_args__ = {'sqlite_autoincrement': True}
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(280))
    description = db.Column(db.String(500))
    created_timestamp = db.Column(db.DateTime, default=datetime.now())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Course {}>'.format(self.key)


def create_new_course(title, description, created_by):
    course = Course(
        title=title,
        description=description,
        created_timestamp=datetime.now(),
        created_by=created_by
    )
    db.session.add(course)
    db.session.commit()


class Activity(db.Model):
    __table_args__ = {'sqlite_autoincrement': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(280))
    description = db.Column(db.String(500))
    activity_duration = db.Column(db.Integer)
    created_timestamp = db.Column(db.DateTime, default=datetime.now())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Activity {}>'.format(self.key)


def create_new_activity(name, description, activity_duration, created_by):
    activity = Activity(
        name=name,
        description=description,
        activity_duration=activity_duration,
        created_by=created_by,
        created_timestamp=datetime.now(),
    )
    db.session.add(activity)
    db.session.commit()


class CourseActivities (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))
    activity_id = db.Column(db.Integer, db.ForeignKey('activity.id'))


def add_activity_to_course(course_id, activity_id):
    new_course_activity = CourseActivities(
        course_id=course_id,
        activity_id=activity_id
    )
    db.session.add(new_course_activity)
    db.session.commit()


def remove_activity_from_course(course_id, activity_id):
    for activity in CourseActivities.query.filter_by(course_id=course_id).filter_by(activity_id=activity_id).all():
        db.session.delete(activity)
        db.session.commit()


class ActivityType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    activity_type = db.Column(db.String(280))
    description = db.Column(db.String(500))
    created_timestamp = db.Column(db.DateTime, default=datetime.now())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Activity type {}>'.format(self.key)


def create_new_activity_type(activity_type, created_by):
    activity_type = ActivityType(
        activity_type=activity_type,
        created_timestamp=datetime.now(),
        created_by=created_by
    )
    db.session.add(activity_type)
    db.session.flush()  # Access the activity ID
    db.session.commit()
    return activity_type.id


class ActivityTypesRelationship (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    activity_id = db.Column(db.Integer, db.ForeignKey('activity.id'))
    activity_type_id = db.Column(db.Integer, db.ForeignKey('activity_type.id'))


def add_type_to_activity(activity_id, activity_type_id):
    new_activity_type_relationship = ActivityTypesRelationship(
        activity_id=activity_id,
        activity_type_id=activity_type_id
    )
    db.session.add(new_activity_type_relationship)
    db.session.commit()


def remove_type_from_activity(activity_id, activity_type_id):
    for relationship in ActivityTypesRelationship.query.filter_by(activity_id=activity_id).filter_by(activity_type_id=activity_type_id).all():
        db.session.delete(relationship)
        db.session.commit()


class ActivityTheme(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    theme = db.Column(db.String(280))
    description = db.Column(db.String(500))
    created_timestamp = db.Column(db.DateTime, default=datetime.now())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Activity theme {}>'.format(self.key)


class ActivityMaterial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    material = db.Column(db.String(280))
    description = db.Column(db.String(500))
    created_timestamp = db.Column(db.DateTime, default=datetime.now())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Activity material {}>'.format(self.key)


def create_new_material(material, description, created_by):
    new_material = ActivityMaterial(
        material=material,
        description=description,
        created_timestamp=datetime.now(),
        created_by=created_by
    )
    db.session.add(new_material)
    db.session.flush()  # Access the activity ID
    db.session.commit()
    return new_material.id


class ActivityMaterialRelationship (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    activity_id = db.Column(db.Integer, db.ForeignKey('activity.id'))
    material_id = db.Column(db.Integer, db.ForeignKey('activity_material.id'))


def add_material_to_activity(activity_id, material_id):
    new_activity_material_relationship = ActivityMaterialRelationship(
        activity_id=activity_id,
        material_id=material_id
    )
    db.session.add(new_activity_material_relationship)
    db.session.commit()


def remove_material_from_activity(activity_id, material_id):
    for relationship in ActivityMaterialRelationship.query.filter_by(activity_id=activity_id).filter_by(material_id=material_id).all():
        db.session.delete(relationship)
        db.session.commit()


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