import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export default function EditNoteButton(note) {
    const dispatch = useDispatch();
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

    return (
        <div>
        <button className='buttons' id='edit-note-button' onClick={openEditNoteModal}>Edit Note</button>
        {showEditNoteModal && (
            <Modal onClose={() => setShowEditNoteModal(false)}>
                <AddNoteForm />
            </Modal>
        )}
    </div>
    )
}
