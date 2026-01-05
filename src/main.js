// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router




// Dynamically load Facilio SDK, initialize, and log context/user/org, with event listeners
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
script.onload = () => {
  if (window.FacilioAppSDK && window.FacilioAppSDK.init) {
    var app = window.FacilioAppSDK.init();

    // Listen for Facilio app events
    app.on('app.loaded', (data) => {
      console.log('Facilio app.loaded:', data);
    });
    app.on('app.destroyed', () => {
      console.log('Facilio app destroyed');
    });

    // Get and log context, user, org
    let currentRecord = app.getContext();
    if (currentRecord && currentRecord.name) {
      console.log('Record Name: ' + currentRecord.name);
    }
    let currentUser = app.getCurrentUser();
    if (currentUser && currentUser.email) {
      console.log('Current User Email: ' + currentUser.email);
    } else {
      // Redirect to Facilio login page if user is not present
      window.location.href = 'https://app.facilio.com/identity/login';
      return;
    }
    let currentOrg = app.getCurrentOrg();
    if (currentOrg && currentOrg.domain) {
      console.log('Current Org Domain: ' + currentOrg.domain);
    }

    // Mount Vue app
    createApp(App)
      .use(router)
      .mount('#app');
  } else {
    // SDK not loaded or FacilioAppSDK missing, redirect to login
    window.location.href = 'https://app.facilio.com/identity/login';
  }
};
document.head.appendChild(script);
