import React from "react";
import { useDispatch } from "react-redux";
import { deleteANote } from "../../store/notes";
import './DeleteNote.css'

export default function DeleteNoteButton(noteId) {
    const dispatch = useDispatch();


    // console.log('click', '-----click----')

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        const payload = {
            note_id: noteId
        }
        // eslint-disable-next-line
        const deletedNote = await dispatch(deleteANote(payload))
    }

    return (
        <div >
            <button className="delete-button" onClick={handleSubmit}>Delete</button>
        </div>
    )
}
