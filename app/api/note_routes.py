from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Note, Notebook
from app.forms.note_form import NoteForm


note_routes = Blueprint('note', __name__)

@note_routes.route('/')
def get_notes():
    user_id = current_user.get_id()
    notes = Note.query.filter(Note.user_id == user_id).all()
    return {'notes': [note.to_dict() for note in notes]}
