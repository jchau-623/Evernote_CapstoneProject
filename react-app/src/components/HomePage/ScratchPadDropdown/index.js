import React from 'react'
// import { getNotebooks } from "../../../store/notebooks"
import './ScratchPadDropdown.css'

export default function ScratchPadDropdown({ setShowDropdown,showDropdown, notebooks, handleClickNotebook }) {


    const handleClick = (e) => {
        setShowDropdown(!showDropdown);
        // this toggles it true/false. you only set it to true, which is why it never becomes false again
    };
    return (
        <>
            <div className='scratchpad-dropdown'>
                <i
                    onClick={handleClick}
                    id='triple-dot'
                    className="fa-light fa-ellipsis"
                />
                <div className='scratchpad-notebooks-div'>
                    {showDropdown && notebooks.map((notebook, index) => (
                        <p key={index} onClick={() => handleClickNotebook(notebook.id)} className='scratchpad-notebooks'>{notebook.name}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
