import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../store/notes";


export default function EditNoteForm( {note} ) {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState(note.heading)
    const [description, setDescription] = useState(note.description)

    const sessionUser = useSelector(state => state?.session?.user)

    const handleEdit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id: sessionUser.id,
            note_id: note.id,
            heading,
            description
        }

        const newNote = await dispatch(updateNote(payload))

    }

    return (
        <div>
            <form className="add-form">
            <label>
                <input
                    className='title-input'
                    type='text'
                    value={heading}
                    placeholder='Title'
                    onChange = {(e)=> setHeading(e.target.value)}
                    required
                />
            </label>
            <textarea
                className='textarea-input'
                value={description}
                placeholder='Start writing'
                onChange = {(e)=> setDescription(e.target.value)}
                required
            />
            <button className='buttons'  id='edit-note-submit' onClick={handleEdit}>Submit</button>
            </form>
        </div>
    )
}
