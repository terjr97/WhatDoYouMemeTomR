import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import 'vanillatoasts/vanillatoasts.css';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
