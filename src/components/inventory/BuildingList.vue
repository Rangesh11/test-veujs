<script setup>
defineProps({
  buildings: Array,
  selectedBuilding: Object
})

const emit = defineEmits(['select'])

const selectBuilding = (building) => {
  emit('select', building)
}
</script>

<template>
  <div class="buildings-panel">
    <h2 class="section-title">Buildings ({{ buildings.length }})</h2>
    
    <div class="buildings-list">
      <div
        v-for="building in buildings"
        :key="building.id"
        class="building-card"
        :class="{ selected: selectedBuilding?.id === building.id }"
        @click="selectBuilding(building)"
      >
        <div class="building-header">
          <div class="building-name">{{ building.name }}</div>
          <div class="occupancy-badge">{{ building.occupancy }}% occupancy</div>
        </div>
        
        <div class="building-zone">{{ building.zone }}</div>
        
        <div class="building-stats">
          <div class="stat-row">
            <span class="stat-label">Rooms: {{ building.rooms }}</span>
            <span class="stat-label">Total Beds: {{ building.totalBeds }}</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Occupied: {{ building.occupied }}</span>
            <span class="stat-label">Available: {{ building.available }}</span>
          </div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: building.occupancy + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buildings-panel {
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

.buildings-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.building-card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.building-card:hover {
  border-color: #3b82f6;
  background: #f9fafb;
}

.building-card.selected {
  border-color: #3b82f6;
  background: #eff6ff;
}

.building-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.building-name {
  font-weight: 600;
  color: #111827;
  font-size: 16px;
}

.occupancy-badge {
  font-size: 12px;
  color: #6b7280;
}

.building-zone {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 12px;
}

.building-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.stat-label {
  color: #6b7280;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 3px;
  transition: width 0.3s ease;
}
</style>
