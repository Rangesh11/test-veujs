<script setup>
import { ref } from 'vue'

const contract = ref('')
const room = ref('')
const bedNumber = ref('')
const checkInDateTime = ref('10-12-2025 09:32')
</script>

<template>
  <div class="form-panel">
    <h2 class="section-title">Check In Form</h2>

    <!-- Process Info Box -->
    <div class="info-box">
      <div class="info-heading">Check-In Process</div>
      <ul class="info-list">
        <li>Bind resident to contract, building, room, and bed</li>
        <li>Activate service entitlements (accommodation, catering, laundry)</li>
        <li>Trigger access control integration for card issuance</li>
        <li>Start billing based on contract type</li>
      </ul>
    </div>

    <!-- Form Fields -->
    <div class="form-group">
      <label class="form-label">Contract</label>
      <select v-model="contract" class="form-input">
        <option value="">Select contract...</option>
        <option value="CNT001">CNT001 - Al Khaleej Construction LLC</option>
        <option value="CNT002">CNT002 - Emirates Engineering Group</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Building & Room</label>
      <select v-model="room" class="form-input">
        <option value="">Select room...</option>
        <option value="A1-101">A1-101 (Building A1)</option>
        <option value="A1-102">A1-102 (Building A1)</option>
        <option value="A2-201">A2-201 (Building A2)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Bed Number</label>
      <input
        v-model="bedNumber"
        type="text"
        placeholder="Bed number..."
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Check-In Date & Time</label>
      <input
        v-model="checkInDateTime"
        type="text"
        class="form-input"
      />
    </div>

    <!-- Submit Button -->
    <button class="btn-submit">Process Check-In</button>
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
