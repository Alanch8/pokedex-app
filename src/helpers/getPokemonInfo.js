import pokemonApi from '../api/pokemonApi'



const getPokemonInfo = async() => {

    const pokemon = pokemonApi.get(1);

    return pokemon

}


export default getPokemonInfo



