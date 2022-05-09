import React from 'react'
// import { useSelector } from 'react-redux'
import EditNotebookButton from '../../EditNotebookModal';
import DeleteNotebookButton from '../../DeleteNotebookButton';
// import { deleteANotebook } from '../../../store/notebooks';
// import { deleteANote } from '../../../store/notes';
import './EllipsisDropdown.css'

export default function EllipsisDropdown({notebook, setShowEditNotebookModal, setNotebookToEdit}) {

    // const dispatch = useDispatch();

    // const notes = useSelector(state => state.notes.list)
    // const filteredNotes = notes.filter(note => note.notebook_id === notebookId)


    return (
        <ul className='ellipsis-dropdown'>
            <li>
                <DeleteNotebookButton notebookId={notebook.id} />
            </li>
            <li >
                <EditNotebookButton setNotebookToEdit={setNotebookToEdit}  notebook={notebook} setShowEditNotebookModal={setShowEditNotebookModal}/>
            </li>
        </ul>
    )
}
