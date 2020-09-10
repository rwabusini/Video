
import React from 'react'

function SearchBar({ handelTextInput, searching }) {
    return (
        <div className="searchbar">
            <input 
				type="text" placeholder="Search for a Video..." className="search-bar" onChange={handelTextInput} onKeyPress={searching}
			/>
        </div>
    )
}

export default SearchBar
