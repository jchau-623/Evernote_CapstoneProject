from flask import Blueprint, request
from flask_login import current_user
from app.models import db, Notebook
from app.forms.notebook_form import NotebookForm


notebook_routes = Blueprint('notebook', __name__)

@notebook_routes.route('/', methods=['DELETE'])
def delete_notebook():
    data = request.json
    # print(data, 'this is data')
    notebook_id = data['notebook_id']
    notebook = Notebook.query.filter(Notebook.id == notebook_id).first()

    db.session.delete(notebook)
    db.session.commit()

    return {'deleted_notebookId': notebook_id}

@notebook_routes.route('/', methods =['PATCH'])
def edit_notebook():
    data = request.json
    notebook_id = data['notebook_id']
    name = data['name']

    new_notebook = Notebook.query.get(notebook_id)
    new_notebook.name = name

    db.session.commit()
    return {'notebook': new_notebook.to_dict()}


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

# @notebook_routes.route("/", methods=['POST'])
# def add_notebook(): # pass in the payload
#     form = NotebookForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         name = form.data["name"]
#         user_id = form.data["user_id"]
#         notebook = Notebook(name=name, userId=user_id)


#         db.session.add(notebook)
#         db.session.commit()
#         return {"notebook": notebook.to_dict()}
