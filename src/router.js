import { createRouter, createWebHistory } from 'vue-router';
import homePage from './pages/home/homePage.vue'
import LoginPage from './pages/auth/LoginPage.vue'
import RegisterPage from './pages/auth/RegisterPage.vue'
import coursesPage from './pages/courses/coursesPage.vue'
import coursePage from './pages/courseDetails/CoursePage.vue'
import instructorsPage from './pages/instructors/instructorsPage.vue'
import instructorDeatils from './pages/instructorDetails/instructorPage.vue'
import cartPage from './pages/cart/cartPage.vue'
import createCourse from './pages/createCourse/createCourse.vue'
import viewCourse from './pages/viewCourse/viewCourse.vue'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home' ,component:homePage , alias: '/' } ,
        {path: '/login' , component:LoginPage},
        {path: '/register' , component:RegisterPage} ,
        {path:'/courses' , component:coursesPage} ,
        {path:'/instructors' , component:instructorsPage} ,
        {name: 'course', path: '/course/:courseId', component:coursePage , props:true },
        {name: 'instructor' , path: '/instructor/:instructorId' , component: instructorDeatils},
        {name: 'cart' , path: '/cart', component:cartPage},
        {name: 'createCourse' , path: '/createCourse', component:createCourse},
        {name: 'viewCourse' , path :'/course/:courseId/:lectureId', component:viewCourse}
        
    ]

})
export default router;  