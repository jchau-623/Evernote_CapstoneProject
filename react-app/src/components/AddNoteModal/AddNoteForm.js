import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from "react";
import { addANote } from '../../store/notes';
import './AddNoteButton.css'

export default function AddNoteForm() {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')

    const sessionUser = useSelector(state => state?.session?.user)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: sessionUser.id,
            heading,
            description
        }

        const newNote = await dispatch(addANote(payload))
    }

    return (
        <div>
            <form className='add-form' onSubmit={handleSubmit}>
                <label>
                    <input
                        className='title-input'
                        type='text'
                        placeholder='Title'
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                    />
                </label>
                <textarea
                    className='textarea-input'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Start writing'
                    required
                />
                <button className='buttons' id='add-note-submit' type='submit'>Submit</button>
            </form>
        </div>
    )

}
