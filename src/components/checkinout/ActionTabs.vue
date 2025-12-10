<script setup>
defineProps({
  tabs: Object,
  activeTab: String
})

const emit = defineEmits(['select'])

const selectTab = (tab) => {
  emit('select', tab)
}
</script>

<template>
  <div class="action-tabs">
    <div
      class="tab-card"
      :class="{ active: activeTab === 'checkin' }"
      @click="selectTab('checkin')"
    >
      <div class="tab-icon">➡️</div>
      <div class="tab-content">
        <div class="tab-label">{{ tabs.checkin.label }}</div>
        <div class="tab-subtitle">{{ tabs.checkin.subtitle }}</div>
      </div>
    </div>

    <div
      class="tab-card"
      :class="{ active: activeTab === 'checkout' }"
      @click="selectTab('checkout')"
    >
      <div class="tab-icon">⬅️</div>
      <div class="tab-content">
        <div class="tab-label">{{ tabs.checkout.label }}</div>
        <div class="tab-subtitle">{{ tabs.checkout.subtitle }}</div>
      </div>
    </div>

    <div
      class="tab-card"
      :class="{ active: activeTab === 'changeroom' }"
      @click="selectTab('changeroom')"
    >
      <div class="tab-icon">🔄</div>
      <div class="tab-content">
        <div class="tab-label">{{ tabs.changeroom.label }}</div>
        <div class="tab-subtitle">{{ tabs.changeroom.subtitle }}</div>
      </div>
    </div>

    <div
      class="tab-card"
      :class="{ active: activeTab === 'tempout' }"
      @click="selectTab('tempout')"
    >
      <div class="tab-icon">📅</div>
      <div class="tab-content">
        <div class="tab-label">{{ tabs.tempout.label }}</div>
        <div class="tab-subtitle">{{ tabs.tempout.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.tab-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-card:hover {
  border-color: #3b82f6;
  background: #f9fafb;
}

.tab-card.active {
  border-color: #3b82f6;
  background: #eff6ff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.tab-icon {
  font-size: 24px;
}

.tab-content {
  flex: 1;
}

.tab-label {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.tab-subtitle {
  font-size: 12px;
  color: #6b7280;
}

@media (max-width: 1024px) {
  .action-tabs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .action-tabs {
    grid-template-columns: 1fr;
  }
}
</style>
