import { createRouter, createWebHistory } from 'vue-router';
import homePage from './components/pages/homePage.vue'
import LoginPage from './components/pages/auth/LoginPage.vue'
import RegisterPage from './components/pages/auth/RegisterPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home' ,component:homePage , alias: '/' } ,
        {path: '/login' , component:LoginPage},
        {path: '/register' , component:RegisterPage}
    ]

})
export default router;  