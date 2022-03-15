from .db import db
from datetime import datetime

class Notebook(db.Model):
    __tablename__ = 'notebooks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255) , nullable=False)
    user_id = db.Column(db.Integer, db. ForeignKey('users.id'), nullable=False)

    user = db.relationship('User', back_populates='notebooks')

    def to_dict(self):
        
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
        }
