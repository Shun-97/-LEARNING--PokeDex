import React from 'react'
import { Link } from "react-router-dom"

function Tile( pokemon ) {
    // console.log(pokemon.pokemon.url.split('/'))
    const id = pokemon.pokemon.url.split('/')[6]
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

//     return (
//         <Link to={`/pokemon?name=las`}>
//       <div className="tile">
//         <img 
//           alt="pokemon sprite" 
//           src={'url'} />
//         {/* <p>{ pokemon ? pokemon.name : ''}</p> */}
//       </div>
//     </Link>
//   )
    return (
        <Link to={`/pokemon?name=${pokemon.pokemon.name}`}>
      <div className="tile">
        <img 
          alt="pokemon sprite" 
          src={image_url} />
        <p>{ pokemon ? pokemon.pokemon.name : ''}</p>
      </div>
    </Link>
  )
}

export default Tile
