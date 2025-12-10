<script setup>
defineProps({
  reportData: Array,
  totalMandays: String
})
</script>

<template>
  <div class="report-panel">
    <div class="report-header">
      <h3 class="section-title">Accommodation Billing Report</h3>
      <button class="btn-download">
        <span class="icon">📥</span>
        Download
      </button>
    </div>

    <div class="table-container">
      <table class="billing-table">
        <thead>
          <tr>
            <th>CLIENT</th>
            <th>CONTRACT TYPE</th>
            <th>CONTRACTED BEDS</th>
            <th>AVG OCCUPANCY</th>
            <th>BILLABLE MANDAYS</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in reportData" :key="row.id">
            <td>
              <div class="client-cell">
                <div class="client-name">{{ row.client }}</div>
                <div class="client-contract">{{ row.contractNumber }}</div>
              </div>
            </td>
            <td>
              <span class="badge" :class="row.contractType === 'Fixed Bed' ? 'badge-blue' : 'badge-green'">
                {{ row.contractType }}
              </span>
            </td>
            <td class="number-cell">{{ row.contractedBeds }}</td>
            <td class="number-cell">{{ row.avgOccupancy }}</td>
            <td class="number-cell">{{ row.billableMandays.toLocaleString() }}</td>
            <td>
              <span class="status-badge">{{ row.status }}</span>
            </td>
          </tr>
          <tr class="total-row">
            <td colspan="4"><strong>Total</strong></td>
            <td class="number-cell"><strong>{{ totalMandays }}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.report-panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  margin-bottom: 24px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: normal;
  color: #111827;
  margin: 0;
}

.btn-download {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.btn-download:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.icon {
  font-size: 14px;
}

.table-container {
  overflow-x: auto;
}

.billing-table {
  width: 100%;
  border-collapse: collapse;
}

.billing-table thead {
  background: #f9fafb;
}

.billing-table th {
  text-align: left;
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
}

.billing-table td {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px;
  color: #374151;
}

.client-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.client-name {
  font-weight: 500;
  color: #111827;
}

.client-contract {
  font-size: 12px;
  color: #6b7280;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.badge-blue {
  background: #dbeafe;
  color: #1e40af;
}

.badge-green {
  background: #d1fae5;
  color: #065f46;
}

.number-cell {
  text-align: left;
}

.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  background: #d1fae5;
  color: #065f46;
}

.total-row {
  background: #f9fafb;
}

.total-row td {
  font-weight: 600;
  padding: 16px;
}
</style>
