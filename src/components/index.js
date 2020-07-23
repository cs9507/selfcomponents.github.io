import component1 from './CModal'

const components = [
    component1
]


const install = function(Vue){
    components.forEach(component => {
        Vue.component(component.name, component);
      });
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }


  export default {
    version:'1.0',
    component1,
    install
  }
