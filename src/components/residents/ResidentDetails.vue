<script setup>
defineProps({
  resident: Object
})
</script>

<template>
  <div class="resident-details-panel">
    <h2 class="section-title">Resident Details</h2>
    
    <div v-if="!resident" class="empty-state">
      <div class="empty-icon">👤</div>
      <p class="empty-text">Select a resident to view details</p>
    </div>

    <div v-else class="resident-details">
      <!-- Resident Name -->
      <div class="resident-header">
        <h3>{{ resident.name }}</h3>
      </div>

      <!-- Personal Information Grid -->
      <div class="info-section">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Date of Birth:</div>
            <div class="info-value">{{ resident.dob }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Nationality:</div>
            <div class="info-value">{{ resident.nationality }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Religion:</div>
            <div class="info-value">{{ resident.religion }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Contact:</div>
            <div class="info-value">{{ resident.contact }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Labour Category:</div>
            <div class="info-value">{{ resident.category }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Access Card:</div>
            <div class="info-value">{{ resident.cardNumber || 'N/A' }}</div>
          </div>
        </div>
      </div>

      <!-- Accommodation Section -->
      <div class="detail-section">
        <h4 class="section-heading">Accommodation</h4>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Client:</div>
            <div class="info-value">{{ resident.client }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Status:</div>
            <div class="info-value">
              <span class="status-badge" :class="resident.status.replace(' ', '-')">
                {{ resident.status }}
              </span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-label">Room:</div>
            <div class="info-value">{{ resident.room || 'Not Assigned' }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Bed:</div>
            <div class="info-value">{{ resident.bed || 'N/A' }}</div>
          </div>
          <div class="info-item" v-if="resident.checkInDate">
            <div class="info-label">Check-in Date:</div>
            <div class="info-value">{{ resident.checkInDate }}</div>
          </div>
        </div>
      </div>

      <!-- Service Entitlements Section -->
      <div v-if="resident.status === 'checked in'" class="detail-section">
        <h4 class="section-heading">Service Entitlements</h4>
        <div class="services-grid">
          <div class="service-item">
            <div class="service-label">Catering:</div>
            <div class="service-value">{{ resident.catering }}</div>
          </div>
          <div class="service-item">
            <div class="service-label">Meal Plan:</div>
            <div class="service-value">{{ resident.mealPlan }}</div>
          </div>
          <div class="service-item">
            <div class="service-label">Meal Category:</div>
            <div class="service-value">{{ resident.mealCategory }}</div>
          </div>
          <div class="service-item">
            <div class="service-label">Laundry Package:</div>
            <div class="service-value">{{ resident.laundry }}</div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="btn-primary-action">Edit Details</button>
        <button class="btn-secondary-action">View History</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resident-details-panel {
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

.resident-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.resident-header {
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.resident-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.info-value {
  font-size: 14px;
  color: #111827;
  font-weight: 500;
}

.detail-section {
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
}

.section-heading {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  text-transform: capitalize;
  display: inline-block;
}

.status-badge.checked-in {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.pre-arrival {
  background: #dbeafe;
  color: #1e40af;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.service-label {
  font-size: 13px;
  color: #6b7280;
}

.service-value {
  font-size: 13px;
  color: #111827;
  font-weight: 500;
  text-align: right;
}

.action-buttons {
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
}

.btn-primary-action,
.btn-secondary-action {
  flex: 1;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary-action {
  background: #3b82f6;
  color: white;
}

.btn-primary-action:hover {
  background: #2563eb;
}

.btn-secondary-action {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
}

.btn-secondary-action:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}
</style>
