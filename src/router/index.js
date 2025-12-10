import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../components/dashboard/DashboardPage.vue'
import ContractsPage from '../components/contracts/ContractsPage.vue'
import InventoryPage from '../components/inventory/InventoryPage.vue'
import ResidentsPage from '../components/residents/ResidentsPage.vue'
import CheckInOutPage from '../components/checkinout/CheckInOutPage.vue'
import ServicesPage from '../components/services/ServicesPage.vue'
import BillingPage from '../components/billing/BillingPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/contracts',
    name: 'contracts',
    component: ContractsPage
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: InventoryPage
  },
  {
    path: '/residents',
    name: 'residents',
    component: ResidentsPage
  },
  {
    path: '/checkinout',
    name: 'checkinout',
    component: CheckInOutPage
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage
  },
  {
    path: '/billing',
    name: 'billing',
    component: BillingPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
