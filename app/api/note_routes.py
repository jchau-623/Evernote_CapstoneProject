from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Note
from app.forms.note_form import NoteForm


note_routes = Blueprint('note', __name__)
#  Turn WTForms validation errors into list
def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@note_routes.route('/', methods= ['PATCH'])
def edit_note():
    data = request.json

    note_id = data['note_id']
    heading = data['heading']
    description = data['description']

    new_note = Note.query.get(note_id)
    new_note.heading = heading
    new_note.description = description

    db.session.commit()
    return {'note': new_note.to_dict()}


@note_routes.route('/')
def get_notes():
    user_id = current_user.get_id()
    notes = Note.query.filter(Note.user_id == user_id).all()
    return {'notes': [note.to_dict() for note in notes]}

@note_routes.route('/', methods= ['DELETE'])
def delete_note():
    data = request.json
    # print(data,'this is data')
    note_id = data['note_id']['noteId']
    # print(note_id, 'this is note_id')
    note = Note.query.get(note_id)

    print(data, 'this is data')
    db.session.delete(note)
    db.session.commit()

    return {'deleted_noteId': note_id}

@note_routes.route('/', methods= ['POST'])
def add_note():
    data = request.json
    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(data, '---------')
    print(len(data.keys()), 'this is data length')
    if form.validate_on_submit():
        if (len(data.keys()) > 3):
            note = Note(
                user_id = data['user_id'],
                heading = data['heading'],
                description = data['description'],
                notebook_id = data['notebook_id']
            )
        else:
            note = Note(
                user_id = data['user_id'],
                heading = data['heading'],
                description = data['description'],
            )



    # print(note, '-------------')
    db.session.add(note)
    db.session.commit()

    return {'note': note.to_dict()}
