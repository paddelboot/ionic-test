<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false" menu="testmenu"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-menu menu-id="testmenu" content-id="mycontent">
      <ion-content>
        <ion-list>
          <ion-item type="button" router-link="/projects">
            <ion-label>Pokémon Projects</ion-label>
          </ion-item>
          <ion-item type="button" router-link="/home">
            <ion-label>Pokémon Home</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-content id="mycontent"> Home </ion-content>
  </ion-page>
</template>

<script>
import {
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonList,
  IonItem,
  IonMenu,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    IonMenu,
    IonLabel,
    IonContent,
    IonHeader,
    IonPage,
  },
});
</script>

<style scoped >
</style>