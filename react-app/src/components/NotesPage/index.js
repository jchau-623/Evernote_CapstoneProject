import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../store/notes'
import './NotesPage.css'
import DeleteNoteButton from '../DeleteNoteButton'
// import { timePassed } from './utils'
import AddNoteButton from '../AddNoteModal'
// import EditNoteButton from '../EditNoteModal'
import { Modal } from '../../context/Modal'
import EditNoteForm from '../EditNoteModal/EditNoteForm'
// import NotebooksPage from '../NotebooksPage'
import { getNotebooks } from '../../store/notebooks'
import moment from 'moment'

export default function NotesPage({ note }) {



    const [showEditNoteModal, setShowEditNoteModal] = useState(null)

    useEffect(() => {

    }, [showEditNoteModal])

    const closeModal = (e) => {
        e.stopPropagation()
        setShowEditNoteModal(false)
    }

    const openEditNoteModal = (index) => {
        if (showEditNoteModal) return;
        setShowEditNoteModal(index)
    }

    useEffect(() => {
        if (!showEditNoteModal) return

        // eslint-disable-next-line
        const closeEditNoteModal = (e) => {
            setShowEditNoteModal(null)
        }
    }, [showEditNoteModal])

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.list)
    notes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    useEffect(() => {
        dispatch(getNotes())
        dispatch(getNotebooks())
    }, [dispatch])

    return (
        <div className='full-notes-page'>
            <div className='notes-container' >
                <div>
                    <div className='large-square'>
                        <div id='notes-heading'>
                            <div id='notes-and-icon'><i className="fa-solid fa-note"></i>Notes
                            </div>
                            <div className='notes-number'>
                                {notes.length} notes
                            </div>
                        </div>

                        <div id='flip-around'>
                            {notes.map((note, index) =>
                                <div key={index} className='note-container' onClick={() => openEditNoteModal(index)} >
                                    {showEditNoteModal === index && (
                                        <Modal onClose={closeModal} >
                                            <EditNoteForm note={note} />

                                        </Modal>
                                    )}
                                    <div className='notes-page-notebook-name'><i className="fa-solid fa-notebook"></i>{note.notebook.name}
                                    </div>
                                    <div className='note-container-heading'>{note.heading}
                                    </div>
                                    <div className='note-container-description'>{note.description}
                                    </div>

                                    {/* <div className='note-container-time'>
                                        {timePassed(Date.parse(new Date().toLocaleString()) - Date.parse(note?.created_at))} ago
                                    </div> */}
                                    <div className="note-container-time">
                                        {moment(note?.created_at).fromNow()}
                                    </div>
                                    <div>
                                    </div>
                                    <DeleteNoteButton noteId={note.id} />
                                    {/* <EditNoteForm note={note} />
                                    {showEditNoteModal && (
                                        <Modal onClose={() => setShowEditNoteModal(false)} >
                                            <EditNoteForm note={note} />
                                        </Modal>
                                    )} */}
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
