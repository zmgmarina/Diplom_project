import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';
import ArticlePage from '@/pages/ArticlePage.vue';
import QuestionPage from '@/pages/QuestionPage.vue';
import AccountPage from '@/pages/AccountPage.vue';
import CheckListCartPage from '@/pages/CheckListCartPage.vue';
import CartPage from '@/pages/CartPage.vue'



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
    path: '/article',
    name: 'article',
    component: ArticlePage
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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
