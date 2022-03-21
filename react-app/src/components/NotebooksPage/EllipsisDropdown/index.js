// import EditNotebookButton from "../../EditNotebookModal";
// import DeleteNotebookButton from "../../DeleteNotebookButton";
// import { useDispatch } from "react-redux";
// import { useRef, useState, useEffect } from "react";

// export default function EllipsisDropdown({ notebook, notebookId }) {
//     const dispatch = useDispatch();
//     // const notebooks = useSelector(state => state?.notebooks?.list)


//     const [showDropdown, setShowDropdown] = useState(false);

//     const editNotebookRef = useRef(null);
//     const deleteNotebookRef = useRef(null);

//     const openDropdown = () => {
//         if (showDropdown) return;
//         setShowDropdown(true);
//     }

//     useEffect(() => {
//         if (!showDropdown) return;

//         const closeDropdown = (e) => {
//             setShowDropdown(false);
//         }
//         document.addEventListener('click', closeDropdown);
//         return () => document.removeEventListener('click', closeDropdown);
//     }, [showDropdown]);
//     return (
//         <>
//             <i onClick={openDropdown} class="fa-solid fa-ellipsis"></i>
//             <ul >
//                 <li>
//                     <EditNotebookButton notebook={notebook} />
//                 </li>
//                 <li>
//                     <DeleteNotebookButton notebookId={notebookId} />
//                 </li>
//             </ul>
//         </>
//     )
// }
