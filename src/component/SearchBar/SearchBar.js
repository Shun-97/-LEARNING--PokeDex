import React from 'react'

function SearchBar({ ...rest }) {
    return (
        <input 
            type = 'text'
            className = 'search-bar'
            placeholder = 'Search your favourite Pokemon!'
            {...rest}
        />
            
    )
}

export default SearchBar