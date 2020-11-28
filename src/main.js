/*
 * @Description: 入口js
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:00
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-22 17:18:43
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'


import { Picker, Popup , Button, Toast  } from 'vant';
Vue.use(Popup)  
   .use(Button)
   .use(Picker)
   .use(Toast)

  console.log(process.env.VUE_APP_BASE_URL)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
