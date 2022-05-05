import React, { useEffect, useState } from 'react'
import { Modal } from '../../context/Modal';
import AddNotebookForm from './AddNotebookForm';
import './AddNotebook.css'

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
        // eslint-disable-next-line
        const closeAddNotebookModal = (e) => {
            setShowAddNotebookModal(false)
        }
    }, [showAddNotebookModal])

    return (
        <div>
            <button id='new-notebook' onClick={openAddNotebookModal}><i id='add-btn' className="fa-solid fa-plus"></i> New Notebook</button>
            {showAddNotebookModal && (
                <Modal onClose={() => setShowAddNotebookModal(false)}>
                    <AddNotebookForm closeAddForm={closeAddNotebookModal} />
                </Modal>
            )}
        </div>
    )
}
