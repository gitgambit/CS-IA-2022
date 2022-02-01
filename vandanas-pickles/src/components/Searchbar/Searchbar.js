import React,{useState} from 'react';
import { Link } from "react-router-dom"


export default function SearchBar() {
    const [searchInput, setSearchInput]= useState('');

    return(
        <div className='search-container'>
        <div className="search-bar">
        <input className="input-keyword"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder = "Search Products Offered"
        value={searchInput}>
        </input>
        <div className="search-btn">
            <Link to={`/Products/Search/${searchInput}`}>Search</Link>
        </div>
    </div>
        </div>
    );
}