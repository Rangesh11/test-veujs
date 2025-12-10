<script setup>
import { ref } from 'vue'

const packages = ref([
  {
    name: 'Basic Package',
    description: '(Washing & Folding)',
    residents: 2,
    percentage: 67
  },
  {
    name: 'Junior Package',
    description: '(Washing, Pressing & Folding)',
    residents: 1,
    percentage: 33
  },
  {
    name: 'Senior Package',
    description: '(Washing, Pressing & Hanging)',
    residents: 0,
    percentage: 0
  }
])
</script>

<template>
  <div class="distribution-panel">
    <h3 class="section-title">Laundry Package Distribution</h3>

    <div class="packages-list">
      <div
        v-for="(pkg, index) in packages"
        :key="index"
        class="package-row"
      >
        <div class="package-header">
          <div class="package-info">
            <span class="package-name">{{ pkg.name }}</span>
            <span class="package-desc">{{ pkg.description }}</span>
          </div>
          <div class="package-count">
            {{ pkg.residents }} residents ({{ pkg.percentage }}%)
          </div>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :class="[
              index === 0 ? 'blue' : '',
              index === 1 ? 'green' : '',
              index === 2 ? 'gray' : ''
            ]"
            :style="{ width: pkg.percentage + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.distribution-panel {
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
  margin: 0 0 20px 0;
}

.packages-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.package-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.package-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.package-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.package-name {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
}

.package-desc {
  font-size: 13px;
  color: #6b7280;
}

.package-count {
  font-size: 14px;
  color: #6b7280;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 20px;
  transition: width 0.3s ease;
}

.progress-fill.blue {
  background: #3b82f6;
}

.progress-fill.green {
  background: #10b981;
}

.progress-fill.gray {
  background: #e5e7eb;
}
</style>
