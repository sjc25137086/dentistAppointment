import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment';
import Mint from 'mint-ui';
<<<<<<< HEAD
import '../public/css/reset.css'
import 'mint-ui/lib/style.min.css';
=======
import 'mint-ui/lib/style.css'; 
import '../public/css/reset.css'
import 'mint-ui/lib/style.min.css'; 
>>>>>>> 8ec6b1eb745d35af7e96c5a14524664088927923
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