import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonStat from './PokemonStat'
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({ url,currentPage }) => {
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    const color = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dark: '#705848',
        dragon: '#7038F8',
        steel: '#B8B8D0',
        fairy: '#F0B6BC',
    }

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        navigate(`/pokemon/${pokemon?.name}/${currentPage}`)
    }



    const colorStyle = () => {
        let bgcolor
        if (pokemon) {
            if (pokemon.types[0]) {
                bgcolor = { background: `${color[pokemon.types[0].type.name]}`}
            }

            if (pokemon.types[0] && pokemon.types[1]) {
                bgcolor = { background: `linear-gradient(
                    ${color[pokemon.types[0].type.name]},
                    ${color[pokemon.types[1].type.name]}
                    `}
            }

            if (pokemon.types[0] && pokemon.types[1] && pokemon.types[2]) {
                bgcolor = { background: `linear-gradient(
                    ${color[pokemon.types[0].type.name]},
                    ${color[pokemon.types[1].type.name]},
                    ${color[pokemon.types[2].type.name]}
                    `}
            }

            if (pokemon.types[0] && pokemon.types[1] && pokemon.types[2] && pokemon.types[3]) {
                bgcolor = { background: `linear-gradient(
                    ${color[pokemon.types[0].type.name]},
                    ${color[pokemon.types[1].type.name]},
                    ${color[pokemon.types[2].type.name]},
                    ${color[pokemon.types[3].type.name]}
                    `}
            }

            
            return bgcolor
        }
    }


    const bgColorType=(type)=>{ 
        let bgcolor
        bgcolor={background:`${color[type]}`}
        return bgcolor

    }


    return (

        <article className='pokemonBx'
            onClick={handleClick}
            style={colorStyle()}
        >

            <section className='pokemonBx__info'>
                <h3 className='pokemonName'>{pokemon?.name}</h3>
                {
                    pokemon?.types.map(slot => (
                        <li key={slot.type.url}
                        style={bgColorType(slot.type.name)}
                        >{slot.type.name}</li>
                    ))
                }
            </section>

            <header className='imgBx'>
                <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
            </header>  

        </article>
    )
}

export default PokemonCard