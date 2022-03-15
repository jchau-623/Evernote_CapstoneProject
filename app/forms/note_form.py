from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValiationError
from app.models import Note

class NoteForm(FlaskForm):
    heading = StringField('heading', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
