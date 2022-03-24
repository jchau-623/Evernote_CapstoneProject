import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import EditNotebookForm from './EditNotebookForm';
import './EditNotebook.css'


export default function EditNotebookButton({ notebook, setShowEditNotebookModal }) {
    // const dispatch = useDispatch();
    // const [showEditNotebookModal, setShowEditNotebookModal] = useState(false)

    // const closeEditNotebookModal = (e) => {
    //     setShowEditNotebookModal(false)
    // }

    const openEditNotebookModal = () => {
        // console.log('openEditNotebookModal', showEditNotebookModal)
        // if (showEditNotebookModal) return;
        setShowEditNotebookModal(true)
    }

    // useEffect(() => {
    //     if (!showEditNotebookModal) return
    //     console.log(showEditNotebookModal, '-------------')
    //     // const closeEditNotebookModal = (e) => {
    //     //     setShowEditNotebookModal(false)
    //     // }
    // }, [showEditNotebookModal])


    return (
        <div>
            <button onClick={openEditNotebookModal}>Rename Notebook</button>
            {/* {showEditNotebookModal && (
                <Modal onClose={() => setShowEditNotebookModal(false)} >
                    <EditNotebookForm closeForm={closeEditNotebookModal} notebook={notebook} />
                </Modal>
            )} */}
        </div>
    )
}
