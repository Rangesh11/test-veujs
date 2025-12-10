<script setup>
import { ref } from 'vue'

const mealCategories = ref([
  { name: '7-Protein Worker', count: 2 },
  { name: '10-Protein Worker', count: 0 },
  { name: '14-Protein Tech', count: 1 },
  { name: 'Senior Meal', count: 0 }
])
</script>

<template>
  <div class="breakdown-panel">
    <div class="breakdown-header">
      <h3 class="section-title">Meal Category Breakdown</h3>
      <p class="section-subtitle">Distribution for operational planning</p>
    </div>

    <div class="categories-grid">
      <div
        v-for="(category, index) in mealCategories"
        :key="index"
        class="category-card"
      >
        <div class="category-name">{{ category.name }}</div>
        <div class="category-count">{{ category.count }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.breakdown-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
}

.breakdown-header {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 20px 0;
}

.section-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.category-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
}

.category-name {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
}

.category-count {
  font-size: 32px;
  font-weight: 600;
  color: #111827;
}
</style>
