<script setup>
</script>

<template>
  <div class="actions-row">
    <button class="btn-primary">
      <span class="icon">📄</span>
      Generate PDF Report
    </button>
    <button class="btn-success">
      <span class="icon">📊</span>
      Export to Excel
    </button>
    <button class="btn-secondary">
      <span class="icon">✉️</span>
      Send to Client for Sign-off
    </button>
  </div>
</template>

<style scoped>
.actions-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-success,
.btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
}

.btn-secondary {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .actions-row {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-success,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
