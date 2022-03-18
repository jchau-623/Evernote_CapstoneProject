import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotebooks } from '../../store/notebooks';
import AddNotebookButton from '../AddNotebookModal';
import DeleteNotebookButton from '../DeleteNotebookButton';
import EditNotebookButton from '../EditNotebookModal';
import './NotebooksPage.css'
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SingleNotebookPage from '../SingleNotebook';

export default function NotebooksPage() {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state?.notebooks?.list)
    const sessionUser = useSelector(state => state?.session?.user)

    const [showOpenNotebookModal, setShowOpenNotebookModal] = useState(null)
    // const openOpenNotebookModal = () => setShowOpenNotebookModal(true)
    const closeOpenNotebookModal = () => setShowOpenNotebookModal(false)


    useEffect(() => {
        dispatch(getNotebooks())

    }, [dispatch])

    return (
        <div id='notebooks-bigger-container'>
            <div className='notebooks-page-container'>
                <div className='notebooks-header'>
                    <div id='notebooks-title'>
                        Notebooks
                        <div id='new-notebook-button'>
                            <AddNotebookButton />
                        </div>
                    </div>
                    <div id='number-notebooks'>
                        {notebooks.length} notebooks
                        <div>
                            Created by
                        </div>
                        <div>
                            Actions
                        </div>

                    </div>
                    <div className='notebooks'>
                        {notebooks?.map((notebook, index) =>
                            <div key={index} className='one-notebook'>
                                {/* <NavLink to={`${notebook.name}`} notebookId={notebook.id}> */}
                                    <div onClick={() => setShowOpenNotebookModal(index)} id='notebook-name'>{notebook.name}</div>
                                {/* </NavLink> */}
                                {showOpenNotebookModal === index && (
                                    <Modal onClose={closeOpenNotebookModal}>
                                        <SingleNotebookPage
                                        closeModal={closeOpenNotebookModal}
                                        notebookId = {notebook.id}
                                        />
                                    </Modal>
                                )}
                                <div>{sessionUser.username}</div>
                                <div>
                                    <EditNotebookButton notebook={notebook} />
                                    <DeleteNotebookButton notebookId={notebook.id} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
