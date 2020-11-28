/*
 * @Description: 路由配置文件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:00
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-21 10:23:16
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
