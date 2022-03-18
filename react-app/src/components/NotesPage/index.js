import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../store/notes'
import './NotesPage.css'
import DeleteNoteButton from '../DeleteNoteButton'
import { timePassed } from './utils'
import AddNoteButton from '../AddNoteModal'
import EditNoteButton from '../EditNoteModal'
import { Modal } from '../../context/Modal'
import EditNoteForm from '../EditNoteModal/EditNoteForm'

export default function NotesPage({ note }) {



    const [showEditNoteModal, setShowEditNoteModal] = useState(false)

    const openEditNoteModal = () => {
        if (showEditNoteModal) return;
        setShowEditNoteModal(true)
    }

    useEffect(() => {
        if (!showEditNoteModal) return

        const closeEditNoteModal = (e) => {
            setShowEditNoteModal(false)
        }
    }, [showEditNoteModal])

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.list)

    useEffect(() => {
        dispatch(getNotes())

    }, [dispatch])

    return (
        <div className='full-notes-page'>
            <div className='notes-container' >
                <div>
                    <div className='large-square'>
                        <div id='notes-heading'>
                            <div id='notes-and-icon'>Notes</div>
                            <div className='notes-number'>
                                {notes.length} notes
                            </div>
                        </div>
                        <div id='flip-around'>
                            {notes.map((note, index) =>
                                <div key={index} className='note-container' onClick={openEditNoteModal} >
                                    {showEditNoteModal && (
                                        <Modal onClose={() => setShowEditNoteModal(false)} >
                                            <EditNoteForm note={note} />
                                        </Modal>
                                    )}
                                    <div className='note-container-heading'>{note.heading}
                                    </div>
                                    <div className='note-container-description'>{note.description}
                                    </div>
                                    <div className='note-container-time'>
                                        {timePassed(Date.parse(new Date().toLocaleString()) - Date.parse(note?.created_at))} ago
                                    </div>
                                    <DeleteNoteButton noteId={note.id} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div id='edit-note-heading'>
                <div id='add-note-btn'>
                    <AddNoteButton />
                </div>
                <div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
