<script setup>
import { ref } from 'vue'
import InventoryStats from './InventoryStats.vue'
import BuildingList from './BuildingList.vue'
import RoomDetails from './RoomDetails.vue'

const searchQuery = ref('')
const selectedBuilding = ref(null)

const buildings = ref([
  {
    id: 1,
    name: 'Building A1',
    zone: 'North Zone',
    rooms: 120,
    totalBeds: 480,
    occupied: 456,
    available: 24,
    occupancy: 95
  },
  {
    id: 2,
    name: 'Building A2',
    zone: 'North Zone',
    rooms: 80,
    totalBeds: 320,
    occupied: 280,
    available: 40,
    occupancy: 88
  },
  {
    id: 3,
    name: 'Building A3',
    zone: 'North Zone',
    rooms: 60,
    totalBeds: 240,
    occupied: 220,
    available: 20,
    occupancy: 92
  },
  {
    id: 4,
    name: 'Building B1',
    zone: 'East Zone',
    rooms: 90,
    totalBeds: 360,
    occupied: 310,
    available: 50,
    occupancy: 86
  },
  {
    id: 5,
    name: 'Building B2',
    zone: 'East Zone',
    rooms: 50,
    totalBeds: 200,
    occupied: 175,
    available: 25,
    occupancy: 88
  },
  {
    id: 6,
    name: 'Building C1',
    zone: 'South Zone',
    rooms: 70,
    totalBeds: 280,
    occupied: 245,
    available: 35,
    occupancy: 88
  },
  {
    id: 7,
    name: 'Building D1',
    zone: 'West Zone',
    rooms: 50,
    totalBeds: 200,
    occupied: 185,
    available: 15,
    occupancy: 93
  }
])

const selectBuilding = (building) => {
  selectedBuilding.value = building
}
</script>

<template>
  <div class="inventory-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Inventory & Capacity Management</h1>
        <p class="page-subtitle">Monitor buildings, rooms, and bed allocation</p>
      </div>
      <button class="btn-allocate">
        <span class="icon">🏨</span>
        Allocate Rooms
      </button>
    </div>

    <!-- Stats -->
    <InventoryStats :buildings="buildings" />

    <!-- Search -->
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search buildings by name or cluster..."
        class="search-input"
      />
    </div>

    <!-- Two Column Layout -->
    <div class="inventory-layout">
      <BuildingList
        :buildings="buildings"
        :selectedBuilding="selectedBuilding"
        @select="selectBuilding"
      />
      <RoomDetails :building="selectedBuilding" />
    </div>
  </div>
</template>

<style scoped>
.inventory-page {
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

.btn-allocate {
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

.btn-allocate:hover {
  background: #2563eb;
}

.icon {
  font-size: 18px;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
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

.inventory-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 1024px) {
  .inventory-layout {
    grid-template-columns: 1fr;
  }
}
</style>
