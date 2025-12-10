<script setup>
const props = defineProps({
  residents: Array,
  selectedResidents: Array,
  activeTab: String
})

const emit = defineEmits(['toggle'])

const toggleResident = (resident) => {
  emit('toggle', resident)
}

const isSelected = (resident) => {
  return props.selectedResidents.some(r => r.id === resident.id)
}
</script>

<template>
  <div class="resident-selector-panel">
    <h2 class="section-title">Select Residents</h2>
    
    <div class="residents-list">
      <div
        v-for="resident in residents"
        :key="resident.id"
        class="resident-item"
      >
        <div class="resident-info">
          <div class="resident-name">{{ resident.name }}</div>
          <div class="resident-company">{{ resident.company }}</div>
          <div class="resident-details">
            <span>{{ resident.nationality }}</span>
            <span class="dot">•</span>
            <span>{{ resident.category }}</span>
            <template v-if="resident.room">
              <span class="dot">•</span>
              <span>Room: {{ resident.room }}</span>
            </template>
          </div>
        </div>
        <button
          class="btn-select"
          :class="{ selected: isSelected(resident) }"
          @click="toggleResident(resident)"
        >
          {{ isSelected(resident) ? 'Selected' : 'Select' }}
        </button>
      </div>

      <div v-if="residents.length === 0" class="empty-state">
        <p>No residents available for this action</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resident-selector-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  max-height: 600px;
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
  gap: 16px;
}

.resident-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s;
}

.resident-item:hover {
  border-color: #3b82f6;
  background: #f9fafb;
}

.resident-info {
  flex: 1;
}

.resident-name {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.resident-company {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
}

.resident-details {
  font-size: 12px;
  color: #6b7280;
  display: flex;
  gap: 6px;
  align-items: center;
}

.dot {
  color: #d1d5db;
}

.btn-select {
  padding: 8px 20px;
  border: 1px solid #3b82f6;
  background: white;
  color: #3b82f6;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-select:hover {
  background: #eff6ff;
}

.btn-select.selected {
  background: #3b82f6;
  color: white;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #9ca3af;
}

.empty-state p {
  margin: 0;
  font-size: 14px;
}
</style>
