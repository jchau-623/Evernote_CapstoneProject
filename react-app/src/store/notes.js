const LOAD_NOTES = 'dashboard/LOAD_NOTES'
const EDIT_NOTES = 'dashboard/EDIT_NOTES'
const DELETE_NOTES = 'dashboard/DELETE_NOTES'
const ADD_NOTES = '/dashboard/ADD_NOTES'

// ACTIONS
const loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
    }
}

const editNote = (note) => {
    return {
        type:EDIT_NOTES,
        note
    }
}

const deleteNote = (note) => {
    return {
        type:DELETE_NOTES,
        note
    }
}

const addNote = (note) => {
    return {
        type:ADD_NOTES,
        note
    }
}


// THUNK CREATORS
export const addANote = (payload) => async dispatch => {
    const res = await fetch ('/api/notes/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: payload.user_id,
            heading: payload.heading,
            description: payload.description,
        })
    })
    if (res.ok) {
        const data = await res.json()
        dispatch(addNote(data.note))
        return data
    }
}


export const getNotes = () => async dispatch => {
    const res = await fetch('/api/notes/');

    if (res.ok) {
        const notes = await res.json()
        dispatch(loadNotes(notes.notes))
        return notes
    }
}

export const deleteANote = (payload) => async dispatch => {
    const res = await fetch('/api/notes/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            note_id: payload.note_id
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(deleteNote(data.deleted_note))
        return data;
    }
}

const initialState = {
    list: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_NOTES:
            const allList = {};
            action.notes.forEach(note => {
                allList[note.id] = note
            })
            return {
                ...state,
                list: [...action.notes]
            }
        case DELETE_NOTES:
            const newState = {...state}
            const newList = newState.list.filter(note => note.id !== action.noteId)
            newState.list = newList
            delete newState[action.noteId]
            return newState;
        case ADD_NOTES:
            return {
                ...state,
                list: [...state.list, action.note]
            }
        default:
            return state;
    }
}
