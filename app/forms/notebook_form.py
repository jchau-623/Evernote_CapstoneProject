from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Notebook

class NotebookForm(FlaskForm):
    name = StringField('name', validators=[DataRequired('Name your notebook')])
    submit = SubmitField('submit')
