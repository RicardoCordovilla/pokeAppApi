import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from './Pagination'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'

const Pokedex = () => {

    const trainerName = useSelector(state => state.TrainerName)


    const [pokemons, setPokemons] = useState()

    const [pokeSearch, setPokeSearch] = useState()
    const [selectType, setSelectType] = useState('All')
    const { page } = useParams()


    useEffect(() => {
        let url
        if (selectType !== 'All') {
            //filtrado por tipo
            url = `https://pokeapi.co/api/v2/type/${selectType}/`
            axios.get(url)
                .then(res => {
                    const arr = res.data.pokemon.map(e => e.pokemon)
                    setPokemons({ results: arr })
                })
                .catch(err => console.log(err))
        }
        else if (pokeSearch) {
            url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
            const obj = { results: [{ url }] }
            setPokemons(obj)

        }
        else {
            // total pokemons 1154
            url = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=1154'

            axios.get(url)
                .then(res => {
                    setPokemons(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [pokeSearch, selectType])

    console.log(page)
    const [currentPage, setCurrentPage] = useState(page)
    const [cardsPerPage] = useState(20)

    const indexLastCard = currentPage * cardsPerPage
    const indexFirstCard = indexLastCard - cardsPerPage
    const cards = pokemons?.results.slice(indexFirstCard, indexLastCard)
    console.log(cards)


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log('currentPage')
    }

    const navigate = useNavigate()

    const goback = () => {
        navigate('/')
    }


    return (
        <>
            <button className='btnBack' onClick={goback}>Back</button>

            <h2>Welcome {trainerName},catch them all</h2>
            <SearchInput
                setPokeSearch={setPokeSearch}
                setSelectType={setSelectType}

            />

            <SelectType
                setSelectType={setSelectType}
                selectType={selectType}
            />

            <div className="cardsContainer">
                {
                    cards?.map(pokemon => (
                        <PokemonCard
                            key={pokemon.url}
                            url={pokemon.url}
                            currentPage={currentPage}
                        />
                    ))
                }
            </div>

            <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={pokemons?.results.length}
                paginate={paginate}
                page={page}
            />
        </>
    )
}

export default Pokedex