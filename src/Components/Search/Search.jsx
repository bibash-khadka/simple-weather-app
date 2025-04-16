import React from 'react'
import './Search.css'

function Search({searchTerm,onChange,onSearch}) {
  return (
    <div className="search">
        <input 
        type="text" 
        placeholder='Enter city name'
        value={searchTerm}
        onChange={onChange}
        />
        <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default Search
