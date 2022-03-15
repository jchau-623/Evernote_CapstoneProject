from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Note, Notebook
from app.forms.note_form import NoteForm


note_routes = Blueprint('note', __name__)
