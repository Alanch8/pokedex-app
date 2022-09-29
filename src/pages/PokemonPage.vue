<template>
  <h1 v-if="!pokemon">Please wait...</h1>

  <div v-else>
    <h1>Pokédex</h1>

    <PokemonPicture :pokemon-id="pokemon.id" />

  </div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";

import getPokemonInfo from "../helpers/getPokemonInfo.js";

export default {
  components: { PokemonPicture },
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
      this.pokemonArr = await getPokemonInfo();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
  },
  mounted() {
  },
};
</script>   