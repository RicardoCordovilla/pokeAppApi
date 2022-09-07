import React from 'react'

const PokemonStat = ({ infoStat }) => {
  // console.log("pokemon stat: ", infoStat)

  const abilities = infoStat?.abilities
  const body = { h: infoStat?.height, w: infoStat?.weight }
  const stats = infoStat?.stats

  if (infoStat)
    return (
      <div className="cardStats">
        <div className="">

          <div className='cardGeneralinfo'>
            <div className="abilitiesBx">
              <h3>Abilities:</h3>
              {
                abilities.map(a => (
                  <li key={a.ability.name} className='abilities'>{a.ability.name}</li>
                ))
              }
            </div>
            <div className="bodyInfo">
              <h3>Height: {body.h}</h3>
              <h3>Weight: {body.w}</h3>
            </div>

          </div>

          <div className="abilitiesBx">

            <h2>Stats</h2>
            {
              stats.map(s => (
                <li className='abilities' key={s.stat.name}>{s.stat.name}: {s.base_stat}</li>
              ))
            }
          </div>
        </div>

        <svg className='statsHexagon' height="600" width="500">

          <text className='textStat' x="240" y={`${180 - stats[0].base_stat}`} fill="#55d">{stats[0].stat.name}</text>
          <text className='textStat' x={`${260 + stats[1].base_stat}`} y='200' fill="#55d">{stats[1].stat.name}</text>
          <text className='textStat' x={`${260 + stats[2].base_stat}`} y='400' fill="#55d">{stats[2].stat.name}</text>
          <text className='textStat' x='210' y={`${420 + stats[3].base_stat}`} fill="#55d">{stats[3].stat.name}</text>
          <text className='textStat' x={`${120 - stats[4].base_stat}`} y='400' fill="#55d">{stats[4].stat.name}</text>
          <text className='textStat' x={`${190 - stats[5].base_stat}`} y='200' fill="#55d">{stats[5].stat.name}</text>

          <polygon points={`
        250,${200 - stats[0].base_stat} 
        ${250 + stats[1].base_stat},200 
        ${250 + stats[2].base_stat},400
        250,${400 + stats[3].base_stat}
        ${250 - stats[4].base_stat},400
        ${250 - stats[5].base_stat},200

      `}

            style={{ fill: 'transparent', stroke: '#21f', strokeWidth: '5', zIndex: '1' }} />




        </svg>

      </div>
    )
}

export default PokemonStat