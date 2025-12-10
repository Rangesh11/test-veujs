<script setup>
import { ref } from 'vue'

const forecast = ref([
  { date: 'Wed, 10 Dec', count: -10, isToday: true },
  { date: 'Thu, 11 Dec', count: -13, isToday: false },
  { date: 'Fri, 12 Dec', count: 9, isToday: false },
  { date: 'Sat, 13 Dec', count: 26, isToday: false },
  { date: 'Sun, 14 Dec', count: 5, isToday: false },
  { date: 'Mon, 15 Dec', count: -15, isToday: false },
  { date: 'Tue, 16 Dec', count: 9, isToday: false }
])
</script>

<template>
  <div class="forecast-panel">
    <div class="forecast-header">
      <h3 class="section-title">7-Day Catering Forecast</h3>
      <p class="section-subtitle">Daily headcount for meal planning and service provider coordination</p>
    </div>

    <div class="forecast-chart">
      <div
        v-for="(day, index) in forecast"
        :key="index"
        class="forecast-row"
      >
        <div class="day-label">{{ day.date }}</div>
        <div class="bar-container">
          <div
            class="bar"
            :class="{ negative: day.count < 0 }"
            :style="{ width: Math.abs(day.count) * 3 + '%' }"
          >
            <span class="bar-value">{{ day.count }}</span>
          </div>
        </div>
        <span v-if="day.isToday" class="today-badge">Today</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forecast-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.forecast-header {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
}

.section-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.forecast-chart {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.forecast-row {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  align-items: center;
  gap: 16px;
}

.day-label {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

.bar-container {
  background: #e5e7eb;
  border-radius: 20px;
  height: 27px;
  position: relative;
  overflow: hidden;
}

.bar {
  height: 100%;
  background: #3b82f6;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px;
  transition: width 0.3s ease;
  min-width: 60px;
}

.bar.negative {
  background: #3b82f6;
}

.bar-value {
  color: white;
  font-size: 13px;
  font-weight: 600;
}

.today-badge {
  background: #d1fae5;
  color: #065f46;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .forecast-row {
    grid-template-columns: 100px 1fr;
  }
  
  .today-badge {
    grid-column: 2;
    justify-self: end;
  }
}
</style>
