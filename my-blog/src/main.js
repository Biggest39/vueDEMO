// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
// 自定义指令
// Vue.directive('check',{
//   bind(el,binding,vnode){
//     if(binding.value==true){
//       el.style.maxWidth="560px";
//     }else {
//       el.style.maxWidth="800px";
//     }
//   }
// })

//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
