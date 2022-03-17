from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Notebook
from app.forms.notebook_form import NotebookForm


notebook_routes = Blueprint('notebook', __name__)

@notebook_routes.route('/')
def get_notebooks():
    user_id = current_user.get_id()
    notebooks = Notebook.query.filter(Notebook.user_id == user_id).all()
    return {'notebooks': [notebook.to_dict() for notebook in notebooks]}

@notebook_routes.route('/', methods= ['POST'])
def add_notebook():
    data = request.json
    form = NotebookForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        notebook = Notebook(
            user_id = data['user_id'],
            name = data['name'],
        )
    db.session.add(notebook)
    db.session.commit()

    return {'notebook': notebook.to_dict()}
