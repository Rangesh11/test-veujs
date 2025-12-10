<script setup>
import { ref } from 'vue'

const clients = ref([
  {
    id: 1,
    name: 'Al Khaleej Construction LLC',
    contractNumber: 'AKC-2024-001',
    residents: 2,
    twoMeals: 0,
    threeMeals: 2,
    monthlyMandays: 20
  },
  {
    id: 2,
    name: 'Emirates Engineering Group',
    contractNumber: 'EEG-2024-045',
    residents: 1,
    twoMeals: 0,
    threeMeals: 1,
    monthlyMandays: 10
  },
  {
    id: 3,
    name: 'Qatar Steel Industries',
    contractNumber: 'QSI-2024-012',
    residents: 0,
    twoMeals: 0,
    threeMeals: 0,
    monthlyMandays: 0
  }
])
</script>

<template>
  <div class="entitlements-panel">
    <h3 class="section-title">Catering Entitlements by Client</h3>

    <div class="clients-list">
      <div
        v-for="client in clients"
        :key="client.id"
        class="client-card"
      >
        <div class="client-header">
          <div>
            <div class="client-name">{{ client.name }}</div>
            <div class="client-contract">{{ client.contractNumber }}</div>
          </div>
          <div class="resident-count">{{ client.residents }} <span class="count-label">residents</span></div>
        </div>
        
        <div class="entitlement-grid">
          <div class="entitlement-item">
            <span class="entitlement-label">Two Meals:</span>
            <span class="entitlement-value">{{ client.twoMeals }}</span>
          </div>
          <div class="entitlement-item">
            <span class="entitlement-label">Three Meals:</span>
            <span class="entitlement-value">{{ client.threeMeals }}</span>
          </div>
          <div class="entitlement-item">
            <span class="entitlement-label">Monthly Mandays:</span>
            <span class="entitlement-value">{{ client.monthlyMandays }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entitlements-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 20px 0;
}

.clients-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.client-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}

.client-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.client-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.client-contract {
  font-size: 13px;
  color: #6b7280;
}

.resident-count {
  font-size: 20px;
  font-weight: 600;
  color: #3b82f6;
  text-align: right;
}

.count-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 400;
  display: block;
}

.entitlement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.entitlement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.entitlement-label {
  font-size: 13px;
  color: #6b7280;
}

.entitlement-value {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

@media (max-width: 768px) {
  .entitlement-grid {
    grid-template-columns: 1fr;
  }
  
  .client-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .resident-count {
    text-align: left;
  }
}
</style>
