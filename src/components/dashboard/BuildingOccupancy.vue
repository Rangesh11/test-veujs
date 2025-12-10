<script setup>
defineProps({
  buildings: Array
})
</script>

<template>
  <div class="occupancy-section">
    <h2 class="section-title">Building Occupancy Overview</h2>
    
    <div class="building-list">
      <div v-for="building in buildings" :key="building.id" class="building-item">
        <div class="building-header">
          <div class="building-info">
            <span class="building-name">{{ building.name }}</span>
            <span class="building-zone">({{ building.zone }})</span>
          </div>
          <div class="building-stats">{{ building.occupied }}/{{ building.capacity }} ({{ building.percentage }}%)</div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: building.percentage + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.occupancy-section {
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
  margin: 0 0 24px 0;
}

.building-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.building-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.building-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.building-info {
  display: flex;
  gap: 8px;
  align-items: center;
}

.building-name {
  font-weight: 600;
  color: #111827;
  font-size: 15px;
}

.building-zone {
  color: #6b7280;
  font-size: 14px;
}

.building-stats {
  color: #374151;
  font-size: 14px;
  font-weight: 500;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
  transition: width 0.3s ease;
}
</style>
