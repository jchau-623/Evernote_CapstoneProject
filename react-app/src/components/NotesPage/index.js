import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../store/notes'
import './NotesPage.css'

export default function NotesPage() {
    const timePassed = (milliseconds) => {

        const second = 1000
        const minute = 60 * second
        const hour = 60 * minute

        const pastSecond = Math.floor((milliseconds % minute) / second)
        const pastMinute = Math.floor((milliseconds % hour) / minute)
        const pastHour = Math.floor((milliseconds / hour))
        const pastDay = Math.floor(pastHour / 24)

        if (pastSecond <= 60 && pastMinute === 0 && pastHour === 0 && pastDay === 0) return `< 1m`;
        if (pastMinute <= 60 && pastHour === 0 && pastDay === 0) return `${pastMinute}m`;
        if (pastHour <= 60 && pastDay === 0) return `${pastHour - 4}h`;
        if (pastDay >= 2 || pastHour > 24) return `${pastDay}d`;

    }

    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.list)

    useEffect(() => {
        dispatch(getNotes())

    }, [dispatch])

    return (
        <div>
            <div className='notes-container'>
                <div>
                    <div>
                        <div id='notes-heading'>
                            <div id='notes-and-icon'>Notes</div>
                            <div className='notes-number'>
                                {notes.length} notes
                            </div>
                        </div>
                        {notes.map((note) =>
                            <div className='note-container'>
                                <div className='note-container-heading'>{note.heading}
                                </div>
                                <div className='note-container-description'>{note.description}
                                </div>
                                <div className='note-container-time'>
                                    {timePassed(Date.parse(new Date().toLocaleString()) - Date.parse(note?.created_at))} ago
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    {/* TODO EDIT NOTE FORM */}
                </div>
            </div>

            <div>
            </div>
        </div>
    )
}
