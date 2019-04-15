import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import('@/layouts/Default.vue'),
      children: [ 
        { path: '', name: 'Landing', component: () => import('@/views/Components.vue') },
        // { path: '/landing', name: 'landing', component: () => import('@/views/Landing.vue') },
        // { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
        // { path: '/register', name: 'register', component: () => import('@/views/Register.vue') },
        // { path: '/profile', name: 'submitted', component: () => import('@/views/Profile.vue') }
      ]
    },
    {
      path: "/play",
      component: () => import('@/layouts/DefaultWithSideNav.vue'),
      children: [ 
        { path: '', name: 'play', component: () => import('@/views/Play.vue') },
        
      ]
    },


  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
