<script setup>
</script>

<template>
  <div class="standard-panel">
    <h3 class="panel-title">Laundry Service Standard</h3>
    <ul class="standard-list">
      <li>Twice weekly collection per resident</li>
      <li>12 pieces per collection (24 pieces per week)</li>
      <li>Total 48 pieces per month per resident</li>
      <li>Billing based on occupancy and package, not actual usage</li>
      <li>Laundry is mandatory for new contracts</li>
    </ul>
  </div>
</template>

<style scoped>
.standard-panel {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 20px;
}

.panel-title {
  font-size: 16px;
  font-weight: 600;
  color: #1e40af;
  margin: 0 0 12px 0;
}

.standard-list {
  margin: 0;
  padding-left: 20px;
  color: #1e40af;
}

.standard-list li {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 6px;
}

.standard-list li:last-child {
  margin-bottom: 0;
}
</style>
