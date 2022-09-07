import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../store/slices/TrainerName.slice'


const Home = () => {

    const navigate=useNavigate()


    const action = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value.trim()
        if (name != '')
            action(setTrainerName(name))
            navigate('/pokemons/1')
        console.log(name)
        e.target.name.value=''
    }

    return (
        <div className='home'>
            <h1 className='homeTitle'>Hi Trainer!</h1>
            <p>To start, give me your name</p>
            <form onSubmit={handleSubmit}>
                <input className='searchInput' type="text" placeholder='Input your name' id='name' required/>
                <button className='btnSearch'>Begin</button>
            </form>

            <img className='imgHome' src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-1.png" alt="" />
        </div>
    )
}

export default Home