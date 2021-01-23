/*
 * @Description: 路由配置文件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:00
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-23 15:44:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载 webpackChunkName如果一样就打成一个js文件不一样就打成多个文件
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "vantTest" */ '../views/vantTest.vue')
  },
  {
    path: '/vantTest',
    name: 'vantTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vantTest" */ '../views/vantTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
