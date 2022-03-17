import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../store/notes'
import './NotesPage.css'
import DeleteNoteButton from '../DeleteNoteButton'
import { timePassed } from './utils'
import AddNoteButton from '../AddNoteModal'

export default function NotesPage() {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.list)

    useEffect(() => {
        dispatch(getNotes())

    }, [dispatch])

    return (
        <div className='full-notes-page'>
            <div className='notes-container'>
                <div>
                    <div className='large-square'>
                        <div id='notes-heading'>
                            <div id='notes-and-icon'>Notes</div>
                            <div className='notes-number'>
                                {notes.length} notes
                            </div>
                        </div>
                        {notes.map((note) =>
                            <div className='note-container'>
                                <div className='note-container-heading'>{note.heading}
                                </div>
                                <div className='note-container-description'>{note.description}
                                </div>
                                <div className='note-container-time'>
                                    {timePassed(Date.parse(new Date().toLocaleString()) - Date.parse(note?.created_at))} ago
                                </div>
                                <DeleteNoteButton noteId={note.id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div id='edit-note-heading'>
                <div id='add-note-btn'>
                    (Notebook Name)
                    <AddNoteButton />
                </div>
                <div>
                    (word stuff)
                </div>
            </div>
            <div>
                {/* TODO EDIT NOTE FORM */}
            </div>
        </div>
    )
}
