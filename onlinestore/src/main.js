import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style/headerStyle.scss"
import "@/assets/style/homePageStyle.scss"
import "@/assets/style/questionPageStyle.scss"
import "@/assets/style/catalogPageStyle.scss"
import "@/assets/style/checklistCartPageStyle.scss"


createApp(App).use(store).use(router).mount('#app')
