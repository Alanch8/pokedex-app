<script setup>
import { ref } from "vue";
import PokeCard from "./PokeCard.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="pokedexTable">
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
    <PokeCard/>
  </div>
</template>

<style scoped>
.pokedexTable {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
</style>
