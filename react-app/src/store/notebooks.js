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

const addNotebook = (newNotebook) => {
    return {
        type: ADD_NOTEBOOKS,
        newNotebook
    }
}

const editNotebook = (notebook) => {
    return {
        type: EDIT_NOTEBOOKS,
        notebook
    }
}

const deleteNotebook = (notebookId) => {
    return {
        type:DELETE_NOTEBOOKS,
        notebookId
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
            user_id:payload.user_id,
            name: payload.name,
        }
        )
    })
    if (res.ok) {
        const notebook = await res.json()
        dispatch(addNotebook(notebook.notebook))
        return notebook
    }
}

export const deleteANotebook = (payload) => async dispatch => {
    // console.log(payload, 'this is payload')
    const res = await fetch('/api/notebooks/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            notebook_id: payload.notebook_id
        })
    })
        if (res.ok) {
        const notebook = await res.json()
        // console.log(notebook,'------this is notebook--------')
        dispatch(deleteNotebook(notebook.deleted_notebookId))
        return notebook
    }
}

export const updateNotebook = (payload) => async dispatch => {
    const res = await fetch('/api/notebooks/', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: payload.user_id,
            name: payload.name,
            notebook_id: payload.notebook_id
        })
    })
    if (res.ok) {
        const notebook = await res.json()
        dispatch(editNotebook(notebook.notebook))
        return notebook
    }
}


const initialState = {
    list: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTEBOOKS:
            // console.log(action.notebooks, '----------')
            return {
                ...state,
                list: action.notebooks
            }

        case ADD_NOTEBOOKS:
            return {
                ...state,
                list: [...state.list, action.newNotebook]
            }

        case EDIT_NOTEBOOKS: {
            const newState = {...state}
            const index = newState.list.findIndex(notebook => notebook.id === action.notebook.id)
            const newListArr = [...newState.list]
            newListArr[index] = action.notebook
            newState.list = newListArr

            return newState
        }

        case DELETE_NOTEBOOKS:
            const newState = {...state}
            const newList = newState.list.filter(notebook => notebook.id !== action.notebookId)
            newState.list = newList
            delete newState[action.notebookId]

            return newState;
        default:
            return state;
    }
}
