import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from '../../store/notes';
import { getNotebooks } from '../../store/notebooks';
import './SingleNotebook.css'


export default function SingleNotebookPage({notebookId}) {
    const dispatch = useDispatch()
    // console.log(notebookId, 'this is notebookId')

    const notes = useSelector(state => state.notes.list)
    const notebooks = useSelector(state => state.notebooks.list)
    // const sessionUser = useSelector(state => state?.session?.user)
    console.log(notebooks, 'this is notebook')


    const filteredNotes = notes.filter(note => note.notebook_id == notebookId)
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
                <div className='notebook-heading'>{notebooks.name}</div>
                <div className='each-note'>{filteredNotes.map((note, index) =>
                    <div key={index}>{note.heading}</div>
                    )}</div>
            </div>

        </>
    )
}
