<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
import PokemonContainer from "./PokemonContainer.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- <Modal /> -->
  <div class="pokemon-container"></div>
  <!-- <PokemonContainer /> -->
</template>

<style></style>
