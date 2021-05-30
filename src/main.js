import Vue from 'vue'
import Playground from './demo/playground.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Playground),
}).$mount('#app')
