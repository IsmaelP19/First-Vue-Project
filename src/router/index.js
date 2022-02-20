import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import MenuView from '../views/MenuView.vue'
import EntrantesView from '../views/EntrantesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      children: [
        {
          path: 'entrantes',  // /menu/entrantes
          name: 'entrantes',
          component: EntrantesView
        },
      ]
    }
    
  ]
})

export default router
