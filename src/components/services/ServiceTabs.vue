<script setup>
defineProps({
  activeService: String
})

const emit = defineEmits(['select'])

const selectService = (service) => {
  emit('select', service)
}
</script>

<template>
  <div class="service-tabs">
    <button
      class="tab-button"
      :class="{ active: activeService === 'catering' }"
      @click="selectService('catering')"
    >
      <span class="tab-icon">🍴</span>
      Catering Services
    </button>
    <button
      class="tab-button"
      :class="{ active: activeService === 'laundry' }"
      @click="selectService('laundry')"
    >
      <span class="tab-icon">👕</span>
      Laundry Services
    </button>
  </div>
</template>

<style scoped>
.service-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  border-bottom: 2px solid #f3f4f6;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 15px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  margin-bottom: -2px;
}

.tab-button:hover {
  color: #3b82f6;
}

.tab-button.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

.tab-icon {
  font-size: 18px;
}
</style>
