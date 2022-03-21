import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from "react";
import { addANotebook } from '../../store/notebooks';
import './AddNotebook.css'


export default function AddNotebookForm({closeAddForm}) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const sessionUser = useSelector(state => state?.session?.user)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: sessionUser.id,
            name,
        }

        const newNotebook = await dispatch(addANotebook(payload))
        closeAddForm()
    }

    return (
        <div id='new-notebook-container'>
            <div id='new-notebook-heading'>Create new notebook</div>
            <div id='new-notebook-subheading'>Notebooks are useful for grouping notes around a common topic.</div>
            <div id='name-new-notebook'>Name</div>
            <form id='new-notebook-form'>
            <label id='input-label'>
                    <input
                        className='name-input'
                        type='text'
                        placeholder='Notebook name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </form>
                <button className='buttons' id='create-notebook-btn' onClick={handleSubmit}>Create</button>
        </div>
    )
}
