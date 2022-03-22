import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteANotebook } from "../../store/notebooks";
import { deleteANote } from "../../store/notes";

export default function DeleteNotebookButton({ notebookId }) {
    const dispatch = useDispatch();

    const notes = useSelector(state => state.notes.list)
    const filteredNotes = notes.filter(note => note.notebook_id === notebookId)

    const handleDelete = async (e) => {
        e.preventDefault()
        const id = notebookId
        const payload = {
            notebook_id: id
        }
        const deletedNotebook = await dispatch(deleteANotebook(payload))

        if (deletedNotebook) {
            for (let i = 0; i < filteredNotes.length; i++) {
                const deletedNote = await dispatch(deleteANote(filteredNotes[i].id))
            }
        }
    }

    return (
        <div>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    )
}
