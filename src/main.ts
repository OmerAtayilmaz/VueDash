import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory} from 'vue-router';
import { routes } from './router/routes';
import "@/index.css";
import axios from 'axios';

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
});

router.beforeEach(async (to,from,next) => {
    if(to.meta.requiresAuth){
        console.log("giriş yapılmadan ulaşılamayacak bir route!");
        const token = localStorage.getItem('token');
        if (token) {
            try{
                const res = await axios.post("http://localhost/api/v1/user/verify-token",{
                    token: token
                });

                if(res.data.status === 'success')
                    next();
                else
                    next('/');
        
            }catch(err){
                console.error(err);
                next('/');
            }

          next();
        } else {
          // Geçersiz ise login sayfasına at
          next('/');
        }

    }else{
        console.log("herkese açık route");
        next();
    }
})
const app = createApp(App);
app.use(router);
app.mount('#app')
