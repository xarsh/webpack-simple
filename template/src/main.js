import 'babel-polyfill'
import Vue from 'vue'

const app = new Vue({
  render: h => h(require('./app.vue').default)
})

app.$mount('#app')
