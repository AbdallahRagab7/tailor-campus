import { createRouter, createWebHistory } from 'vue-router';
import homePage from './pages/home/homePage.vue'
import LoginPage from './pages/auth/LoginPage.vue'
import RegisterPage from './pages/auth/RegisterPage.vue'
import coursesPage from './pages/coursesStore/coursesPage.vue'
import coursePage from './pages/course/CoursePage.vue'
import instructorsPage from './pages/instructors/instructorsPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home' ,component:homePage , alias: '/' } ,
        {path: '/login' , component:LoginPage},
        {path: '/register' , component:RegisterPage} ,
        {path:'/courses' , component:coursesPage} ,
        {path:'/instructors' , component:instructorsPage} ,
        { name: 'course', path: '/course/:courseId', component:coursePage , props:true },
        
    ]

})
export default router;  