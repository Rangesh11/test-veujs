<script setup>
import { ref } from 'vue'

const currentRoom = ref('A1-101, Bed 1')
const newRoom = ref('')
const newBed = ref('')
const effectiveDate = ref('10-12-2025')
</script>

<template>
  <div class="form-panel">
    <h2 class="section-title">Change Room Form</h2>

    <!-- Info Box -->
    <div class="info-box">
      <div class="info-heading">Room Change Rules</div>
      <ul class="info-list">
        <li>Can only move within same client's allocated rooms</li>
        <li>Maintains billing continuity</li>
        <li>History of room allocations kept for audit</li>
      </ul>
    </div>

    <!-- Current Room Display -->
    <div class="current-room-box">
      <div class="room-label">Current Room:</div>
      <div class="room-value">{{ currentRoom }}</div>
    </div>

    <!-- Form Fields -->
    <div class="form-group">
      <label class="form-label">New Room</label>
      <select v-model="newRoom" class="form-input">
        <option value="">Select new room...</option>
        <option value="A1-102">A1-102 (Building A1)</option>
        <option value="A1-103">A1-103 (Building A1)</option>
        <option value="A2-201">A2-201 (Building A2)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">New Bed Number</label>
      <input
        v-model="newBed"
        type="text"
        placeholder="Bed number..."
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Effective Date</label>
      <input
        v-model="effectiveDate"
        type="text"
        class="form-input"
      />
    </div>

    <!-- Submit Button -->
    <button class="btn-submit">Process Room Change</button>
  </div>
</template>

<style scoped>
.form-panel {
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
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.info-box {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

.info-heading {
  font-size: 14px;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 12px;
}

.info-list {
  margin: 0;
  padding-left: 20px;
  color: #1e40af;
}

.info-list li {
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 6px;
}

.info-list li:last-child {
  margin-bottom: 0;
}

.current-room-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.room-label {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.room-value {
  font-size: 14px;
  color: #111827;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-submit {
  width: 100%;
  padding: 14px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}

.btn-submit:hover {
  background: #2563eb;
}
</style>
