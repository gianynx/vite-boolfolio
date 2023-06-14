import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ItemList from '../pages/ItemList.vue'
import SingleItem from '../pages/SingleItem.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contacts from '../pages/Contacts.vue'
import NotFound from '../pages/NotFound.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/items',
      name: 'items',
      component: ItemList
    },
    {
      path: '/item/:slug',
      name: 'item',
      component: SingleItem
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound
    }
  ]
})

export default router
