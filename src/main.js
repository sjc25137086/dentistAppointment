import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css'; 
import { Popup } from 'mint-ui';

Vue.component(Popup.name, Popup)
Vue.use(Mint);
Vue.prototype.moment = moment;

Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
