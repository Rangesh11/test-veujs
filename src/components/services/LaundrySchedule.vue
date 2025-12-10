<script setup>
import { ref } from 'vue'

const clients = ref([
  {
    id: 1,
    name: 'Al Khaleej Construction LLC',
    contractNumber: 'AKC-2024-001',
    residents: 2,
    collectionDays: 'Monday & Thursday',
    weeklyPieces: 48
  },
  {
    id: 2,
    name: 'Qatar Steel Industries',
    contractNumber: 'QSI-2024-012',
    residents: 0,
    collectionDays: 'Tuesday & Friday',
    weeklyPieces: 0
  }
])
</script>

<template>
  <div class="schedule-panel">
    <div class="schedule-header">
      <h3 class="section-title">Collection Schedule by Client</h3>
      <p class="section-subtitle">Standard: 2 collections per week, 12 pieces per collection (48 pieces/month)</p>
    </div>

    <div class="clients-list">
      <div
        v-for="client in clients"
        :key="client.id"
        class="client-card"
      >
        <div class="client-header">
          <div class="client-info">
            <div class="client-name">{{ client.name }}</div>
            <div class="client-contract">{{ client.contractNumber }}</div>
          </div>
          <div class="resident-count">
            <span class="count-value">{{ client.residents }}</span>
            <span class="count-label">residents</span>
          </div>
        </div>
        <div class="client-schedule">
          <div class="schedule-item">
            <span class="schedule-icon">📅</span>
            <span class="schedule-label">Collection Days:</span>
            <span class="schedule-value">{{ client.collectionDays }}</span>
          </div>
          <div class="schedule-item">
            <span class="schedule-label">Weekly Pieces:</span>
            <span class="schedule-value">{{ client.weeklyPieces }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedule-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.schedule-header {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 20px 0;
}

.section-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
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
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.client-info {
  flex: 1;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.count-value {
  font-size: 24px;
  font-weight: 600;
  color: #3b82f6;
}

.count-label {
  font-size: 12px;
  color: #6b7280;
}

.client-schedule {
  display: flex;
  align-items: center;
  gap: 24px;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.schedule-icon {
  font-size: 16px;
}

.schedule-label {
  color: #6b7280;
}

.schedule-value {
  color: #111827;
  font-weight: 500;
}

@media (max-width: 768px) {
  .client-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .resident-count {
    align-items: flex-start;
  }
  
  .client-schedule {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
