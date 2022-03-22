import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import EditNoteForm from './EditNoteForm';
import { Modal } from '../../context/Modal';

export default function EditNoteButton({note}) {
    const dispatch = useDispatch();
    const [showEditNoteModal, setShowEditNoteModal] = useState(false)
    // console.log(note,'this is note')


    const closeEditNoteModal = (e) => {
        setShowEditNoteModal(false)
    }

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

    return (
        <div>
        <button id='edit-note-button' onClick={openEditNoteModal}>Edit Note</button>
        {showEditNoteModal && (
            <Modal onClose={() => setShowEditNoteModal(false)} >
                <EditNoteForm closeForm={closeEditNoteModal} note={note} />
            </Modal>
        )}
    </div>
    )
}
