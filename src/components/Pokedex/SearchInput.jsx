import React from 'react'

const SearchInput = ({setPokeSearch,setSelectType}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const value=e.target.searchInput.value
        // console.log(value)
        setPokeSearch(value)
        setSelectType('All')
        e.target.searchInput.value=''
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className='searchBx'>
                <input id='searchInput' className='searchInput' type="text" placeholder='input your favorite pokemon'/>
                <button className='btnSearch'>Search</button>
            </form>
        </div>
    )
}

export default SearchInput