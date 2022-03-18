import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import EditNotebookForm from './EditNotebookForm';


export default function EditNotebookButton({ notebook }) {
    const dispatch = useDispatch();
    const [showEditNotebookModal, setShowEditNotebookModal] = useState(false)

    const closeEditNotebookModal = (e) => {
        setShowEditNotebookModal(false)
    }

    const openEditNotebookModal = () => {
        if (showEditNotebookModal) return;
        setShowEditNotebookModal(true)
    }

    useEffect(() => {
        if (!showEditNotebookModal) return

        // const closeEditNotebookModal = (e) => {
        //     setShowEditNotebookModal(false)
        // }
    }, [showEditNotebookModal])


    return (
        <div>
            <button id='edit-note-button' onClick={openEditNotebookModal}>Rename Notebook</button>
            {showEditNotebookModal && (
                <Modal onClose={() => setShowEditNotebookModal(false)} >
                    <EditNotebookForm closeForm={closeEditNotebookModal} notebook={notebook} />
                </Modal>
            )}
        </div>
    )
}
