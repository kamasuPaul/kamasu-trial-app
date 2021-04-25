<template>
  <base-layout
    :page-title="currentMemory ? currentMemory.title : 'Oops no memory'"
    default-back-link="/memories"
  >
    <h2 v-if="!currentMemory">Cant load given memory{{ memoryId }}</h2>
    <memory-overview v-else :image="currentMemory.image" :title="currentMemory.title" :description="currentMemory.description"></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview";
export default {
  data() {
    return {
      memoryId: null,
    };
  },
  components: {
    MemoryOverview,
  },
  mounted() {
    this.memoryId = this.$route.params.id;
  },
  computed: {
    currentMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
};
</script>

<style>
</style>