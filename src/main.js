/*
 * @Description: 入口js
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:00
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-23 20:25:26
 */
import Vue from 'vue'
import App from './App.vue'
// 用来做离线缓存等任务的，实际上就是为Vue项目注册了一个service worker。这样的话，如果在线上，只要访问过一次该网站，以后即使没有网络也可以访问（此时使用的是之前缓存的资源）。
// 只在生产环境中有效（process.env.NODE_ENV === ‘production’）
import './registerServiceWorker'  
import router from './router'
import store from './store'
import 'amfe-flexible'
import FastClick from 'fastclick'
import VConsole from 'vconsole'; // 移动端调试工具
import 'babel-polyfill' // 转码 or 要么入口 在webpack中的entry入口中配置 entry:['babel-polyfill','./src/main.js']
import 'normalize.css/normalize.css' // reset浏览器自带样式
import '@/assets/style/index.less' // 自定义样式入口文件

// 点击300ms延迟
// 1、手动点击与真正触发click事件会存在300ms的延迟（ios上面最明显）
// 2、点击穿透问题（点击行为会穿透元素触发非父子关系元素的事件）
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false);
}

// vant-ui组件
import {
  Picker,
  Field,
  Button,
  Toast
} from 'vant';
Vue.use(Field )
  .use(Button)
  .use(Picker)
  .use(Toast)
  

console.log(process.env.VUE_APP_BASE_URL,'打印目前环境变量')

// 本地开发调试注入vConsole
const isDebug = process.env.NODE_ENV !== 'production'
if (isDebug) {
  new VConsole();
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')