import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
import vmodal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(vmodal);
Vue.use(BootstrapVue)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
