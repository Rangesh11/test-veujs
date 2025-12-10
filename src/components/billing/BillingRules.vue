<script setup>
</script>

<template>
  <div class="rules-panel">
    <h3 class="panel-title">Billing Calculation Rules</h3>
    <ul class="rules-list">
      <li>Fixed Bed Contracts: Billed for full contracted bed count regardless of actual occupancy</li>
      <li>Occupancy Based Contracts: Billed based on daily occupancy snapshots at midnight</li>
      <li>Midnight Rule: If resident is present at midnight, that day is billable</li>
    </ul>
  </div>
</template>

<style scoped>
.rules-panel {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.panel-title {
  font-size: 16px;
  font-weight: 600;
  color: #1e40af;
  margin: 0 0 12px 0;
}

.rules-list {
  margin: 0;
  padding-left: 20px;
  color: #1e40af;
}

.rules-list li {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 6px;
}

.rules-list li:last-child {
  margin-bottom: 0;
}
</style>
