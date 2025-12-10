<script setup>
import { ref } from 'vue'

const stats = ref([
  { label: 'Active Subscriptions', value: '3', icon: '👥' },
  { label: 'Weekly Collections', value: '6', icon: '📅' },
  { label: 'Monthly Pieces', value: '144', icon: '👕' },
  { label: 'Mandatory Contracts', value: '2', icon: '📈' }
])
</script>

<template>
  <div class="stats-grid">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="stat-card"
      :class="[
        index === 0 ? 'blue-bg' : '',
        index === 1 ? 'green-bg' : '',
        index === 2 ? 'purple-bg' : '',
        index === 3 ? 'orange-bg' : ''
      ]"
    >
      <div class="stat-icon">
        <span>{{ stat.icon }}</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.stat-card {
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.stat-card.blue-bg {
  background: #eff6ff;
}

.stat-card.green-bg {
  background: #ecfdf5;
}

.stat-card.purple-bg {
  background: #f5f3ff;
}

.stat-card.orange-bg {
  background: #fff7ed;
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

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 13px;
  margin-bottom: 4px;
}

.blue-bg .stat-label {
  color: #1e40af;
}

.green-bg .stat-label {
  color: #065f46;
}

.purple-bg .stat-label {
  color: #6b21a8;
}

.orange-bg .stat-label {
  color: #9a3412;
}

.stat-value {
  font-size: 20px;
  /* font-weight: 600; */
}

.blue-bg .stat-value {
  color: #1e40af;
}

.green-bg .stat-value {
  color: #065f46;
}

.purple-bg .stat-value {
  color: #6b21a8;
}

.orange-bg .stat-value {
  color: #9a3412;
}
</style>
