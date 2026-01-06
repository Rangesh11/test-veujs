<script setup>
import AppLayout from './components/AppLayout.vue'
// Router handles navigation now
</script>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
export default {
  name: "App",
  created() {
    window.app = FacilioAppSDK.init();
    window.app.on("app.loaded", (data) => {
      if (data?.currentUser?.id) {
        window.userId = Number(data.currentUser.id);
      }
    });
  },
};
</script>

<style scoped>
.page-placeholder {
  text-align: center;
  padding: 80px 20px;
  color: #6b7280;
}

.page-placeholder h2 {
  font-size: 24px;
  margin-bottom: 8px;
  text-transform: capitalize;
}

.page-placeholder p {
  font-size: 14px;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
