import {createRouter, createWebHistory} from "vue-router"
import Main from "../components/Main.vue"
import History from "../components/History.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          name: 'Main',
          component: Main
      },
      {
          path: '/history',
          name: 'History',
          component: History
      },
      
  ]
})

export default router;