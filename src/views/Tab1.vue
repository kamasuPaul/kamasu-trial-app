<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item :key="todo.id" v-for="todo in todos">
          <ion-label>{{ todo.content }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-toolbar >
        <ion-input placeholder="Enter item" v-model="todoText"></ion-input>
        <ion-button slot="end" v-on:click="addTodo">Add</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonFooter,
  IonButton,
  IonInput,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonFooter,
    IonButton,
    IonInput,
  },
  data() {
    return {
      todos: [
        { id: 1, content: "Do the laundry" },
        { id: 2, content: "Buy Christmas gifts" },
        { id: 3, content: "Spellcheck my draft" },
      ],
      todoText:""
    };
  },
  methods:{
    addTodo(){
      if(this.todoText == "") return;
      this.todos.push({
        id: this.todos.length,
        content: this.todoText
      })
      this.todoText = ""
    }
  }
};
</script>