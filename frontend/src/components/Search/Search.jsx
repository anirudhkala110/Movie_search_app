import React from 'react'

const Search = ({handleInput,SearchResult}) => {
    return (
        <div className='search-input mt-3 mb-5'>
            <input type='text' name='movie' className='w-50 p-2 text-center'
                placeholder='Search Movie to get information about that Movie'
                onChange={handleInput} onKeyDown={SearchResult} />
        </div>
    )
}

export default Search