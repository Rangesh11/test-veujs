<script setup>
import { ref, computed } from 'vue'
import BillingFilters from './BillingFilters.vue'
import BillingStats from './BillingStats.vue'
import BillingReport from './BillingReport.vue'
import BillingRules from './BillingRules.vue'
import BillingActions from './BillingActions.vue'

const billingPeriod = ref('December, 2025')
const selectedClient = ref('all')
const selectedService = ref('accommodation')

const billingData = ref([
  {
    id: 1,
    client: 'Al Khaleej Construction LLC',
    contractNumber: 'AKC-2024-001',
    contractType: 'Fixed Bed',
    contractedBeds: 640,
    avgOccupancy: '-',
    billableMandays: 19840,
    status: 'Ready',
    service: 'accommodation'
  },
  {
    id: 2,
    client: 'Emirates Engineering Group',
    contractNumber: 'EEG-2024-045',
    contractType: 'Occupancy',
    contractedBeds: 405,
    avgOccupancy: '1',
    billableMandays: 31,
    status: 'Ready',
    service: 'accommodation'
  },
  {
    id: 3,
    client: 'Qatar Steel Industries',
    contractNumber: 'QSI-2024-012',
    contractType: 'Occupancy',
    contractedBeds: 270,
    avgOccupancy: '0',
    billableMandays: 0,
    status: 'Ready',
    service: 'accommodation'
  },
  {
    id: 4,
    client: 'Gulf Logistics Co',
    contractNumber: 'GLC-2023-089',
    contractType: 'Fixed Bed',
    contractedBeds: 190,
    avgOccupancy: '-',
    billableMandays: 5890,
    status: 'Ready',
    service: 'accommodation'
  }
])

const filteredBillingData = computed(() => {
  let filtered = billingData.value

  // Filter by client
  if (selectedClient.value !== 'all') {
    filtered = filtered.filter(item => item.client === selectedClient.value)
  }

  // Filter by service type
  if (selectedService.value !== 'all') {
    filtered = filtered.filter(item => item.service === selectedService.value)
  }

  return filtered
})

const totalMandays = computed(() => {
  const total = filteredBillingData.value.reduce((sum, item) => sum + item.billableMandays, 0)
  return total.toLocaleString()
})
</script>

<template>
  <div class="billing-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Billing & Reports</h1>
        <p class="page-subtitle">Generate and export billing reports</p>
      </div>
      <button class="btn-export">
        <span class="icon">📥</span>
        Export to ERP
      </button>
    </div>

    <!-- Filters -->
    <BillingFilters
      v-model:billingPeriod="billingPeriod"
      v-model:client="selectedClient"
      v-model:service="selectedService"
    />

    <!-- Stats -->
    <BillingStats />

    <!-- Billing Report Table -->
    <BillingReport :reportData="filteredBillingData" :totalMandays="totalMandays" />

    <!-- Billing Rules -->
    <BillingRules />

    <!-- Action Buttons -->
    <BillingActions />
  </div>
</template>

<style scoped>
.billing-page {
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

.btn-export {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.btn-export:hover {
  background: #2563eb;
}

.icon {
  font-size: 16px;
}
</style>
