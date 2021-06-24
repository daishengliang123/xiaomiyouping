import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '@/views/index.vue';
import Login from '@/views/login.vue';

// import home from '@/views/home/home.vue';
// import classification from '@/views/classification/classification.vue';
// import shopcart from '@/views/shopcart/shopcart.vue';
// import mine from '@/views/mine/mine.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        redirect: '/home',
        children:[
            {
                path:'home',
                name:'home',
                component: () => import('@/views/home/home.vue')
            },
            {
                path:'classification',
                name:'classification',
                component: () => import('@/views/classification/classification.vue')
            },
            {
                path:'shopcart',
                name:'shopcart',
                component: () => import('@/views/shopcart/shopcart.vue')
            },
            {
                path:'mine',
                name:'mine',
                component: () => import('@/views/mine/mine.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router