<template>
  <ion-page>
    <ion-header>
      <ion-toolbar slot="top">
        <ion-buttons color="green" slot="start">
          <ion-back-button>dd</ion-back-button>
        </ion-buttons>
        <ion-icon v-on:click="dd" name="ellipsis-vertical-outline"></ion-icon>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <img src="../images/kamasu.jpeg" />
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>Madison, WI</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
          Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-item :key="todo.id" v-for="todo in todos">
          <ion-avatar slot="start">
            <img src="../images/kamasu.jpeg" />
          </ion-avatar>
          <ion-label>
            <h2>Finn</h2>
            <h3>{{ todo.content }}</h3>
            <p>Listen, I've had a pretty messed up day...</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
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
  name: "Home",
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
      todoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.todoText == "") return;
      this.todos.push({
        id: this.todos.length,
        content: this.todoText,
      });
      this.todoText = "";
    },
  },
};
</script>