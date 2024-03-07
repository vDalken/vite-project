import './app.scss'
import Header from './components/Header'
import { useState, useEffect } from "react"
import { getPokemon } from "./api/pokemon"
import PokemonDetails from './components/PokemonDetails';


function App() {
  const pokemons = ["pikachu", "charizard", "blastoise", "flareon", "bulbasaur", "alakazam"];
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [pokemon, setPokemon] = useState();

  const handlePokemonChange = (event) => {
    setPokemonName(event.target.value);
  };

  useEffect(() => {
    getPokemon(pokemonName).then((resp) => {
      setPokemon(resp.data);
    });
  }, [pokemonName, setPokemon]); //array to put the useEffect state variables that the effect is dependent on

  console.log(pokemonName);
  console.log(pokemon);

  return (
    <div className="App">
      <section>
        <Header pokemons={pokemons} onPokemonChange={handlePokemonChange}/>
        {pokemon? <PokemonDetails pokemon={pokemon} /> : <p>Loadding...</p>}
      </section>
    </div>
  )
}

export default App
