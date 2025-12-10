<script setup>
import { ref } from 'vue'
import StatCard from './StatCard.vue'
import ContractAlert from './ContractAlert.vue'
import BuildingOccupancy from './BuildingOccupancy.vue'
import ActiveContracts from './ActiveContracts.vue'
import ClusterCard from './ClusterCard.vue'

// Mock data matching the Figma design
const stats = ref([
  { label: 'Total Capacity', value: '2,080', icon: '🏨', color: 'blue' },
  { label: 'Current Occupancy', value: '1,871', icon: '👥', color: 'green' },
  { label: 'Occupancy Rate', value: '90.0%', icon: '📈', color: 'purple' },
  { label: 'Active Contracts', value: '4', icon: '📋', color: 'orange' }
])

const expiringContracts = ref([
  { id: 1, name: 'Al Khaleej Construction LLC', expiryDate: '31/12/2025' }
])

const buildings = ref([
  { id: 1, name: 'Building A1', zone: 'North Zone', occupied: 456, capacity: 480, percentage: 95 },
  { id: 2, name: 'Building A2', zone: 'North Zone', occupied: 280, capacity: 320, percentage: 88 },
  { id: 3, name: 'Building A3', zone: 'North Zone', occupied: 220, capacity: 240, percentage: 92 },
  { id: 4, name: 'Building B1', zone: 'East Zone', occupied: 310, capacity: 360, percentage: 86 },
  { id: 5, name: 'Building B2', zone: 'East Zone', occupied: 175, capacity: 200, percentage: 88 }
])

const activeContracts = ref([
  { id: 1, clientName: 'Al Khaleej Construction LLC', code: 'AKC-2024-001', type: 'Fixed Bed', beds: 640 },
  { id: 2, clientName: 'Emirates Engineering Group', code: 'EEG-2024-045', type: 'Occupancy', beds: 405 },
  { id: 3, clientName: 'Qatar Steel Industries', code: 'QSI-2024-012', type: 'Occupancy', beds: 270 },
  { id: 4, clientName: 'Gulf Logistics Co', code: 'GLC-2023-089', type: 'Fixed Bed', beds: 190 }
])

const clusters = ref([
  { id: 1, name: 'North Zone', icon: '🏢', buildings: 3, beds: '956/1040', rate: '91.9%' },
  { id: 2, name: 'East Zone', icon: '🏢', buildings: 2, beds: '485/560', rate: '86.6%' },
  { id: 3, name: 'South Zone', icon: '🏢', buildings: 1, beds: '245/280', rate: '87.5%' },
  { id: 4, name: 'West Zone', icon: '🏢', buildings: 1, beds: '185/200', rate: '92.5%' }
])
</script>

<template>
  <div class="dashboard">
    <!-- Stats Grid -->
    <div class="stats-grid">
      <StatCard
        v-for="stat in stats"
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :icon="stat.icon"
        :color="stat.color"
      />
    </div>

    <!-- Alert -->
    <ContractAlert :count="expiringContracts.length" :contracts="expiringContracts" />

    <!-- Two Column Layout -->
    <div class="two-column">
      <BuildingOccupancy :buildings="buildings" />
      <ActiveContracts :contracts="activeContracts" />
    </div>

    <!-- Capacity by Cluster -->
    <div class="cluster-section">
      <h2 class="section-title">Capacity by Cluster</h2>
      <div class="cluster-grid">
        <ClusterCard
          v-for="cluster in clusters"
          :key="cluster.id"
          :name="cluster.name"
          :icon="cluster.icon"
          :buildings="cluster.buildings"
          :beds="cluster.beds"
          :rate="cluster.rate"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
}

.cluster-section {
  margin-top: 32px;
}

.cluster-section .section-title {
  font-size: 20px;
  font-weight: normal;
  color: #111827;
  margin-bottom: 20px;
}

.cluster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 1024px) {
  .two-column {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .header-content {
    flex-direction: column;
    gap: 16px;
  }
  
  .header-right {
    text-align: left;
  }
  
  .nav-tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
