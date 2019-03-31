import Vue from 'vue';
// import {
//   MdDrawer,
//   MdToolbar,
//   MdList,
//   MdIcon,
// } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
