// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router



// Load Facilio SDK and initialize app logic
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
script.onload = () => {
  // Initialize the SDK as per docs
  const app = window.FacilioAppSDK && window.FacilioAppSDK.init ? window.FacilioAppSDK.init() : null;
  if (app) {
    const currentUser = app.getCurrentUser();
    if (!currentUser || !currentUser.email) {
      // Redirect to Facilio login page if user is not present
      window.location.href = 'https://app.facilio.com/identity/login';
      return;
    }
    // Log context, user, and org info
    const currentRecord = app.getContext();
    if (currentRecord && currentRecord.name) {
      console.log('Record Name: ' + currentRecord.name);
    }
    console.log('Current User Email: ' + currentUser.email);
    const currentOrg = app.getCurrentOrg();
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
