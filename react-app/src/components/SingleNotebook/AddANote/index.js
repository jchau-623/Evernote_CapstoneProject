import { useDispatch, useSelector } from "react-redux"
import { React, useState } from "react";
import {addANoteInNotebook } from "../../../store/notes";
import './AddANote.css'

export default function AddANoteButton({notebookId}) {

    const dispatch = useDispatch()
    const [heading,setHeading] = useState('')
    const [description, setDescription] = useState('')

    const sessionUser = useSelector(state => state?.session?.user)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: sessionUser.id,
            heading,
            description,
            notebook_id: notebookId
        }

        const newNote = await dispatch(addANoteInNotebook(payload))

    }


    return (
        <div className="small-form-container">
            <form>
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
                <button className='buttons' id='small-add-note-submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
