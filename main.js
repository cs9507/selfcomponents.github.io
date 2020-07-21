import Vue from "vue";
import './mycomponents/css/main.css'
import  components  from './mycomponents/mycomponents.min.js'
Vue.use(components)
import App from './App.vue'
console.log(components)

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount("#app");
