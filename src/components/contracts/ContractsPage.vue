<script setup>
import { ref, computed } from 'vue'

const selectedContract = ref(null)
const searchQuery = ref('')
const statusFilter = ref('all')
const typeFilter = ref('all')

const contracts = ref([
  {
    id: 1,
    clientName: 'Al Khaleej Construction LLC',
    code: 'AKC-2024-001',
    status: 'active',
    type: 'Fixed',
    beds: 640,
    startDate: '01/01/2024',
    endDate: '31/12/2025'
  },
  {
    id: 2,
    clientName: 'Emirates Engineering Group',
    code: 'EEG-2024-045',
    status: 'active',
    type: 'Occupancy',
    beds: 405,
    startDate: '15/03/2024',
    endDate: '14/03/2025'
  },
  {
    id: 3,
    clientName: 'Qatar Steel Industries',
    code: 'QSI-2024-012',
    status: 'active',
    type: 'Occupancy',
    beds: 270,
    startDate: '01/06/2024',
    endDate: '31/12/2024'
  },
  {
    id: 4,
    clientName: 'Gulf Logistics Co',
    code: 'GLC-2023-089',
    status: 'active',
    type: 'Fixed',
    beds: 190,
    startDate: '10/08/2023',
    endDate: '09/08/2025'
  }
])

const filteredContracts = computed(() => {
  let filtered = contracts.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(contract =>
      contract.clientName.toLowerCase().includes(query) ||
      contract.code.toLowerCase().includes(query)
    )
  }

  // Filter by status
  if (statusFilter.value !== 'all') {
    filtered = filtered.filter(contract => contract.status === statusFilter.value)
  }

  // Filter by type
  if (typeFilter.value !== 'all') {
    filtered = filtered.filter(contract => contract.type.toLowerCase() === typeFilter.value)
  }

  return filtered
})

const selectContract = (contract) => {
  selectedContract.value = contract
}
</script>

<template>
  <div class="contracts-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Contract Management</h1>
        <p class="page-subtitle">Manage client contracts and allocations</p>
      </div>
      <button class="btn-new">
        <span class="plus-icon">+</span>
        New Contract
      </button>
    </div>

    <!-- Search and Filters -->
    <div class="search-filters">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by client name or contract reference..."
          class="search-input"
        />
      </div>
      <select v-model="statusFilter" class="filter-select">
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="pending">Pending</option>
      </select>
      <select v-model="typeFilter" class="filter-select">
        <option value="all">All Types</option>
        <option value="fixed">Fixed Bed</option>
        <option value="occupancy">Occupancy</option>
      </select>
    </div>

    <!-- Two Column Layout -->
    <div class="contracts-layout">
      <!-- Contract List -->
      <div class="contracts-list-panel">
        <h2 class="section-title">Contracts ({{ filteredContracts.length }})</h2>
        
        <div class="contracts-list">
          <div
            v-for="contract in filteredContracts"
            :key="contract.id"
            class="contract-item"
            :class="{ selected: selectedContract?.id === contract.id }"
            @click="selectContract(contract)"
          >
            <div class="contract-header">
              <div class="contract-name-row">
                <span class="contract-name">{{ contract.clientName }}</span>
                <span class="status-badge" :class="contract.status">{{ contract.status }}</span>
              </div>
              <span class="type-badge" :class="contract.type.toLowerCase()">{{ contract.type }}</span>
            </div>
            
            <div class="contract-code">{{ contract.code }}</div>
            
            <div class="contract-footer">
              <div class="contract-dates">
                <!-- <span class="date-icon">📅</span> -->
                <span class="dates">{{ contract.startDate }} → {{ contract.endDate }}</span>
              </div>
              <div class="contract-beds">{{ contract.beds }} beds</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contract Details Panel -->
      <div class="details-panel">
        <h2 class="section-title">Contract Details</h2>
        
        <div v-if="!selectedContract" class="empty-state">
          <div class="empty-icon">📄</div>
          <p class="empty-text">Select a contract to view details</p>
        </div>

        <div v-else class="contract-details">
          <!-- Client Name Header -->
          <div class="client-header">
            <h3>{{ selectedContract.clientName }}</h3>
          </div>

          <!-- Client Information Grid -->
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Contract Reference:</span>
              <span class="info-value">{{ selectedContract.code }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Contract Type:</span>
              <span class="info-value">{{ selectedContract.type }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Start Date:</span>
              <span class="info-value">{{ selectedContract.startDate }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">End Date:</span>
              <span class="info-value">{{ selectedContract.endDate }}</span>
            </div>
          </div>

          <!-- Bed Allocation by Category -->
          <div class="detail-section">
            <h3 class="detail-heading">Bed Allocation by Category</h3>
            <div class="allocation-list">
              <div class="allocation-row">
                <span class="allocation-category">Workers:</span>
                <span class="allocation-beds">500 beds</span>
              </div>
              <div class="allocation-row">
                <span class="allocation-category">Technicians:</span>
                <span class="allocation-beds">100 beds</span>
              </div>
              <div class="allocation-row">
                <span class="allocation-category">Supervisors:</span>
                <span class="allocation-beds">30 beds</span>
              </div>
              <div class="allocation-row">
                <span class="allocation-category">Seniors:</span>
                <span class="allocation-beds">10 beds</span>
              </div>
              <div class="allocation-row total">
                <span class="allocation-category">Total:</span>
                <span class="allocation-beds">{{ selectedContract.beds }} beds</span>
              </div>
            </div>
          </div>

          <!-- Included Services -->
          <div class="detail-section">
            <h3 class="detail-heading">Included Services</h3>
            <div class="services-list">
              <span class="service-badge">Accommodation</span>
              <span class="service-badge">Catering</span>
              <span class="service-badge">Laundry</span>
            </div>
          </div>

          <!-- Allocated Buildings -->
          <div class="detail-section">
            <h3 class="detail-heading">Allocated Buildings</h3>
            <div class="buildings-list">
              <div class="building-item">
                <span class="building-icon">🏢</span>
                <span class="building-name">B001</span>
              </div>
              <div class="building-item">
                <span class="building-icon">🏢</span>
                <span class="building-name">B002</span>
              </div>
              <div class="building-item">
                <span class="building-icon">🏢</span>
                <span class="building-name">B003</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn-primary">Edit Contract</button>
            <button class="btn-secondary">Add Addendum</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contracts-page {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
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

.btn-new {
  background: #3b82f6;
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

.btn-new:hover {
  background: #2563eb;
}

.plus-icon {
  font-size: 18px;
  font-weight: 600;
}

.search-filters {
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

.filter-select {
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  min-width: 150px;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
}

.contracts-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.contracts-list-panel,
.details-panel {
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
  margin: 0 0 20px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.contracts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contract-item {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.contract-item:hover {
  border-color: #3b82f6;
  background: #f9fafb;
}

.contract-item.selected {
  border-color: #3b82f6;
  background: #eff6ff;
}

.contract-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.contract-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.contract-name {
  font-weight: 600;
  color: #111827;
  font-size: 15px;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
}

.status-badge.active {
  background: #d1fae5;
  color: #065f46;
}

.type-badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.type-badge.fixed {
  background: #dbeafe;
  color: #1e40af;
}

.type-badge.occupancy {
  background: #d1fae5;
  color: #065f46;
}

.contract-code {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 12px;
}

.contract-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.contract-dates {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6b7280;
}

.date-icon {
  font-size: 14px;
}

.contract-beds {
  font-size: 13px;
  color: #374151;
  font-weight: 500;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: #9ca3af;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-text {
  font-size: 14px;
  margin: 0;
}

.contract-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.client-header {
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.client-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
.detail-heading {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
}

.allocation-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.allocation-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.allocation-row.total {
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  font-weight: 600;
  color: #111827;
}

.allocation-category {
  color: #6b7280;
}

.allocation-row.total .allocation-category,
.allocation-row.total .allocation-beds {
  color: #111827;
}

.allocation-beds {
  color: #374151;
  font-weight: 500;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.service-badge {
  padding: 6px 16px;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}

.buildings-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.building-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

.building-icon {
  font-size: 16px;
}

.building-name {
  font-weight: 500;
}

.action-buttons {
  display: flex;
  gap: 12px;
  padding-top: 8px;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 13px;
  color: #6b7280;
}

.info-value {
  font-size: 14px;
  color: #111827;
  font-weight: 500;
}

.detail-section {
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.detail-section:last-of-type {
  border-bottom: none;
}

.detail-heading {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
}

@media (max-width: 1024px) {
  .contracts-layout {
    grid-template-columns: 1fr;
  }
}
</style>
