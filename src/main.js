// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router

// Create the Vue application instance and mount it to the DOM element with id="app"

createApp(App)
  .use(router)
  .mount('#app')

// Add Facilio SDK script dynamically
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
script.onload = () => {
  if (window.app && typeof window.app.getCurrentUser === 'function') {
    const currentUser = window.app.getCurrentUser();
    if (!currentUser) {
      window.location.href = 'https://facilio.com';
    } else {
      console.log('Current User Email: ' + currentUser.email);
    }
  } else {
    console.warn('Facilio SDK not loaded or app object missing.');
  }
};
document.head.appendChild(script);
