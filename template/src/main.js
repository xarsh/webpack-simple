import 'babel-polyfill'

import Vue from 'vue'
import App from './app.vue'

const app = new Vue({
  el: '#app',
  render: h => h(App)
})

app.$mount('#app')
