import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotebook } from "../../store/notebooks";
import './EditNotebook.css'

export default function EditNotebookForm({ notebook, closeForm }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(notebook.name)
    const [errors, setErrors] = useState([]);
    // console.log(name, 'this is name')

    const sessionUser = useSelector(state => state?.session?.user)


    const handleEdit = async (e) => {
        e.preventDefault();
        const payload = {
            user_id: sessionUser.id,
            notebook_id: notebook.id,
            name,
        }
        const newNotebook = await dispatch(updateNotebook(payload))
        if (newNotebook) {
            closeForm()
        }
    }

    return (
        <div id='add-notebook-container'>
            <div id='add-notebook-heading'>
                Rename Notebook
            </div>
            <div id='add-name-new-notebook'>Name</div>
            <form id='add-new-notebook-form' className="add-form">
                <label id='input-label'>
                    <input
                        className='notebook-title-input'
                        type='text'
                        value={name}
                        placeholder='Notebook name'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <div className="edit-and-delete-button">
                <button className="buttons" id='edit-notebook-submit' onClick={handleEdit}>Continue</button>
                <button className="buttons" id='cancel-button' onClick={closeForm}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
