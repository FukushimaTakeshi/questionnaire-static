import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
