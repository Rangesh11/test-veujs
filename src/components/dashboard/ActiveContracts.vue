<script setup>
defineProps({
  contracts: Array
})
</script>

<template>
  <div class="contracts-section">
    <h2 class="section-title">Active Contracts by Client</h2>
    
    <div class="contracts-list">
      <div v-for="contract in contracts" :key="contract.id" class="contract-card">
        <div class="contract-info">
          <div class="contract-name">{{ contract.clientName }}</div>
          <div class="contract-code">{{ contract.code }}</div>
        </div>
        <div class="contract-meta">
          <span class="contract-badge" :class="contract.type.toLowerCase()">
            {{ contract.type }}
          </span>
          <div class="contract-beds">{{ contract.beds }} beds</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contracts-section {
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
  margin: 0 0 24px 0;
}

.contracts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contract-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
}

.contract-card:last-child {
  border-bottom: none;
}

.contract-info {
  flex: 1;
}

.contract-name {
  font-weight: 600;
  color: #111827;
  font-size: 15px;
  margin-bottom: 4px;
}

.contract-code {
  color: #6b7280;
  font-size: 13px;
}

.contract-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contract-badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.contract-badge.fixed {
  background: #dbeafe;
  color: #1e40af;
}

.contract-badge.occupancy {
  background: #d1fae5;
  color: #065f46;
}

.contract-beds {
  color: #6b7280;
  font-size: 14px;
}
</style>
