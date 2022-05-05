import React, { useEffect, useState } from 'react'
import { Modal } from '../../context/Modal';
import AddNoteForm from './AddNoteForm';
import './AddNoteButton.css'


export default function AddNoteButton() {

    const [showAddNoteModal, setShowAddNoteModal] = useState(false)


    const closeAddNoteModal = (e) => {
        setShowAddNoteModal(false)
    }

    const openAddNoteModal = () => {
        if (showAddNoteModal) return;
        setShowAddNoteModal(true)
    }

    useEffect(() => {
        if (!showAddNoteModal) return;
        // eslint-disable-next-line
        const closeAddNoteModal = (e) => {
            setShowAddNoteModal(false)
        }
    }, [showAddNoteModal])

    return (
        <div>
            <button className='buttons' id='add-note-button' onClick={openAddNoteModal}>Add Note</button>
            {showAddNoteModal && (
                <Modal onClose={() => setShowAddNoteModal(false)}>
                    <AddNoteForm closeAddNoteForm={closeAddNoteModal} />
                </Modal>
            )}
        </div>
    )
}
