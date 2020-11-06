import { createRouter, createWebHistory } from 'vue-router'
import ListOfClasses from '../pages/ListOfClasses.vue'
import AddClasses from '../pages/AddClasses.vue'
import NotFound from '../pages/NotFound.vue'



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    
  { path: '/', redirect: '/ListOfClasses' },
  { path: '/ListOfClasses', component: ListOfClasses  },
  { path: '/AddClasses', component: AddClasses  },
  { path: '/:notFound(.*)', component: NotFound }

  ]
})

export default router
