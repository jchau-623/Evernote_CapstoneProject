import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../store/notes";

export default function EditNoteForm( {note, closeForm} ) {
    const dispatch = useDispatch();
    const [heading, setHeading] = useState(note.heading)
    const [description, setDescription] = useState(note.description)

    const sessionUser = useSelector(state => state?.session?.user)
    // console.log(note, 'this is note')

    const handleEdit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id: sessionUser.id,
            note_id: note.id,
            heading,
            description,
            // notebook_id: notebookId
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
            {/* <button className="buttons" id='cancel-button' onClick={closeForm}>Cancel</button> */}
            </form>
        </div>
    )
}
