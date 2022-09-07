import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setSelectType,selectType,setPokeSearch}) => {
    const [typesList, setTypesList] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypesList(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        // console.log(value)
        setSelectType(value)
        setPokeSearch('')
    }

    return (
        <div>

            <select value={selectType} onChange={handleChange} className='searchType'>

                <option value="All" >All pokemons</option>
                {
                    typesList?.map(type => (
                        <option value={type.name}>{type.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectType