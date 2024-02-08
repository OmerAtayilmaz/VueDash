import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

export const routes = [
    {
        path:'/',
        name:'login',
        component:LoginView
    },
    {
        path:'/home',
        name:'home',
        component:HomeView,
        meta: {
            requiresAuth:true
        }
    }
];