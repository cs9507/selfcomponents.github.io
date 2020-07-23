import Vue from "vue";
import App from './App.vue'
import { Modal } from 'ant-design-vue';
Vue.use(Modal)

console.log(Modal)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount("#app");
