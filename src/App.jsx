import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokemons/:page' element={<Pokedex/>}/>
          <Route path='/pokemon/:name/:page' element={<PokemonDetails/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
