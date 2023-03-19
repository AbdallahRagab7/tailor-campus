import { createRouter, createWebHistory } from 'vue-router';
import homePage from './components/pages/homePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home' ,component:homePage , alias: '/' }
    ]

})
export default router;  