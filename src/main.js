import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.component('multiselect', Multiselect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
