import Vue from "vue";
import Router from "vue-router"; 

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path:'/',
      component: () => import('@/layouts/Default.vue'),
      children: [ 
        { path: '', name: 'landing', component: () => import('@/views/Landing.vue') }, 
        { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
        { path: '/not-found', name: 'not-found', component: () => import('@/views/NotFound.vue') },
        { path: '/dashboard', name: 'dashboard', component: () => import('@/views/Dashboard.vue') },
        { path: '/dashboard-result', name: 'dashboard-result', component: () => import('@/views/DashboardResult.vue') },
        { path: '/how-to-play', name: 'how-to-play', component: () => import('@/views/HowToPlay.vue') }
      ]
    }
  ]
});
