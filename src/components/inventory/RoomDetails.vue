<script setup>
import { computed } from 'vue'

const props = defineProps({
  building: Object
})

// Mock room data based on building
const rooms = computed(() => {
  if (!props.building) return []
  
  const buildingRooms = {
    1: [ // Building A1
      { id: 'A1-101', category: 'Worker', beds: '4/4', client: 'CNT001', status: 'occupied' },
      { id: 'A1-102', category: 'Worker', beds: '3/4', client: 'CNT001', status: 'occupied' },
      { id: 'A1-103', category: 'Worker', beds: '0/4', client: null, status: 'available' },
      { id: 'A1-201', category: 'Technician', beds: '2/2', client: 'CNT001', status: 'occupied' },
      { id: 'A1-104', category: 'Worker', beds: '0/4', client: null, status: 'refurbishment' }
    ],
    6: [ // Building C1
      { id: 'C1-101', category: 'Worker', beds: '0/4', client: null, status: 'available' }
    ]
  }
  
  return buildingRooms[props.building.id] || []
})
</script>

<template>
  <div class="room-details-panel">
    <h2 class="section-title">Room Details</h2>
    
    <div v-if="!building" class="empty-state">
      <div class="empty-icon">🏢</div>
      <p class="empty-text">Select a building to view room details</p>
    </div>

    <div v-else class="room-details">
      <!-- Building Header -->
      <div class="building-header">
        <h3>{{ building.name }}</h3>
        <div class="building-info">
          <span class="info-label">Cluster: {{ building.zone }}</span>
          <span class="info-label">Rooms: {{ rooms.length }}</span>
        </div>
      </div>

      <!-- Rooms Section -->
      <div class="rooms-section">
        <h4 class="rooms-heading">Rooms</h4>
        
        <div v-if="rooms.length === 0" class="no-rooms">
          No room data available
        </div>

        <div v-else class="rooms-list">
          <div
            v-for="room in rooms"
            :key="room.id"
            class="room-card"
            :class="room.status"
          >
            <div class="room-header">
              <div class="room-info">
                <span class="room-icon">🛏️</span>
                <span class="room-id">{{ room.id }}</span>
              </div>
              <span class="room-status-badge" :class="room.status">
                {{ room.status }}
              </span>
            </div>
            
            <div class="room-details-grid">
              <div class="room-detail">
                <span class="detail-label">Category:</span>
                <span class="detail-value">{{ room.category }}</span>
              </div>
              <div class="room-detail">
                <span class="detail-label">Beds:</span>
                <span class="detail-value">{{ room.beds }}</span>
              </div>
              <div v-if="room.client" class="room-detail full-width">
                <span class="detail-label">Client:</span>
                <span class="detail-value">{{ room.client }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-details-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  max-height: 700px;
  overflow-y: auto;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
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

.room-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.building-header {
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.building-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
}

.building-info {
  display: flex;
  gap: 24px;
}

.info-label {
  font-size: 13px;
  color: #6b7280;
}

.rooms-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.rooms-heading {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.no-rooms {
  text-align: center;
  padding: 40px 20px;
  color: #9ca3af;
  font-size: 14px;
}

.rooms-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.room-card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s;
}

.room-card.occupied {
  border-left: 3px solid #3b82f6;
}

.room-card.available {
  border-left: 3px solid #10b981;
}

.room-card.refurbishment {
  border-left: 3px solid #f97316;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.room-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.room-icon {
  font-size: 16px;
}

.room-id {
  font-weight: 600;
  color: #3b82f6;
  font-size: 15px;
}

.room-status-badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
}

.room-status-badge.occupied {
  background: #dbeafe;
  color: #1e40af;
}

.room-status-badge.available {
  background: #d1fae5;
  color: #065f46;
}

.room-status-badge.refurbishment {
  background: #fed7aa;
  color: #9a3412;
}

.room-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.room-detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.room-detail.full-width {
  grid-column: 1 / -1;
}

.detail-label {
  font-size: 12px;
  color: #6b7280;
}

.detail-value {
  font-size: 13px;
  color: #111827;
  font-weight: 500;
}
</style>
