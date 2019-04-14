import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      component: () => import('@/layouts/Default.vue'),
      children: [ 
        { path: '', name: 'Landing', component: () => import('@/views/Components.vue') },
        { path: '/landing', name: 'landing', component: () => import('@/views/Landing.vue') },
        { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
        { path: '/register', name: 'register', component: () => import('@/views/Register.vue') },
        { path: '/profile', name: 'submitted', component: () => import('@/views/Profile.vue') }
      ]
    }

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
