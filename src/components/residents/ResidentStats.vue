<script setup>
defineProps({
  stats: Object
})
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon green">
        <span>👤</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Checked In</div>
        <div class="stat-value">{{ stats.checkedIn }}</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon blue">
        <span>👥</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Pre-Arrival</div>
        <div class="stat-value">{{ stats.preArrival }}</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon orange">
        <span>🚪</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Temporary Out</div>
        <div class="stat-value">{{ stats.temporaryOut }}</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon gray">
        <span>👥</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Total</div>
        <div class="stat-value">{{ stats.total }}</div>
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

.stat-icon.green {
  background: #10b981;
  color: white;
}

.stat-icon.blue {
  background: #3b82f6;
  color: white;
}

.stat-icon.orange {
  background: #f59e0b;
  color: white;
}

.stat-icon.gray {
  background: #6b7280;
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
