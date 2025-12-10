<script setup>
defineProps({
  label: String,
  value: [String, Number],
  icon: String,
  color: {
    type: String,
    default: 'blue'
  }
})
</script>

<template>
  <div class="stat-card">
    <div class="stat-content">
      <div class="stat-label">{{ label }}</div>
      <div class="stat-value">{{ value }}</div>
    </div>
    <div class="stat-icon" :class="`icon-${color}`">
      <span v-if="icon">{{ icon }}</span>
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.stat-content {
  flex: 1;
}

.stat-label {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

.stat-value {
  color: #111827;
  font-size: 20px;
  /* font-weight: 600; */
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.icon-blue {
  background: #3b82f6;
  color: white;
}

.icon-green {
  background: #10b981;
  color: white;
}

.icon-purple {
  background: #8b5cf6;
  color: white;
}

.icon-orange {
  background: #f97316;
  color: white;
}
</style>
