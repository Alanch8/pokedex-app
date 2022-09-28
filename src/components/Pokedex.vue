<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="pokedexTable">
    <div class="card">
      <div><h2>Gengar</h2></div>
      <div>
        <img
          class="pokemonImg"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png"
          alt="Gengar"
        />
      </div>
    </div>
    <div class="card">
      <div><h2>Gengar</h2></div>
      <div>
        <img
          class="pokemonImg"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png"
          alt="Gengar"
        />
      </div>
    </div>
    <div class="card">
      <div><h2>Gengar</h2></div>
      <div>
        <img
          class="pokemonImg"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png"
          alt="Gengar"
        />
      </div>
    </div>
    <div class="card">
      <div><h2>Gengar</h2></div>
      <div>
        <img
          class="pokemonImg"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png"
          alt="Gengar"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: beige;
  padding: 50px;
  margin: 10px;
}

.pokedexTable {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.pokemonImg {
  width: 200px;
}
</style>
