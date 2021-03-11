<template>
  <ion-app>

    <home></home>

  </ion-app>
</template>

<script>

import Home from '@/views/Home';

import {
  IonApp
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    Home
  }
});
</script>

<style scoped>
</style>