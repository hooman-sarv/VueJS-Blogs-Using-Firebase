import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './Routes/Routes'

Vue.use(VueResource);
Vue.use(VueRouter);


const myRouter = new VueRouter({
  routes: Routes,
  mode:'history'
})

//custom directive

// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color = '#' + Math.random().toString().slice(2,8);
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value === 'wide') {
      el.style.maxWidth = "1200px";
    }
    else if (binding.value === 'narrow') {
        el.style.maxWidth = "500px";
    }
    if (binding.arg === 'column') {
        el.style.background = '#ddd';
        el.style.padding = '20px';
    }
  }
})

//Filters

// Vue.filter('toUpperCase' , function(value){
//   return value.toUpperCase()
// })

Vue.filter('minifyText' , function(value){
    return value.slice(0,100).concat('...');
})

export const bus = new Vue()
new Vue({
  el: '#app',
  render: h => h(App),
  router:myRouter
})
