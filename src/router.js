import { createRouter, createWebHistory } from 'vue-router';
import homePage from './pages/home/homePage.vue'
import LoginPage from './pages/auth/LoginPage.vue'
import RegisterPage from './pages/auth/RegisterPage.vue'
import coursesPage from './pages/courses/coursesPage.vue'
import coursePage from './pages/courseDetails/CoursePage.vue'
import instructorsPage from './pages/instructors/instructorsPage.vue'
import instructorDeatils from './pages/instructorDetails/instructorPage.vue'
import cartPage from './pages/cart/cartPage.vue'
import wishlistPage from './pages/wishlist/wishlistPage.vue'
import createCourse from './pages/createCourse/createCourse.vue'
import viewCourse from './pages/viewCourse/viewCourse.vue'
import myLearning from './pages/myLearning/mylearningPage.vue'
import registerInstructor from './pages/registerInstructor/registerInstructor.vue'
import admin from './pages/admin/admin.vue'

import store from './store/index.js'




const router = createRouter({
    history: createWebHistory(),
    routes : [  
        {path: '/home' ,component:homePage , alias: '/' } ,

        {path: '/login' , component:LoginPage , meta:{requiresUnauth:true}},
        {path: '/register' , component:RegisterPage , meta:{requiresUnauth:true}} ,

        {path:'/courses' , component:coursesPage} ,
        {path:'/instructors' , component:instructorsPage} ,
        {name: 'course', path: '/course/:courseId', component:coursePage , props:true },
        {name: 'instructor' , path: '/instructor/:instructorId' , component: instructorDeatils},
        {name: 'cart' , path: '/cart', component:cartPage},
        {name: 'wishlist' , path: '/wishlist', component:wishlistPage},
        {name: 'createCourse' , path: '/createCourse', component:createCourse},
        {name: 'viewCourse' , path :'/course/:courseId/:lectureId', component:viewCourse},
        {name: 'myLearning' , path :'/myLearning', component:myLearning},
        {name: 'registerInstructor' , path :'/registerinstructor', component:registerInstructor},
        {name: 'admin' , path :'/admin', component:admin , meta:{requiresauth:true}},
        
    ]

});
router.beforeEach(function(to,  _, next){
    if (to.meta.requiresAuth && !store.getters.isAuthenticated){
    // next(false)
    next('/login')
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
    next('/home')
    }else if (to.meta.requiresauth && store.getters.role != 'admin') {
        next('/home')
    }
    
    else {
      next()
    }
    })


export default router;  