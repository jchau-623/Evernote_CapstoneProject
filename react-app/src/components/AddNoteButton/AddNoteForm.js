import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from "react";
import { addANote } from '../../store/notes';

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
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type='text'
                        placeholder='Title'
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                    />
                </label>
                <textarea
                    rows='5'
                    cols='90'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Start writing'
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}
