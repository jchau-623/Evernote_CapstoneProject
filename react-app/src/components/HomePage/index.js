import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNotes } from "../../store/notes";
import { getNotebooks } from "../../store/notebooks";
import './HomePage.css'
// import { timePassed } from "../NotesPage/utils";
import moment from 'moment'
import ScratchPadDropdown from "./ScratchPadDropdown";
import { addANoteInNotebook } from "../../store/notes";

export default function HomePage() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.list)
    notes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const [description, setDescription] = useState('');

    const [showDropdown, setShowDropdown] = useState(false)

    const notebooks = useSelector(state => state?.notebooks?.list)
    const sessionUser = useSelector(state => state?.session?.user)
    // console.log(notes)
    // console.log(sessionUser)
    useEffect(() => {
        dispatch(getNotes())
        dispatch(getNotebooks())
    }, [dispatch])

    const handleClickNotebook = (notebookId) => {
        // TODO call API to create note for specific notebook
        const payload = {
            user_id: sessionUser.id,
            heading: 'Untitled',
            description: description,
            notebook_id: notebookId,
        }
         dispatch(addANoteInNotebook(payload))
         setDescription('')
         setShowDropdown(false)
    }

    return (
        <div>
            <div className="full-page-container">
                <div className='main-all-notes-container'>
                    <NavLink id='recent-notes-btn' to='/notes' exact={true} activeClassName='active'>
                        <div className="notes-title" >
                            NOTES <i id='greater-than' className="fa-solid fa-greater-than"></i>
                        </div>
                    </NavLink>
                    <div className="containers-spacing">
                        <div className="only-containers">
                            {notes.map((note, i) =>
                                <div key={i} className='main-notes-container'>
                                    <div className="note-container-heading">{note.heading}
                                    </div>
                                    <div className="note-container-description">{note.description}
                                    </div>
                                    <div className="note-container-time">
                                        {moment(note?.created_at).fromNow()}
                                        {/* {timePassed(Date.parse(new Date().toLocaleString()) - Date.parse(note?.created_at))} */}
                                    </div>
                                </div>
                            )}
                        </div>
                    <div className="only-containers">
                        <div className='add-note-main-notes-container'>
                        <NavLink id='recent-notes-btn' to='/notes' exact={true} activeClassName='active'>
                           <i className="fa-regular fa-note-sticky" id="container-note"></i>
                           <p>Notes ({notes.length})</p>
                           </NavLink>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="scratch-pad">
                    <div className="scratch-title">
                        SCRATCH PAD
                        <div>

                            <ScratchPadDropdown setShowDropdown={setShowDropdown} showDropdown={showDropdown} handleClickNotebook={handleClickNotebook} notebooks={notebooks} />
                        </div>
                    </div>
                    <textarea id='scratch-text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="19"
                        placeholder="Start writing...">
                    </textarea>
                </div>
                <div>
                </div>
            </div>
            <div id="background">
                <h1>Welcome to Everwrite!</h1>
                <p>Capture your thoughts and ideas with ease using this Evernote clone.</p>
                <p>Don't let your dreams be dreams.</p>
            </div>
        </div>
    )
}
