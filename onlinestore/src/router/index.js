import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';
import QuestionPage from '@/pages/QuestionPage.vue';
import AccountPage from '@/pages/AccountPage.vue';
import CheckListCartPage from '@/pages/CheckListCartPage.vue';
import CartPage from '@/pages/CartPage.vue';
import CheckList from '@/pages/CheckList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage
  },
  
  {
    path: '/question',
    name: 'question',
    component: QuestionPage
  },
   {
    path: '/account',
    name: 'account',
    component: AccountPage
  },
  {
    path: '/checklistcart',
    name: 'checklistcart',
    component: CheckListCartPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
   {
    path: '/checklist',
    name: 'checklist',
    component: CheckList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
