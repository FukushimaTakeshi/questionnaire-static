import Vue from 'vue';
import Router from 'vue-router'

import Question from './Question.vue'
import Auth from './Auth.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Question
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})