import GuestView from '@/views/GuestView.vue';
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ServicesView from '@/views/ServicesView.vue';
import SettingsView from '@/views/SettingsView.vue';

export const routes = [
    {
      path:'/',
      name: 'guest',
      component:GuestView,
      meta: { requiresAuth: false}  
    },
    {
        path: '/services',
        name:'services',
        component:ServicesView,
        meta:{ requiresAuth: false,}
    },
    {
        path:'/login',
        name:'login',
        component:LoginView,
        
            meta: {
                requiresAuth:false
            }
        
    },
    {
        path:'/home',
        name:'home',
        component:HomeView,
        meta: {
            requiresAuth:true
        }
    },{
        path: '/settings',
        name: 'settings',
        component:SettingsView,
        meta: {
            requiresAuth: true
        }
    }
];