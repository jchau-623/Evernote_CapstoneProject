from app.models import db, Notebook
def seed_notebooks():

    notebooks = [
    Notebook(
        name='First Notebook',
        user_id=1
    ),
    Notebook(
        name='Coding',
        user_id=1
    ),
    Notebook(
        name='Fitness',
        user_id=1
    ),
    ]

    for notebook in notebooks:
        db.session.add(notebook)
    db.session.commit()

def undo_notebooks():
    db.session.execute('TRUNCATE notebooks RESTART IDENTITY CASCADE;')
    db.session.commit()
