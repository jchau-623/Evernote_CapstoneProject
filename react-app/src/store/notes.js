const LOAD_NOTES = 'notes/LOAD_NOTES'
const EDIT_NOTES = 'notes/EDIT_NOTES'
const DELETE_NOTES = 'notes/DELETE_NOTES'
const ADD_NOTES = 'notes/ADD_NOTES'

// ACTIONS
const loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
    }
}

const editNote = (note) => {
    return {
        type: EDIT_NOTES,
        note
    }
}

const deleteNote = (noteId) => {
    return {
        type: DELETE_NOTES,
        noteId
    }
}

const addNote = (note) => {
    return {
        type: ADD_NOTES,
        note
    }
}


// THUNK CREATORS
export const getNotes = () => async dispatch => {
    const res = await fetch('/api/notes/');

    if (res.ok) {
        const notes = await res.json()
        dispatch(loadNotes(notes.notes))
        return notes
    }
}

export const updateNote = (payload) => async dispatch => {
    const res = await fetch('/api/notes/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user_id: payload.user_id,
            note_id: payload.note_id,
            heading: payload.heading,
            description: payload.description
        })
    })
    if (res.ok) {
        const note = await res.json()
        dispatch(editNote(note.note))
        return note;
    }
}

export const deleteANote = (payload) => async dispatch => {
    const res = await fetch('/api/notes/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            note_id: payload.note_id
        })
    })

    if (res.ok) {
        const note = await res.json()
        dispatch(deleteNote(note.deleted_note))
        return note;
    }
}
export const addANote = (payload) => async dispatch => {
    const res = await fetch('/api/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user_id: payload.user_id,
            note_id: payload.note_id,
            heading: payload.heading,
            description: payload.description,
        })
    })
    if (res.ok) {
        const note = await res.json()
        dispatch(addNote(note.note))
        return note
    }
}

const initialState = {
    list: []
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_NOTES:
            const allList = {};
            action.notes.forEach(note => {
                allList[note.id] = note
            })
            return {
                ...state,
                list: [...action.notes]
            }

        case EDIT_NOTES: {
            const newState = { ...state }
            const index = newState.list.findIndex(note => note.id === action.note.id)
            const newListArr = [...newState.list]
            newListArr[index] = action.note;
            newState.list = newListArr

            return newState
        }

        case DELETE_NOTES:
            const newState = { ...state }
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
