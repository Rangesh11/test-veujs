<script setup>
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card blue-bg">
      <div class="stat-icon">
        <span>📄</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Active Contracts</div>
        <div class="stat-value">4</div>
      </div>
    </div>

    <div class="stat-card green-bg">
      <div class="stat-icon">
        <span>📅</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Billing Period</div>
        <div class="stat-value">December 2025</div>
      </div>
    </div>

    <div class="stat-card purple-bg">
      <div class="stat-icon">
        <span>👥</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Total Residents</div>
        <div class="stat-value">3</div>
      </div>
    </div>

    <div class="stat-card orange-bg">
      <div class="stat-icon">
        <span>📈</span>
      </div>
      <div class="stat-content">
        <div class="stat-label">Days in Period</div>
        <div class="stat-value">31 days</div>
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
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.stat-card.blue-bg {
  background: white;
}

.stat-card.green-bg {
  background: white;
}

.stat-card.purple-bg {
  background: white;
}

.stat-card.orange-bg {
  background: white;
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
  font-size: 12px;
  margin-bottom: 4px;
  color: #6b7280;
}

.stat-value {
  font-size: 20px;
  
  color: #111827;
}
</style>
