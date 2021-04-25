<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="title" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
            <img :src="previewImageUrl"/>
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
            <ion-icon slot="start" :icon="camera"></ion-icon>
            Take photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea rows="5" v-model="descrption"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {camera} from "ionicons/icons"
import {Plugins,CameraResultType,CameraSource} from "@capacitor/core"

const {Camera} = Plugins;
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonThumbnail,
} from "@ionic/vue";
export default {
  emits: ["save-memory"],
  data() {
    return {
      title: "",
      image: "",
      descrption: "",
      previewImageUrl: null,
      camera
    };
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonIcon,
    IonThumbnail,
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
    async takePhoto(){
    const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source:CameraSource.Camera,
        quality:60
    });
    this.previewImageUrl = photo.webPath;
    }
  },
};
</script>

<style>
</style>