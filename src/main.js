import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzqMx-q0LuGrVSey595m1GrPvGduHNpno",
  authDomain: "radiofarro-d7d96.firebaseapp.com",
  projectId: "radiofarro-d7d96",
  storageBucket: "radiofarro-d7d96.appspot.com",
  messagingSenderId: "815280941074",
  appId: "1:815280941074:web:fc0f8a61f0443b285490cb"
};

const db = getFirestore(firebase.initializeApp(firebaseConfig));

createApp(App).use(store).use(router).mount('#app');

export {db};

