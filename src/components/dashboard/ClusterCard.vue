<script setup>
defineProps({
  name: String,
//   icon: String,
  buildings: Number,
  beds: String,
  rate: String
})
</script>

<template>
  <div class="cluster-card">
    <!-- <div class="cluster-icon">{{ icon }}</div> -->
    <div class="cluster-info">
      <h3 class="cluster-name">{{ name }}</h3>
      <div class="cluster-details">
        <div class="detail-row">
          <span class="detail-label">Buildings:</span>
          <span class="detail-value">{{ buildings }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Beds:</span>
          <span class="detail-value">{{ beds }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Rate:</span>
          <span class="detail-value">{{ rate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cluster-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.2s;
}

.cluster-card:hover {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.cluster-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.cluster-info {
  flex: 1;
}

.cluster-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 12px 0;
}

.cluster-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.detail-label {
  color: #6b7280;
}

.detail-value {
  color: #374151;
  font-weight: 500;
}
</style>
