// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from 'vuestic-ui/src/services/ColorThemePlugin'
import store from '../store/index'
import router from '../router/index'
import VuesticPlugin from 'vuestic-ui/src/components/vuestic-plugin'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import '../metrics'

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)

Vue.use(ColorThemePlugin,
  {
    // Add or change theme colors here
    themes: {
      primary: '#e18a10',
      // blurple: '#7289DA',
    },
  })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})
// Dev server
// axios.defaults.baseURL = 'http://172.16.0.187:8001/api'

// Production server
axios.defaults.baseURL = 'http://localhost:8008/api'
/* axios.defaults.baseURL = 'http://localhost:60749/api' */
axios.defaults.headers.common['id'] = localStorage.getItem('userId')
axios.defaults.headers.common['token'] = localStorage.getItem('token')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
