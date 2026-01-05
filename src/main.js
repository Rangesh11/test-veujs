// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router


// Add Facilio SDK script and check user before mounting Vue app


// function loadFacilioAndCheckUser(callback) {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
//   script.onload = () => {
//     if (window.app && typeof window.app.getCurrentUser === 'function') {
//       const currentUser = window.app.getCurrentUser();
//       if (currentUser && currentUser.email) {
//         // User exists, go to dashboard route
//         callback();
//         // Optionally, force route to /dashboard if not already there
//         if (window.location.pathname !== '/dashboard') {
//           window.location.pathname = '/dashboard';
//         }
//       } else {
//         // No user, redirect to Facilio login
//         window.location.href = 'https://app.facilio.com/identity/login';
//       }
//     } else {
//       // SDK not loaded or app object missing, redirect to login
//       window.location.href = 'https://app.facilio.com/identity/login';
//     }
//   };
//   document.head.appendChild(script);
// }

// loadFacilioAndCheckUser(() => {
  createApp(App)
    .use(router)
    .mount('#app');
// });
