<script setup>
defineProps({
  count: Number,
  contracts: Array
})
</script>

<template>
  <div class="alert-box">
    <div class="alert-header">
      <span class="alert-icon">⚠️</span>
      <div class="alert-title">Contracts Expiring Soon</div>
    </div>
    <div class="alert-subtitle">{{ count }} contract(s) expiring within 60 days</div>
    
    <div class="contract-list">
      <div v-for="contract in contracts" :key="contract.id" class="contract-item">
        <span class="contract-name">{{ contract.name }}</span>
        <span class="contract-date">- Expires: {{ contract.expiryDate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert-box {
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 24px;
}

.alert-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.alert-icon {
  font-size: 20px;
}

.alert-title {
  color: #92400e;
  font-weight: 600;
  font-size: 16px;
}

.alert-subtitle {
  color: #78350f;
  font-size: 14px;
  margin-bottom: 16px;
}

.contract-list {
  margin-top: 12px;
}

.contract-item {
  color: #78350f;
  font-size: 14px;
  padding: 8px 0;
}

.contract-name {
  font-weight: 500;
}

.contract-date {
  color: #92400e;
}
</style>
