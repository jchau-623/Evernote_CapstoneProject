import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from "react";
import { addANotetoFirstNotebook } from '../../store/notes';
import './AddNoteButton.css'

export default function AddNoteForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)

    const sessionUser = useSelector(state => state?.session?.user)
    const firstNotebook = useSelector(state => state.notebooks.list[0])
    console.log(firstNotebook, 'this is first notebook')


    useEffect(() => {
        setShowErrors(false)
        const errors = []
        if (!heading) errors.push("Every note needs a heading!")
        if (!description) errors.push("Please provide a description")
        if (heading.length > 20) errors.push("Your heading is too long!")
        if (description.length > 2200) errors.push('Your body is too long!')
        if (errors) setErrors(errors)
    }, [heading, description])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors.length < 1) {
            const note = {
                user_id: sessionUser.id,
                firstnotebookId: firstNotebook.id,
                heading,
                description,

            };
            const newNote = await dispatch(addANotetoFirstNotebook(note));
            // closeAddNoteModal()

        } else {
            setShowErrors(true)
        }
      };


    return (
        <div>
            <form className='add-form'>
                <label>
                    <input
                        className='title-input'
                        type='text'
                        placeholder='Title'
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                    // required
                    />
                </label>
                <textarea
                    className='textarea-input'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Start writing'
                // required
                />
                <ul className='err-handling'>
                    {showErrors &&
                        errors.map((error) => {
                            return <li key={error}>{error}</li>
                        })}
                </ul>
                <button className='buttons' id='add-note-submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )

}
