<template>
  <base-layout page-title="My memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
      <ion-thumbnail slot="start">
        <ion-img :src="memory.image"></ion-img>
      </ion-thumbnail>
      <ion-label>{{ memory.title }}</ion-label>
        
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  data() {
    return {
      memories: [
        {
          id: "m1",
          title: "First tile",
          image:
            "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
          description: "this was a really nice trip",
        },
        {
          id: "m2",
          title: "Surfing tile",
          image:
            "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
          description: "this was a really nice trip",
        },
        {
          id: "m3",
          title: "Coding at don",
          image:
            "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
          description: "this was a really nice trip",
        },
        {
          id: "m4",
          title: "Fresh food",
          image:
            "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
          description: "this was a really nice trip",
        },
        {
          id: "5",
          title: "FREsh bech winds",
          image:
            "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg",
          description: "this was a really nice trip",
        },
      ],
    };
  },
};
</script>

<style>
</style>