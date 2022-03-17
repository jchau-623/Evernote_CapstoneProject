import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotebooks } from '../../store/notebooks';
import AddNotebookButton from '../AddNotebookModal';
import './NotebooksPage.css'

export default function NotebooksPage() {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state?.notebooks?.list)
    const sessionUser = useSelector(state => state?.session?.user)
    // console.log(sessionUser, 'this is users')

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
                    </div>
                    <div className='notebooks'>
                        {notebooks?.map((notebook, index) =>
                            <div key={index} className='one-notebook'>
                                <div>{notebook.name}</div>
                                <div>{sessionUser.username}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
