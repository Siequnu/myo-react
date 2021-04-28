from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, PasswordField, BooleanField, SubmitField, SelectField, DateField, RadioField, FormField, TextAreaField, SelectMultipleField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo, Optional, Length
from flask_wtf.file import FileField, FileRequired
from app.models import User


class CourseForm(FlaskForm):
	title = StringField('Course title', validators=[DataRequired()])
	description = StringField('Description', validators=[DataRequired()])
	submit = SubmitField('Create')


class ActivityForm(FlaskForm):
	name = StringField('Activity title', validators=[DataRequired()])
	description = StringField('Description', validators=[DataRequired()])
	activity_duration = IntegerField('Duration', validators=[DataRequired()])
	submit = SubmitField('Create')

class MaterialForm(FlaskForm):
	material = StringField('Material', validators=[DataRequired()])
	description = StringField('Description', validators=[DataRequired()])
	submit = SubmitField('Create material')