import component1 from './index.vue'

component1.install = Vue => {
    Vue.component(component1.name, component1)
  }
export default component1