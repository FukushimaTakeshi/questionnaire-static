// import 'babel-polyfill'
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import ja from 'vee-validate/dist/locale/ja.js'
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate, { locale: ja })
Validator.localize('ja', ja)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
