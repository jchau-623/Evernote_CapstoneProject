import { useDispatch, useSelector } from "react-redux"
import { React, useState, useEffect } from "react";
import { addANoteInNotebook } from "../../../store/notes";
import './AddANote.css'

export default function AddANoteButton({ notebookId }) {

    const dispatch = useDispatch()
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)

    const sessionUser = useSelector(state => state?.session?.user)


    useEffect(() => {
        setShowErrors(false)
        const errors = [];
        if (!heading) errors.push("Every note needs a heading!");
        if (!description) errors.push("Please provide a description");
        if (heading.length > 20) errors.push("Your heading is too long!");
        if (description.length > 2200) errors.push("Your body is too long!");
        if (errors) setErrors(errors);
    }, [heading, description]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const inputs = document.querySelectorAll('.small-title-input, .small-textarea-input')
        if (errors.length < 1) {
            const note = {
                user_id: sessionUser.id,
                heading,
                description,
                notebook_id: notebookId
            };
            const newNote = await dispatch(addANoteInNotebook(note));
            // inputs.forEach(input => {
            //     input.value = '';
            //   });
        } else {
            setShowErrors(true)
        }
    };

    return (
        <div className="small-form-container">
            <form id='test-form'>
                <label>
                    <input
                        className='small-title-input'
                        type='text'
                        placeholder='Title'
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                    />
                </label>
                <textarea
                    className='small-textarea-input'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Start writing'
                    required
                />
                <ul className="err-handling">
                    {showErrors &&
                        errors.map((error) => {
                            return <li key={error}>{error}</li>;
                        })}
                </ul>
                <button className='buttons' id='small-add-note-submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
