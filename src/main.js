import { createApp } from 'vue';
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire';
import { firebaseApp } from './firebase';

import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()],
});

app.mount('#app');
