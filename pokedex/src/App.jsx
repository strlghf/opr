import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard/")
      .then(res => res.json())
      .then(data => {
        const { name } = data
        setPokemon({
          ...pokemon,
          name
        })
      })
  }, [])

  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>

      <main>
        { pokemon }
      </main>
    </>
  )
}

export default App
