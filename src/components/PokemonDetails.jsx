import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PokemonStat from './Pokedex/PokemonStat'


const PokemonDetails = () => {
  const [pokeInfo, setPokeInfo] = useState()

  const navigate = useNavigate()

  const { name,page} = useParams()

  let url = `https://pokeapi.co/api/v2/pokemon/${name}/`
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPokeInfo(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const backClick = () => {
    navigate(`/pokemons/${page}`)
  }

  console.log(pokeInfo)


  return (
    <div>
      <button className='btnBack' onClick={backClick}>Back</button>
      <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
      <h1>{pokeInfo?.name}</h1>

      <PokemonStat
        infoStat={pokeInfo}
      />
    </div>
  )
}

export default PokemonDetails