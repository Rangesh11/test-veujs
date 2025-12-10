<script setup>
// No props or emits needed - using router-link now
</script>

<template>
  <div class="app-layout">
    <!-- Header -->
    <header class="app-header">
      <div class="header-content">
        <div class="header-left">
          <h1 class="title">Alrayan Labour City CAFM</h1>
          <p class="subtitle">Facility Management System - 77 Buildings | 32,000 Capacity</p>
        </div>
        <div class="header-right">
          <div class="current-date">Current Date: 10/12/2025</div>
          <div class="user-info">Logged in as: FM Administrator</div>
        </div>
      </div>
      
      <!-- Navigation -->
      <nav class="nav-tabs">
        <router-link to="/dashboard" class="nav-tab">
          Dashboard
        </router-link>
        <router-link to="/contracts" class="nav-tab">
          Contracts
        </router-link>
        <router-link to="/inventory" class="nav-tab">
          Inventory
        </router-link>
        <router-link to="/residents" class="nav-tab">
          Residents
        </router-link>
        <router-link to="/checkinout" class="nav-tab">
          Check-In/Out
        </router-link>
        <router-link to="/services" class="nav-tab">
          Services
        </router-link>
        <router-link to="/billing" class="nav-tab">
          Billing
        </router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="app-content">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  background: #f9fafb;
}

.app-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 20px 32px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.header-left {
  flex: 1;
}

.title {
  font-size: 24px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 4px 0;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.header-right {
  text-align: right;
}

.current-date,
.user-info {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
}

.nav-tabs {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.nav-tab {
  padding: 12px 20px;
  border-bottom: 3px solid transparent;
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.nav-tab:hover {
  color: #3b82f6;
  background: #f9fafb;
}

.nav-tab.router-link-active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

.nav-icon {
  font-size: 16px;
}

.app-content {
  padding: 32px;
}

@media (max-width: 640px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
  }
  
  .header-right {
    text-align: left;
  }
  
  .nav-tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
