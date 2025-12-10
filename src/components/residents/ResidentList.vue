<script setup>
defineProps({
  residents: Array,
  selectedResident: Object
})

const emit = defineEmits(['select'])

const selectResident = (resident) => {
  emit('select', resident)
}
</script>

<template>
  <div class="residents-panel">
    <h2 class="section-title">Residents ({{ residents.length }})</h2>
    
    <div class="residents-list">
      <div
        v-for="resident in residents"
        :key="resident.id"
        class="resident-card"
        :class="{ selected: selectedResident?.id === resident.id }"
        @click="selectResident(resident)"
      >
        <div class="resident-header">
          <div class="resident-name">{{ resident.name }}</div>
          <span class="status-badge" :class="resident.status.replace(' ', '-')">
            {{ resident.status }}
          </span>
        </div>
        
        <div class="resident-company">{{ resident.company }}</div>
        
        <div class="resident-info">
          <span class="info-item">{{ resident.nationality }}</span>
          <span class="info-dot">•</span>
          <span class="info-item">{{ resident.category }}</span>
          <template v-if="resident.cardNumber">
            <span class="info-dot">•</span>
            <span class="info-item">Card: {{ resident.cardNumber }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.residents-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  max-height: 700px;
  overflow-y: auto;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 20px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.residents-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.resident-card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.resident-card:hover {
  border-color: #3b82f6;
  background: #f9fafb;
}

.resident-card.selected {
  border-color: #3b82f6;
  background: #eff6ff;
}

.resident-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.resident-name {
  font-weight: 600;
  color: #111827;
  font-size: 15px;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
}

.status-badge.checked-in {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.pre-arrival {
  background: #dbeafe;
  color: #1e40af;
}

.status-badge.temporary-out {
  background: #fef3c7;
  color: #92400e;
}

.resident-company {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 8px;
}

.resident-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #6b7280;
}

.info-item {
  color: #6b7280;
}

.info-dot {
  color: #d1d5db;
}
</style>
