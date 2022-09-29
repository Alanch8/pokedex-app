<template>
  <h1 v-if="!pokemon">Please wait...</h1>

  <div v-else>
    <h1>Who's that Pokémon?</h1>

    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

    <Pokedex />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Next</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import Pokedex from "../components/Pokedex.vue";

import getPokemonOptions from "../helpers/getPokemonOptions.js";

export default {
  components: { PokemonOptions, PokemonPicture, Pokedex },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      let pokemonName = this.pokemon.name;
      pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);

      if (selectedId === this.pokemon.id) {
        this.message = `Right, ${pokemonName}!`;
      } else {
        this.message = `Oops, it was ${pokemonName}.`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>   