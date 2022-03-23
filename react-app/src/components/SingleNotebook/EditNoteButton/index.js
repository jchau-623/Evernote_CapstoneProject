// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateNote } from "../../../store/notes";

// export default function EditNoteButton({ note }) {
//     const dispatch = useDispatch();
//     const [heading, setHeading] = useState(note.heading)
//     const [description, setDescription] = useState(note.description)
//     const [errors, setErrors] = useState([])
//     const [showErrors, setShowErrors] = useState(false)

//     const sessionUser = useSelector(state => state?.session?.user)
//     // console.log(note, 'this is note')


//     useEffect(() => {
//         setShowErrors(false)
//         const errors = []
//         if (!heading) errors.push("Every note needs a heading")
//         if (!description) errors.push("Please provide a description")
//         if (heading.length > 20) errors.push("Your heading is too long")
//         if (description.length > 2200) errors.push('Your body is too long')
//         if (errors) setErrors(errors)
//     }, [heading, description])


//     const handleEdit = async (e) => {
//         e.preventDefault();

//         if (errors.length < 1) {
//             const payload = {
//                 user_id: sessionUser.id,
//                 note_id: note.id,
//                 heading,
//                 description,
//                 // notebook_id: notebookId
//             }

//             const newNote = await dispatch(updateNote(payload))
//         } else {
//             setShowErrors(true)
//         }
//     }

//     return (
//         <div>
//             <form className="add-form">
//                 <label>
//                     <input
//                         className='title-input'
//                         type='text'
//                         value={heading}
//                         placeholder='Title'
//                         onChange={(e) => setHeading(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <textarea
//                     className='textarea-input'
//                     value={description}
//                     placeholder='Start writing'
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//                 <ul className='err-handling'>
//                     {showErrors &&
//                         errors.map((error) => {
//                             return <li key={error}>{error}</li>
//                         })}
//                 </ul>
//                 <button className='buttons' id='edit-note-submit' onClick={handleEdit}>Submit</button>
//                 {/* <button className="buttons" id='cancel-button' onClick={closeForm}>Cancel</button> */}
//             </form>
//         </div>
//     )
// }
