/*
 * @Description: axios二次封装
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-22 16:15:13
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-22 17:13:18
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // 环境变量里面读取对应的 host
    timeout: 10000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间) 如果请求话费了超过 `timeout` 的时间，请求将被中断
});

// 全局配置
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance