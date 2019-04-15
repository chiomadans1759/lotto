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
        { path: '/not-found', name: 'not-found', component: () => import('@/views/NotFound.vue') },
        { path: '/dashboard-result', name: 'dashboard-result', component: () => import('@/views/DashboardResult.vue') }
      ]
    },
    {
      path: "/play",
      component: () => import('@/layouts/DefaultWithSideNav.vue'),
      children: [ 
        { path: '', name: 'play', component: () => import('@/views/HowToPlay.vue') },
        
      ]
    },
    {
      path: "/dashboard",
      component: () => import('@/layouts/UserDashBoard.vue'),
      children: [ 
        { path: '', name: 'dashboard', component: () => import('@/views/Dashboard.vue') },
        
      ]
    },


  ]
});
