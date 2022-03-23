import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from '../../store/notes';
import { getNotebooks } from '../../store/notebooks';
import './SingleNotebook.css'
import AddANoteButton from './AddANote';
import DeleteNoteButton from '../DeleteNoteButton';
import EditNoteButton from './EditNoteButton'


export default function SingleNotebookPage({ notebookId, notebookName }) {
    const dispatch = useDispatch()
    // console.log(notebookId, 'this is notebookId')

    const notes = useSelector(state => state.notes.list)
    const notebooks = useSelector(state => state.notebooks.list)
    // const sessionUser = useSelector(state => state?.session?.user)
    // console.log(notebooks, 'this is notebook')


    const filteredNotes = notes.filter(note => note.notebook_id === notebookId)
    // console.log(notes, 'this is notes')
    // console.log(filteredNotes, 'this is filteredNotes')
    // console.log(notebooks, 'this is notebooks')
    // console.log(filteredNotes, '-----------')

    useEffect(() => {
        dispatch(getNotes())
        dispatch(getNotebooks())
    }, [dispatch])

    return (
        <>
            <div className='modal-container'>
                <div className='notebook-heading'>{notebookName}</div>
                <div className='all-notes'>{filteredNotes.map((note, index) =>
                    <div>
                        <div id='each-note' key={index}>{note.heading}
                            <div id='delete-button-in-notebook'>
                                <DeleteNoteButton noteId={note.id} />
                                {/* <EditNoteButton note={note} /> */}
                            </div>
                        </div>
                        <div id='each-note-description'>{note.description}
                        </div>
                    </div>


                )}
                    <AddANoteButton notebookId={notebookId} />
                </div>
            </div>

        </>
    )
}
