from flask import Flask, request, abort, flash, current_app, session, Response, render_template, url_for, redirect, jsonify
from flask_login import login_required, current_user
from flask_restful import Resource, reqparse

from app import db
import app.models

from app.api import bp, models
from app.api.models import ApiKey
from app.api.forms import ApiCreationForm

import json, secrets, random
from datetime import datetime

# API management GUI Routes
@bp.route("/api/manage")
@login_required
def manage_api_keys():
	if current_user.is_superintendant:
		api_keys = ApiKey.query.all()
		return render_template('api/manage_api_keys.html', api_keys=api_keys)
	abort(403)

@bp.route("/api/create", methods=['GET', 'POST'])
@login_required
def create_api_key():
	if current_user.is_superintendant:
		key = secrets.token_urlsafe(40)
		form = ApiCreationForm(key=key)
		if form.validate_on_submit():
			key = form.key.data
			description = form.description.data
			app.api.models.create_new_api_key(key, description)
			flash('API key successfully created', 'success')
			return redirect(url_for('api.manage_api_keys'))
		return render_template('api/create_api_key.html', form=form)
	abort(403)

@bp.route("/api/delete/<int:id>")
@login_required
def delete_api_key(id):
	if current_user.is_superintendant:
		if app.api.models.delete_api_key(id):
			flash('API key successfully created', 'success')
		else:
			flash('A problem occured while deleting your API key', 'error')
		return redirect(url_for('api.manage_api_keys'))
	abort(403)

# Return logged in users
@bp.route("/api/users/stats")
@login_required
def get_user_stats():
	if app.models.is_admin(current_user.username):
		return jsonify({
			'active_users': app.user.models.get_active_user_count(),
			'user_count': app.user.models.get_total_user_count()
		})
	abort(403)