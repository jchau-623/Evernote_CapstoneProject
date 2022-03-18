import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotebook } from "../../store/notebooks";

export default function EditNotebookForm({ notebook, closeForm }) {
    const dispatch = useDispatch();
    const [name, setName] = useState(notebook.name)
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
        <div>
            Rename Notebook
            <form className="add-form">
                <label>
                    <input
                        className='title-input'
                        type='text'
                        value={name}
                        placeholder='Notebook name'
                        onChange={(e) => setName(e.target.value)}
                    // required
                    />
                </label>
                <button id='edit-notebook-submit' onClick={handleEdit}>Continue</button>
                <button className='cancel-button' onClick={closeForm}>Cancel</button>
            </form>
        </div>
    )
}
