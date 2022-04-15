import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getNotes } from "../../store/notes";
import './HomePage.css'
import { timePassed } from "../NotesPage/utils";
import moment from 'moment'

export default function HomePage() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.list)
    notes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    useEffect(() => {
        dispatch(getNotes())

    }, [dispatch])

    return (
        <div>
            <div className="full-page-container">
                <div className='main-all-notes-container'>
                    <NavLink id='recent-notes-btn' to='/notes' exact={true} activeClassName='active'>
                        <div className="notes-title" >
                            NOTES <i id='greater-than' className="fa-solid fa-greater-than"></i>
                            <div>
                                
                            </div>
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
                    </div>
                </div>
                <div className="scratch-pad">
                    <div className="scratch-title">
                    Scratch Pad
                    {/* <div>
                        <i
                            id='triple-dot'
                            className="fa-light fa-ellipsis"
                        />
                    </div> */}
                    </div>
                    <textarea id='scratch-text'
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
