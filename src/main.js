// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router


// Add Facilio SDK script and check user before mounting Vue app
function loadFacilioAndCheckUser(callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
  script.onload = () => {
    if (window.app && typeof window.app.getCurrentUser === 'function') {
      const currentUser = window.app.getCurrentUser();
      // Check for null, undefined, or missing email
      if (!currentUser || !currentUser.email) {
        // Redirect to Facilio login page if user is not present
        window.location.href = 'https://app.facilio.com/identity/login';
      } else {
        console.log('Current User Email: ' + currentUser.email);
        callback();
      }
    } else {
      console.warn('Facilio SDK not loaded or app object missing.');
      // Redirect to Facilio login page if SDK fails or user not found
      window.location.href = 'https://app.facilio.com/identity/login';
    }
  };
  document.head.appendChild(script);
}

loadFacilioAndCheckUser(() => {
  createApp(App)
    .use(router)
    .mount('#app');
});
