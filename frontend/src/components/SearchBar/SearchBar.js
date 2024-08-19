import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    return (
        <div className="search-container">
            <h1>How can we help?</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button className="search-button">→</button>
            </div>
        </div>
    );
}

export default SearchBar;