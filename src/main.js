// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router

// Create the Vue application instance and mount it to the DOM element with id="app"
createApp(App)
  .use(router)
  .mount('#app')
