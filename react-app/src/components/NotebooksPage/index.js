import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotebooks } from '../../store/notebooks';
import AddNotebookButton from '../AddNotebookModal';
// import DeleteNotebookButton from '../DeleteNotebookButton';
// import EditNotebookButton from '../EditNotebookModal';
import './NotebooksPage.css'
import { Modal } from '../../context/Modal';
import SingleNotebookPage from '../SingleNotebook';
import EllipsisDropdown from './EllipsisDropdown';
import EditNotebookForm from '../EditNotebookModal/EditNotebookForm';
import SearchBar from './SearchBar';

export default function NotebooksPage() {

    const dispatch = useDispatch();
    const notebooks = useSelector(state => state?.notebooks?.list)
    const sessionUser = useSelector(state => state?.session?.user)

    const [showOpenNotebookModal, setShowOpenNotebookModal] = useState(null)
    const closeOpenNotebookModal = () => setShowOpenNotebookModal(false)

    const [showDropdown, setShowDropdown] = useState(false);

    const [showEditNotebookModal, setShowEditNotebookModal] = useState(false)

    const [filteredNotebooks, setFilteredNotebooks] = useState([])

    useEffect(() => {
        setFilteredNotebooks(notebooks)
    }, [notebooks])

    const closeEditNotebookModal = (e) => {
        setShowEditNotebookModal(false)
    }

    const openDropdown = () => {
        if (showDropdown) return;
        setShowDropdown(true);
    }

    useEffect(() => {
        if (!showDropdown) return;

        const closeDropdown = (e) => {
            setShowDropdown(false);
        }

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
    }, [showDropdown]);


    useEffect(() => {
        dispatch(getNotebooks())

    }, [dispatch])

    return (
        <div id='notebooks-bigger-container'>
            <div className='notebooks-page-container'>
                <div className='notebooks-header'>
                    <div id='notebooks-title'>
                        Notebooks
                        <SearchBar notebooks={notebooks} setFilteredNotebooks={setFilteredNotebooks} filteredNotebooks={filteredNotebooks} />
                    </div>
                    <div className='add-notebook-number-notebooks'>
                        <div>
                            {notebooks.length} notebooks
                        </div>
                        <div id='new-notebook'>
                            <AddNotebookButton />
                        </div>
                    </div>
                    <div id='number-notebooks'>
                        TITLE
                        <div className='created-by'>
                            CREATED BY
                        </div>
                        <div>
                            ACTIONS
                        </div>

                    </div>
                    <div className='notebooks'>
                        {filteredNotebooks?.map((notebook, index) =>
                            <div key={index} className='one-notebook'>
                                <div onClick={() => setShowOpenNotebookModal(index)} id='notebook-name'><i id='notebooks-icons' class="fa-solid fa-notebook"></i> {notebook.name}</div>
                                {showOpenNotebookModal === index && (
                                    <Modal onClose={closeOpenNotebookModal}>
                                        <SingleNotebookPage
                                            closeModal={closeOpenNotebookModal}
                                            notebookId={notebook.id}
                                            notebookName={notebook.name}
                                        />
                                    </Modal>
                                )}
                                {/* {notebook.name !== 'First Notebook' */}
                                {index > 0 ?
                                    <>
                                        <div id='created-by-username' >{sessionUser.username}</div>
                                        {/* <div id='delete-and-edit-notebook'>
                                            <EditNotebookButton notebook={notebook} />
                                            <DeleteNotebookButton notebookId={notebook.id} />
                                        </div> */}
                                        <div>
                                            <i
                                                id='triple-dot'
                                                className="fa-light fa-ellipsis"
                                                onClick={() => setShowDropdown(index)}
                                            />
                                            {showDropdown === index && <EllipsisDropdown setShowEditNotebookModal={setShowEditNotebookModal} notebook={notebook} notebookId={notebook.id} />}
                                            {showEditNotebookModal && (
                                                <Modal onClose={() => setShowEditNotebookModal(false)} >
                                                    <EditNotebookForm closeForm={closeEditNotebookModal} notebook={notebook} />
                                                </Modal>
                                            )}
                                        </div>
                                    </>
                                    : null
                                }
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}
