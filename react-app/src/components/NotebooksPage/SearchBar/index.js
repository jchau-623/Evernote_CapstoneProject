import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ notebooks, setFilteredNotebooks, filteredNotebooks }) {
    const [searchText, setSearchText] = useState('');

    const handleClear = (e) => {
        setFilteredNotebooks(notebooks);
        setSearchText('');
    };

    const handleChangeSearchText = (e) => {
        setSearchText(e.target.value);
        const newNotebooksList = [];
        if (e.target.value === '') {
            setFilteredNotebooks(notebooks);
        } else {
            filteredNotebooks.forEach((notebook) => {
                if (notebook.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    newNotebooksList.push(notebook);
                }
            });
            setFilteredNotebooks(newNotebooksList);
        }
    };


    return (
        <div>
            <div className="searchbar-container">
                <input
                    type="text"
                    placeholder="Find Notebooks..."
                    onChange={(e) => handleChangeSearchText(e)}
                    value={searchText}
                />
                <i class="fa-solid fa-xmark" onClick={handleClear}></i>
            </div>
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            
        </div>
    );
}
