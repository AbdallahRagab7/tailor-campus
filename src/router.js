import { createRouter, createWebHistory } from 'vue-router';
import homePage from './components/pages/homePage.vue'
import LoginPage from './components/pages/auth/LoginPage.vue'
import RegisterPage from './components/pages/auth/RegisterPage.vue'
import coursesPage from './components/pages/courses/coursesPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home' ,component:homePage , alias: '/' } ,
        {path: '/login' , component:LoginPage},
        {path: '/register' , component:RegisterPage} ,
        {path:'/courses' , component:coursesPage}
        
    ]

})
export default router;  