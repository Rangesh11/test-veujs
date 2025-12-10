<script setup>
import { ref } from 'vue'

const returnDate = ref('')
const reason = ref('Short Assignment')
</script>

<template>
  <div class="form-panel">
    <h2 class="section-title">Temporary Out Form</h2>

    <!-- Info Box -->
    <div class="info-box">
      <div class="info-icon">ℹ️</div>
      <div class="info-content">
        <div class="info-heading">Temporary Out Status</div>
        <div class="info-text">
          Temporary out provides operational visibility but does not suspend billing. For billing relief, perform a full check-out. This feature may be phased out over time.
        </div>
      </div>
    </div>

    <!-- Warning Box -->
    <div class="warning-box">
      <div class="warning-heading">Temporary Out</div>
      <div class="warning-text">
        Marks resident as temporarily away for operational tracking. Does not affect billing for accommodation, catering, or laundry services.
      </div>
    </div>

    <!-- Form Fields -->
    <div class="form-group">
      <label class="form-label">Expected Return Date</label>
      <input
        v-model="returnDate"
        type="text"
        placeholder="dd-mm-yyyy"
        class="form-input"
      />
    </div>

    <div class="form-group">
      <label class="form-label">Reason</label>
      <select v-model="reason" class="form-input">
        <option value="Short Assignment">Short Assignment</option>
        <option value="Vacation">Vacation</option>
        <option value="Training">Training</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <!-- Submit Button -->
    <button class="btn-submit-warning">Mark as Temporary Out</button>
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
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
}

.info-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-heading {
  font-size: 14px;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 4px;
}

.info-text {
  font-size: 13px;
  color: #1e40af;
  line-height: 1.5;
}

.warning-box {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

.warning-heading {
  font-size: 14px;
  font-weight: 600;
  color: #92400e;
  margin-bottom: 8px;
}

.warning-text {
  font-size: 13px;
  color: #92400e;
  line-height: 1.5;
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
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.btn-submit-warning {
  width: 100%;
  padding: 14px 24px;
  background: #d97706;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}

.btn-submit-warning:hover {
  background: #b45309;
}
</style>
