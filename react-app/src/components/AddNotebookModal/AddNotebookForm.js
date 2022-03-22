import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from "react";
import { addANotebook } from '../../store/notebooks';
import './AddNotebook.css'


export default function AddNotebookForm({ closeAddForm }) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const sessionUser = useSelector(state => state?.session?.user)


    useEffect(() => {
        setShowErrors(false)
        const errors = []
        if (!name) errors.push('Please name your notebook!')
        if (name.length > 20) errors.push('The name of your notebook is too long!')
        if (errors) setErrors(errors)
    }, [name])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.length < 1) {
        const notebook = {
            user_id: sessionUser.id,
            name,
        };
        const newNotebook = await dispatch(addANotebook(notebook));
    } else {
        setShowErrors(true)
    }
  };

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
                    />
                </label>
                <ul className="err-handling">
                    {showErrors &&
                        errors.map((error) => {
                            return <li key={error}>{error}</li>;
                        })}
                </ul>
            </form>
            <button className='buttons' id='create-notebook-btn' onClick={handleSubmit}>Create</button>
        </div>
    )
}
