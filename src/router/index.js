import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectList from '../pages/ProjectList.vue'
import SingleProject from '../pages/SingleProject.vue'
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
      path: '/projects',
      name: 'projects',
      component: ProjectList
    },
    {
      path: '/post/:slug',
      name: 'project',
      component: SingleProject
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
