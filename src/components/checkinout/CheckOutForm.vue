<script setup>
import { ref } from 'vue'

const checkOutDateTime = ref('10-12-2025 09:33')
const reason = ref('Contract End')
const notes = ref('')
</script>

<template>
  <div class="form-panel">
    <h2 class="section-title">Check Out Form</h2>

    <!-- Alert Box -->
    <div class="alert-box">
      <div class="alert-icon">⚠️</div>
      <div class="alert-content">
        <div class="alert-heading">Billing Cut-off: Midnight</div>
        <div class="alert-text">
          If a resident is present at midnight, that day is billable. Early check-out applies charges up to that day only, not the next.
        </div>
      </div>
    </div>

    <!-- Process Info Box -->
    <div class="info-box">
      <div class="info-heading">Check-Out Process</div>
      <ul class="info-list">
        <li>Calculate final billing up to check-out date</li>
        <li>Apply midnight cut-off rule for charges</li>
        <li>Deactivate access card</li>
        <li>Move room to refurbishment pool if fully vacated</li>
      </ul>
    </div>

    <!-- Form Fields -->
    <div class="form-group">
      <label class="form-label">Check-Out Date & Time</label>
      <input
        v-model="checkOutDateTime"
        type="text"
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Reason for Check-Out</label>
      <select v-model="reason" class="form-input">
        <option value="Contract End">Contract End</option>
        <option value="Transfer">Transfer</option>
        <option value="Termination">Termination</option>
        <option value="Resignation">Resignation</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Notes</label>
      <textarea
        v-model="notes"
        rows="4"
        placeholder="Additional notes..."
        class="form-textarea"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button class="btn-submit-danger">Process Check-Out</button>
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

.alert-box {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
}

.alert-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
}

.alert-heading {
  font-size: 14px;
  font-weight: 600;
  color: #92400e;
  margin-bottom: 4px;
}

.alert-text {
  font-size: 13px;
  color: #92400e;
  line-height: 1.5;
}

.info-box {
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

.info-heading {
  font-size: 14px;
  font-weight: 600;
  color: #92400e;
  margin-bottom: 12px;
}

.info-list {
  margin: 0;
  padding-left: 20px;
  color: #92400e;
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

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-textarea {
  resize: vertical;
}

.btn-submit-danger {
  width: 100%;
  padding: 14px 24px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}

.btn-submit-danger:hover {
  background: #dc2626;
}
</style>
