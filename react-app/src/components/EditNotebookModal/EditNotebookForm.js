import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotebook } from "../../store/notebooks";
import './EditNotebook.css'

export default function EditNotebookForm({ notebook, closeForm }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(notebook.name)
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)

    const sessionUser = useSelector(state => state?.session?.user)

    useEffect(() => {
        setShowErrors(false)
        const errors = []
        if (!name) errors.push('Please name your notebook!')
        if (name.length > 20) errors.push('The name of your notebook is too long!')
        if (errors) setErrors(errors)
    }, [name])


    const handleEdit = async (e) => {
        e.preventDefault();

        if (errors.length < 1) {
            const payload = {
                user_id: sessionUser.id,
                notebook_id: notebook.id,
                name,
            }
            const newNotebook = await dispatch(updateNotebook(payload))
            if (newNotebook) {
                closeForm()
            }
        } else {
            setShowErrors(true)
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
                <ul className="err-handling">
                    {showErrors &&
                        errors.map((error) => {
                            return <li key={error}>{error}</li>;
                        })}
                </ul>
                <div className="edit-and-delete-button">
                    <button className="buttons" id='edit-notebook-submit' onClick={handleEdit}>Continue</button>
                    <button className="buttons" id='cancel-button' onClick={closeForm}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
