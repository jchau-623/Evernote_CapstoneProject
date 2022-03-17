import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNotebooks } from '../../store/notebooks';
import './NotebooksPage.css'

export default function NotebooksPage() {

    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.notebooks.list)

    useEffect(() => {
        dispatch(getNotebooks())

    }, [dispatch])

    return (
        <div id='notebooks-bigger-container'>
            <div className='notebooks-page-container'>
                <div className='notebooks-header'>
                    <div id='notebooks-title'>
                        Notebooks
                    </div>
                    <div id='number-notebooks'>
                        # notebooks
                        <div id='new-notebook-button'>
                        New Notebook button
                        </div>
                    </div>
                </div>
                <div>
                {notebooks.map((notebook) =>
                <div>{notebook.name}</div>
                )}
                </div>
            </div>
        </div>
    )
}
