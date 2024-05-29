import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue' // Import Home component
import AddComponent from '../components/AddComponent.vue' // Import AddComponent

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeComponent // Correctly reference HomeComponent
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: AddComponent // Correctly reference AddComponent
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
