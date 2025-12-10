<script setup>
import { ref, computed } from 'vue'
import ResidentStats from './ResidentStats.vue'
import ResidentList from './ResidentList.vue'
import ResidentDetails from './ResidentDetails.vue'

const searchQuery = ref('')
const statusFilter = ref('all')
const selectedResident = ref(null)

const residents = ref([
  {
    id: 1,
    name: 'Ahmed Hassan',
    company: 'Al Khaleej Construction LLC',
    nationality: 'Bangladesh',
    category: 'Worker',
    cardNumber: 'AC001234',
    status: 'checked in',
    dob: '12/05/1988',
    religion: 'Muslim',
    contact: '+974 5555 1234',
    client: 'Al Khaleej Construction LLC',
    room: 'R001',
    bed: '1',
    checkInDate: '15/01/2024',
    catering: 'Entitled',
    mealPlan: 'Three Meals',
    mealCategory: 'Seven Protein',
    laundry: 'Basic'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    company: 'Al Khaleej Construction LLC',
    nationality: 'India',
    category: 'Technician',
    cardNumber: 'AC001235',
    status: 'checked in',
    dob: '08/11/1990',
    religion: 'Hindu',
    contact: '+974 5555 1235',
    client: 'Al Khaleej Construction LLC',
    room: 'R002',
    bed: '2',
    checkInDate: '20/01/2024',
    catering: 'Entitled',
    mealPlan: 'Three Meals',
    mealCategory: 'Seven Protein',
    laundry: 'Premium'
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    company: 'Emirates Engineering Group',
    nationality: 'Pakistan',
    category: 'Worker',
    cardNumber: 'AC001236',
    status: 'checked in',
    dob: '15/03/1992',
    religion: 'Muslim',
    contact: '+974 5555 1236',
    client: 'Emirates Engineering Group',
    room: 'R003',
    bed: '1',
    checkInDate: '10/02/2024',
    catering: 'Entitled',
    mealPlan: 'Two Meals',
    mealCategory: 'Standard',
    laundry: 'Basic'
  },
  {
    id: 4,
    name: 'John Doe',
    company: 'Al Khaleej Construction LLC',
    nationality: 'Philippines',
    category: 'Worker',
    cardNumber: null,
    status: 'pre arrival',
    dob: '22/07/1995',
    religion: 'Christian',
    contact: '+974 5555 1237',
    client: 'Al Khaleej Construction LLC',
    room: null,
    bed: null,
    checkInDate: null,
    catering: null,
    mealPlan: null,
    mealCategory: null,
    laundry: null
  }
])

const stats = ref({
  checkedIn: 3,
  preArrival: 1,
  temporaryOut: 0,
  total: 4
})

const filteredResidents = computed(() => {
  let filtered = residents.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(resident =>
      resident.name.toLowerCase().includes(query) ||
      resident.nationality.toLowerCase().includes(query)
    )
  }

  // Filter by status
  if (statusFilter.value !== 'all') {
    filtered = filtered.filter(resident => resident.status === statusFilter.value)
  }

  return filtered
})

const selectResident = (resident) => {
  selectedResident.value = resident
}
</script>

<template>
  <div class="residents-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Resident Management</h1>
        <p class="page-subtitle">Manage resident data and pre-arrival onboarding</p>
      </div>
      <div class="header-actions">
        <button class="btn-secondary">
          <span class="icon">📤</span>
          Bulk Import
        </button>
        <button class="btn-primary">
          <span class="icon">➕</span>
          Add Resident
        </button>
      </div>
    </div>

    <!-- Stats -->
    <ResidentStats :stats="stats" />

    <!-- Search and Filter -->
    <div class="search-filter-row">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name or nationality..."
          class="search-input"
        />
      </div>
      <div class="filter-box">
        <span class="filter-icon">🔽</span>
        <select v-model="statusFilter" class="filter-select">
          <option value="all">All Status</option>
          <option value="checked in">Checked In</option>
          <option value="pre arrival">Pre Arrival</option>
          <option value="temporary out">Temporary Out</option>
        </select>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="residents-layout">
      <ResidentList
        :residents="filteredResidents"
        :selectedResident="selectedResident"
        @select="selectResident"
      />
      <ResidentDetails :resident="selectedResident" />
    </div>
  </div>
</template>

<style scoped>
.residents-page {
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

.header-actions {
  display: flex;
  gap: 12px;
}

.btn-primary,
.btn-secondary {
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
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

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

.icon {
  font-size: 16px;
}

.search-filter-row {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.search-box {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 16px;
  font-size: 16px;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.filter-box {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 200px;
}

.filter-icon {
  position: absolute;
  right: 16px;
  font-size: 12px;
  color: #9ca3af;
  pointer-events: none;
}

.filter-select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  appearance: none;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
}

.residents-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 1024px) {
  .residents-layout {
    grid-template-columns: 1fr;
  }
  
  .header-actions {
    flex-direction: column;
  }
  
  .search-filter-row {
    flex-direction: column;
  }
}
</style>
