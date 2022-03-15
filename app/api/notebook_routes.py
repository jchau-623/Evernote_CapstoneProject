from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Note, Notebook
from app.forms.notebook_form import NotebookForm


notebook_routes = Blueprint('notebook', __name__)
