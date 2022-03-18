import { useDispatch, useSelector } from 'react-redux';
import { React, useState } from "react";
import { addANotebook } from '../../store/notebooks';


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
    }

    return (
        <div>
            <form>
            <label>
                    <input
                        className='name-input'
                        type='text'
                        placeholder='Notebook name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <button onClick={[handleSubmit, closeAddForm]}>Create</button>
            </form>
        </div>
    )
}
