from .db import db
from datetime import datetime


class Note(db.Model):
    __tablename__ = 'notes'

    id  = db.Column(db.Integer, primary_key=True)
    heading = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(2200), nullable=False)
    notebook_id = db.Column(db.Integer, db.ForeignKey('notebooks.id'), default=1)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='notes')
    notebook = db.relationship('Notebook', back_populates='notes')

    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'notebook_id': self.notebook_id,
            'heading': self.heading,
            'description': self.description,
            'created_at': self.created_at
        }
