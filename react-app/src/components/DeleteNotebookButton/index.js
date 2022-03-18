import React from "react";
import { useDispatch } from "react-redux";
import { deleteANotebook } from "../../store/notebooks";

export default function DeleteNotebookButton({notebookId}) {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        const id = notebookId
        const payload = {
            notebook_id: id
        }
        const deletedNotebook = await dispatch(deleteANotebook(payload))
    }

    return (
        <div>
            <button onClick={handleSubmit}>Delete</button>
        </div>
    )
}
