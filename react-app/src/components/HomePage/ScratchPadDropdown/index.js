import { React, useEffect } from 'react'
// import { getNotebooks } from "../../../store/notebooks"
import './ScratchPadDropdown.css'

export default function ScratchPadDropdown({ setShowDropdown, showDropdown, notebooks, handleClickNotebook }) {

    useEffect(() => {
        if (!showDropdown) return
        const handleClick = (e) => {
            setShowDropdown(false);

        };
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
        // this toggles it true/false. you only set it to true, which is why it never becomes false again
    }, [showDropdown])

    return (
        <>
            <div className='scratchpad-dropdown'>
                <i
                    onClick={setShowDropdown}
                    id='triple-dot'
                    className="fa-solid fa-ellipsis"
                />
                <div className='scratchpad-notebooks-div'>
                    {showDropdown && notebooks.map((notebook, index) => (
                        <p key={index} onClick={() => handleClickNotebook(notebook.id)} className='scratchpad-notebooks'>Add to {notebook.name}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
