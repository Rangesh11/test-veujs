// import './assets/main.css' // enable global styles (uncomment to apply)

import { createApp } from 'vue' // Vue 3 application API
import App from './App.vue' // root component
import router from './router' // Vue Router


// Add Facilio SDK script and check user before mounting Vue app



// Checks Facilio user and handles routing for production scenario
function loadFacilioAndCheckUser(callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://static.facilio.com/apps-sdk/latest/facilio_apps_sdk.min.js';
  script.onload = () => {
    // Check if Facilio SDK loaded and user exists
    if (window.app && typeof window.app.getCurrentUser === 'function') {
      const currentUser = window.app.getCurrentUser();
      if (currentUser && currentUser.email) {
        // User exists: mount Vue app and route to /dashboard
        callback();
        if (window.location.pathname !== '/dashboard') {
          // Use Vue router to push route if possible
          if (window.$vueRouter) {
            window.$vueRouter.push('/dashboard');
          } else {
            window.location.pathname = '/dashboard';
          }
        }
      } else {
        // No user: redirect to Facilio login
        window.location.href = 'https://app.facilio.com/identity/login';
      }
    } else {
      // SDK not loaded or app object missing: redirect to login
      window.location.href = 'https://app.facilio.com/identity/login';
    }
  };
  document.head.appendChild(script);
}


// Mount Vue app and expose router for programmatic navigation
loadFacilioAndCheckUser(() => {
  const app = createApp(App)
    .use(router);
  const vm = app.mount('#app');
  // Expose router globally for SDK callback
  window.$vueRouter = router;
});
