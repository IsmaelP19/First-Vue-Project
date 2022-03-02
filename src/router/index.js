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
      redirect: { name: "entrantes" },

      children: [
        {
          path: 'entrantes',  
          name: 'entrantes',
          component: EntrantesView
          
        },

        {
          path: 'pizzas',  
          name: 'pizzas',
          component: EntrantesView
        },
        {
          path: 'pastas',  
          name: 'pastas',
          component: EntrantesView
        },
        {
          path: 'hamburguesas',  
          name: 'hamburguesas',
          component: EntrantesView
        },
        {
          path: 'sandwiches',  
          name: 'sandwiches',
          component: EntrantesView
        },
        {
          path: 'turca',  
          name: 'comida turca',
          component: EntrantesView
        },
        {
          path: 'ensaladas',  
          name: 'ensaladas',
          component: EntrantesView
        },
        {
          path: 'carnes',  
          name: 'carnes',
          component: EntrantesView
        },
        {
          path: 'baguettes',  
          name: 'baguettes',
          component: EntrantesView
        },
        {
          path: 'bocatas',  
          name: 'bocatas',
          component: EntrantesView
        },
        {
          path: 'montaditos',  
          name: 'montaditos',
          component: EntrantesView
        },
        {
          path: 'menus',  
          name: 'menús',
          component: EntrantesView
        },
        {
          path: 'refrescos',  
          name: 'refrescos',
          component: EntrantesView
        },
        {
          path: 'postres',  
          name: 'postres',
          component: EntrantesView
        },



      ]
    }
    
  ]
})

export default router
