import { bindActionCreators } from "redux";

const LOAD_NOTES = 'dashboard/LOAD_NOTES'

// ACTIONS
const loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
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

const initialState = {
    list: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_NOTES:
            return {
                ...state,
                list: [...action.notes]
            }
        default:
            return state;
    }
}
