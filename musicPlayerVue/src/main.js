/* eslint-disable import/order */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';


Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
