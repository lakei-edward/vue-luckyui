import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import luckyui from './index';
Vue.use(luckyui);
new Vue({
  render: (h) => h(App)
}).$mount('#app');
