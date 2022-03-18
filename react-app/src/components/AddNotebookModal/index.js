import React, { useEffect, useState } from 'react'
import { Modal } from '../../context/Modal';
import AddNotebookForm from './AddNotebookForm';

export default function AddNotebookButton() {
    const [showAddNotebookModal, setShowAddNotebookModal] = useState(false)

    const openAddNotebookModal = () => {
        if (showAddNotebookModal) return
        setShowAddNotebookModal(true)
    }

    const closeAddNotebookModal = (e) => {
        setShowAddNotebookModal(false)
    }

    useEffect(() => {
        if (!showAddNotebookModal) return

        const closeAddNotebookModal = (e) => {
            setShowAddNotebookModal(false)
        }
    }, [showAddNotebookModal])

    return (
        <div>
            <button id='new-notebook' onClick={openAddNotebookModal}>New Notebook</button>
            {showAddNotebookModal && (
                    <Modal onClose={() => setShowAddNotebookModal(false)}>
                    <AddNotebookForm closeAddForm={closeAddNotebookModal}/>
                </Modal>
            )}
        </div>
    )
}
