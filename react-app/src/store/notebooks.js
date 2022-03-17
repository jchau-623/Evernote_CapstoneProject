const LOAD_NOTEBOOKS = 'notebooks/LOAD_NOTEBOOKS'
const EDIT_NOTEBOOKS = 'notebooks/EDIT_NOTEBOOKS'
const DELETE_NOTEBOOKS = 'notebooks/DELETE_NOTEBOOKS'
const ADD_NOTEBOOKS = 'notebooks/ADD_NOTEBOOKS'

// ACTIONS
const loadNotebooks = (notebooks) => {
    return {
        type: LOAD_NOTEBOOKS,
        notebooks
    }
}

// THUNK CREATORS
export const getNotebooks = () => async dispatch => {
    const res = await fetch('/api/notebooks/')

    if (res.ok) {
        const notebooks = await res.json()
        dispatch(loadNotebooks(notebooks.notebooks))
        return notebooks;
    }
}


const initialState = {
    list: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTEBOOKS:
            const allList = {};
            action.notebooks.forEach(notebook => {
                allList[notebook.id] = notebook
            })
            return {
                ...state,
                list: [...action.notebooks]
            }
        default:
            return state;
    }
}
