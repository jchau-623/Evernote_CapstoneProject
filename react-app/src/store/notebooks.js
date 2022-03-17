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

const addNotebook = (notebook) => {
    return {
        type: ADD_NOTEBOOKS,
        notebook
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

export const addANotebook = (payload) => async dispatch => {
    const res = await fetch('/api/notebooks/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: payload.user_id,
            notebook_id: payload.notebook_id,
            name: payload.name
        })
    })
    if (res.ok) {
        const notebook = await res.json()
        dispatch(addNotebook(notebook.notebook))
        return notebook
    }
}

const initialState = {
    list: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTEBOOKS:
            const allList = {};
            // console.log(action.notebooks, '----------')
            action.notebooks.forEach(notebook => {
                allList[notebook.id] = notebook
            })
            return {
                ...state,
                list: action.notebooks
            }

        case ADD_NOTEBOOKS:
            return {
                ...state,
                list: [state.list, action.notebook]
            }

        default:
            return state;
    }
}
