// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//глобально инициализировать
// import List from './components/List' -  если глобально делаем

Vue.config.productionTip = false

// Vue.component('List', List) -  если глобально делаем 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
