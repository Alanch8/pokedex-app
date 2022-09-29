<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.pokemonId}.png`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 300px;
}
img {
  height: 300px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>