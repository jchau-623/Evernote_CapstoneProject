from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Note

class NoteForm(FlaskForm):
    heading = StringField('heading', validators=[DataRequired('Please include a heading!')])
    description = StringField('description', validators=[DataRequired('Please include a description!')])
    # notebook_id = StringField('Notebook_id', validators=DataRequired('Please include a notebook name'))
