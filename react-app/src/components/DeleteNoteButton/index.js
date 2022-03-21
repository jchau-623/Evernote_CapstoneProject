import React from "react";
import { useDispatch } from "react-redux";
import { deleteANote } from "../../store/notes";
import './DeleteNote.css'

export default function DeleteNoteButton(noteId) {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        const payload = {
            note_id: noteId
        }
        const deletedNote = await dispatch(deleteANote(payload))
    }

    return (
        <div >
            <button className="delete-button" onClick={handleSubmit}>Delete</button>
        </div>
    )

}
