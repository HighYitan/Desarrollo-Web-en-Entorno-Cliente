import React from 'react'
import  "./Search.css";

const Search = ({setQuery}) => {
  return (
    <div className='search-container'>
        <span htmlFor="">Buscar</span>
        <input type="text" name="search-form" id="search-form" onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search