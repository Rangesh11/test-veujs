<script setup>
import { computed } from 'vue'

const props = defineProps({
  buildings: Array
})

const stats = computed(() => {
  const total = props.buildings.reduce((sum, b) => sum + b.totalBeds, 0)
  const occupied = props.buildings.reduce((sum, b) => sum + b.occupied, 0)
  const available = props.buildings.reduce((sum, b) => sum + b.available, 0)
  
  return {
    totalBuildings: props.buildings.length,
    totalCapacity: total,
    occupied: occupied,
    available: available
  }
})
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon blue">
        <span>🏢</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Total Buildings</div>
        <div class="stat-value">{{ stats.totalBuildings }}</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon green">
        <span>🛏️</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Total Capacity</div>
        <div class="stat-value">{{ stats.totalCapacity.toLocaleString() }} beds</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon purple">
        <span>✅</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Occupied</div>
        <div class="stat-value">{{ stats.occupied.toLocaleString() }} beds</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon orange">
        <span>⭕</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Available</div>
        <div class="stat-value">{{ stats.available }} beds</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.stat-icon.blue {
  background: #3b82f6;
  color: white;
}

.stat-icon.green {
  background: #10b981;
  color: white;
}

.stat-icon.purple {
  background: #8b5cf6;
  color: white;
}

.stat-icon.orange {
  background: #f97316;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-label {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 4px;
}

.stat-value {
  color: #111827;
  font-size: 20px;
  /* font-weight: 600; */
}
</style>
