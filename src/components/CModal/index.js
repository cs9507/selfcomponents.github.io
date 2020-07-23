import modal from './index.vue'

modal.install = Vue => {
    Vue.component(modal.name, modal)
  }
export default modal
