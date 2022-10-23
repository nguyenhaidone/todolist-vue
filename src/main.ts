import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './main.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA4DJB1_GQOHUaS_GAfkVh-xC_TnM1l_Kc',
  authDomain: 'todolist-vue-88a04.firebaseapp.com',
  projectId: 'todolist-vue-88a04',
  storageBucket: 'todolist-vue-88a04.appspot.com',
  messagingSenderId: '805865367745',
  appId: '1:805865367745:web:2520bf1931f6612ab20c40',
  measurementId: 'G-9EDXJG3F07'
}

initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
