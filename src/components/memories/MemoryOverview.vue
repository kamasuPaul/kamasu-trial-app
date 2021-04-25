<template>
  <ion-img :src="image"></ion-img>
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</template>

<script>
export default {
  props: ["image", "title", "description"],
};
</script>

<style>
</style>