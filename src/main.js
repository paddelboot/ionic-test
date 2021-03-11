import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

const app = createApp(App)
  .use(IonicVue, {
    navAnimation : 'none'
  })
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
