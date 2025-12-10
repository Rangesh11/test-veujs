<script setup>
import { ref } from 'vue'
import ServiceTabs from './ServiceTabs.vue'
import ServiceStats from './ServiceStats.vue'
import ForecastChart from './ForecastChart.vue'
import ClientEntitlements from './ClientEntitlements.vue'
import MealBreakdown from './MealBreakdown.vue'
import LaundryStats from './LaundryStats.vue'
import LaundryDistribution from './LaundryDistribution.vue'
import LaundrySchedule from './LaundrySchedule.vue'
import LaundryStandard from './LaundryStandard.vue'

const activeService = ref('catering')

const selectService = (service) => {
  activeService.value = service
}
</script>

<template>
  <div class="services-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Service Management</h1>
        <p class="page-subtitle">Manage catering and laundry services</p>
      </div>
    </div>

    <!-- Service Tabs -->
    <ServiceTabs
      :activeService="activeService"
      @select="selectService"
    />

    <!-- Catering Services Content -->
    <div v-if="activeService === 'catering'" class="service-content">
      <!-- Stats -->
      <ServiceStats />

      <!-- 7-Day Forecast -->
      <ForecastChart />

      <!-- Client Entitlements -->
      <ClientEntitlements />

      <!-- Meal Breakdown -->
      <MealBreakdown />

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="btn-primary">Generate Daily Report</button>
        <button class="btn-secondary">Export to Service Provider</button>
      </div>
    </div>

    <!-- Laundry Services Content -->
    <div v-else class="service-content">
      <!-- Stats -->
      <LaundryStats />

      <!-- Package Distribution -->
      <LaundryDistribution />

      <!-- Collection Schedule -->
      <LaundrySchedule />

      <!-- Laundry Standard -->
      <LaundryStandard />

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="btn-primary">Generate Collection Report</button>
        <button class="btn-secondary">Export Schedule</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 24px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 4px 0;
}

.page-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.placeholder-box {
  background: white;
  border-radius: 12px;
  padding: 60px 24px;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.placeholder-box h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

.placeholder-box p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }
}
</style>
