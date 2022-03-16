import React, { useEffect, useState } from 'react'
import AddNoteForm from './AddNoteForm';
import './AddNoteButton.css'


export default function AddNoteButton() {

    const [showAddNoteForm, setShowAddNoteForm] = useState(false)

    const openAddNoteForm = () => {
        if (showAddNoteForm) return;
        setShowAddNoteForm(true)
    }

    useEffect(() => {
        if (!showAddNoteForm) return;

        const closeAddNoteForm = (e) => {
            setShowAddNoteForm(false)
        }
    }, [showAddNoteForm])

    return (
        <div>
             <button onClick = {openAddNoteForm}>Add Note</button>
             {showAddNoteForm && <AddNoteForm />}
        </div>
    )
}
