<script setup>
import { ref } from 'vue'
import ActionTabs from './ActionTabs.vue'
import ResidentSelector from './ResidentSelector.vue'
import CheckInForm from './CheckInForm.vue'
import CheckOutForm from './CheckOutForm.vue'
import ChangeRoomForm from './ChangeRoomForm.vue'
import TemporaryOutForm from './TemporaryOutForm.vue'

const activeTab = ref('checkin')
const selectedResidents = ref([])

const tabs = ref({
  checkin: { count: 1, label: 'Check In', subtitle: '1 pending' },
  checkout: { count: 3, label: 'Check Out', subtitle: '3 checked in' },
  changeroom: { count: 0, label: 'Change Room', subtitle: 'Internal moves' },
  tempout: { count: 0, label: 'Temporary Out', subtitle: '0 temp out' }
})

const preArrivalResidents = ref([
  {
    id: 4,
    name: 'John Doe',
    company: 'Al Khaleej Construction LLC',
    nationality: 'Philippines',
    category: 'Worker',
    status: 'pre arrival'
  }
])

const checkedInResidents = ref([
  {
    id: 1,
    name: 'Ahmed Hassan',
    company: 'Al Khaleej Construction LLC',
    nationality: 'Bangladesh',
    category: 'Worker',
    room: 'R001',
    status: 'checked in'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    company: 'Al Khaleej Construction LLC',
    nationality: 'India',
    category: 'Technician',
    room: 'R004',
    status: 'checked in'
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    company: 'Emirates Engineering Group',
    nationality: 'Pakistan',
    category: 'Worker',
    room: 'R005',
    status: 'checked in'
  }
])

const selectTab = (tab) => {
  activeTab.value = tab
  selectedResidents.value = []
}

const toggleResident = (resident) => {
  const index = selectedResidents.value.findIndex(r => r.id === resident.id)
  if (index > -1) {
    selectedResidents.value.splice(index, 1)
  } else {
    selectedResidents.value.push(resident)
  }
}
</script>

<template>
  <div class="checkinout-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Check-In/Out Management</h1>
        <p class="page-subtitle">Process resident check-ins, check-outs, and room changes</p>
      </div>
      <button class="btn-bulk">
        <span class="icon">📋</span>
        Bulk Mode
      </button>
    </div>

    <!-- Action Tabs -->
    <ActionTabs
      :tabs="tabs"
      :activeTab="activeTab"
      @select="selectTab"
    />

    <!-- Two Column Layout -->
    <div class="checkinout-layout">
      <!-- Left: Resident Selector -->
      <ResidentSelector
        :residents="activeTab === 'checkin' ? preArrivalResidents : checkedInResidents"
        :selectedResidents="selectedResidents"
        :activeTab="activeTab"
        @toggle="toggleResident"
      />

      <!-- Right: Forms -->
      <CheckInForm v-if="activeTab === 'checkin'" />
      <CheckOutForm v-else-if="activeTab === 'checkout'" />
      <ChangeRoomForm v-else-if="activeTab === 'changeroom'" />
      <TemporaryOutForm v-else-if="activeTab === 'tempout'" />
    </div>
  </div>
</template>

<style scoped>
.checkinout-page {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 24px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 4px 0;
}

.page-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.btn-bulk {
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
}

.btn-bulk:hover {
  background: #4b5563;
}

.icon {
  font-size: 16px;
}

.checkinout-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
}

@media (max-width: 1200px) {
  .checkinout-layout {
    grid-template-columns: 1fr;
  }
}
</style>
