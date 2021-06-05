import React, { useEffect, useState} from 'react'
import {getAllPokemon} from '../../api/Pokemon'
import {TileContainer, SearchBar, Tile} from '../../component'

function Home() {
    const [searchPhrase, setSearchPhrase] = useState('')
    const [pokemonList, setPokemonList] = useState([])
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        getAllPokemon()
        .then(response => {
          const data = response.data
          setPokemonList(data.results)
        }).then(() => {
            setLoadingData(false)
            // console.log(pokemonList)
            // console.log(searchPhrase)
            // console.log(loadingData)

        })
      }, [])

    const filterPokemon = (pokemon) => {
        return pokemon.name.includes(searchPhrase)
    }

    return (
        <main>
            <section>
                <h1 className='title'>My Pokedex</h1>
                <SearchBar onChange={(e) => setSearchPhrase(e.target.value)}/>
                {   
                    loadingData ?

                    <div className= 'lds-dual-ring'></div> :

                    <TileContainer>
                        { pokemonList.filter(filterPokemon).map(pokemon => 
                            <Tile key ={pokemon.name} pokemon={pokemon} />
                        )}
                        
                    </TileContainer>
                }
            </section>
        </main>
    )
}

export default Home