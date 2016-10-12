// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routers'
import store from './store/store'
// import {Checkbox} from 'element-ui'
// Vue.component(Checkbox.name, Checkbox);

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element);

Vue.use(VueRouter);

let router = new VueRouter({ routes });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
