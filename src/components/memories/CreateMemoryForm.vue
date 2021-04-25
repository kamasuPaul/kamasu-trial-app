<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="title" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Image url</ion-label>
        <ion-input type="url" v-model="image" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea rows="5" v-model="description"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default {
  emits: ["save-memory"],
  data() {
    return {
      title: "",
      image: "",
      descrption: "",
    };
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.title,
        image: this.image,
        descrption: this.descrption,
      };
      this.$emit("save-memory",memoryData);
    },
  },
};
</script>

<style>
</style>