<script setup>
const props = defineProps({
  billingPeriod: String,
  client: String,
  service: String
})

const emit = defineEmits(['update:billingPeriod', 'update:client', 'update:service'])
</script>

<template>
  <div class="filters-row">
    <div class="filter-group">
      <label class="filter-label">Billing Period</label>
      <input
        :value="billingPeriod"
        @input="emit('update:billingPeriod', $event.target.value)"
        type="text"
        class="filter-input"
      />
    </div>

    <div class="filter-group">
      <label class="filter-label">Client</label>
      <select
        :value="client"
        @change="emit('update:client', $event.target.value)"
        class="filter-select"
      >
        <option value="all">All Clients</option>
        <option value="Al Khaleej Construction LLC">Al Khaleej Construction LLC</option>
        <option value="Emirates Engineering Group">Emirates Engineering Group</option>
        <option value="Qatar Steel Industries">Qatar Steel Industries</option>
        <option value="Gulf Logistics Co">Gulf Logistics Co</option>
      </select>
    </div>

    <div class="filter-group">
      <label class="filter-label">Service Type</label>
      <select
        :value="service"
        @change="emit('update:service', $event.target.value)"
        class="filter-select"
      >
        <option value="accommodation">Accommodation</option>
        <option value="catering">Catering</option>
        <option value="laundry">Laundry</option>
        <option value="all">All Services</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filters-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-label {
  font-size: 13px;
  font-weight: 500;
  color: #374151;
}

.filter-input,
.filter-select {
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (max-width: 1024px) {
  .filters-row {
    grid-template-columns: 1fr;
  }
}
</style>
