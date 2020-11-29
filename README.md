<!--
 * @Description: 项目注释
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:25
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-29 21:59:26
-->
# vantpro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue移动端项目架构  vue-cli4.x + vant + vuex + vue-router + axios  

### 移动端注意事项
### 适配
安装： npm install lib-flexible -S  /  cnpm install lib-flexible -S
在main.js中引入lib-flexible：import 'lib-flexible'
既然引入的lib-flexible，则会自动调整视图窗口，所以需要把原始在index.html里的<meta name="viewport" content="width=device-width,initial-scale=1.0">注释掉

vue-cli4.x 适配和自动转rem插件
npm i amfe-flexible -S / cnpm i amfe-flexible -S
npm i postcss-pxtorem -D  / cnpm i postcss-pxtorem -D

### vue.config.js
css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ["last 15 versions"] 
          }),
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: ["ig"], // 过滤掉.am-开头的class，不进行rem转换
            propList: ["*"],
            exclude: /node_modules/
          })
        ]
      }
    }
  }

### 或者在package.json中添加以下配置 自动px转rem
  "postcss": {
   "plugins": {
    "autoprefixer": {},
    "postcss-pxtorem": {
           "rootValue": 75, // 设计稿宽度的1/10（注： package.json中不允许添加注释）
           "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    }
},

### 调试工具
cdn地址
<script src="https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js"></script>
npm/cnpm安装
npm install vconsole -S  / cnpm install vconsole -S
var vConsole = new VConsole();
console.log('Hello world');

### 转码
npm install babel-polyfill -S  / cnpm install babel-polyfill -S
main.js引入：import 'babel-polyfill';
在webpack中的entry入口中：entry:['babel-polyfill','./src/main.js']

# api层 axios
npm install axios -S /  cnpm install axios -S
CDN地址：
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>


### 项目优化
快、小、省
缓存

// 缓存架构
// 1.缓存不能有两个
// 2.缓存区域的权限
// 3.缓存的问题  (1) 缓存的更新问题
// js内存 x64 1.4g x86 0.7g
if(!window.httpCaches){
  window.httpCaches = (function(){
    var cache = {};
    var cacheArr = []; // 存放缓存的数量
    return {
      get(api){
        return new Promise((resolve,reject) => {
          if (cache[api]){
            resolve(cache[api])
          } else {
            this.set(api).then(res => {
              // 自定义缓存数量大于多少条
              if(cacheArr.length > 10){
                var _name = cacheArr.shift() // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
                this.remove(_name)
              }
              cache[api] = res;
              cacheArr.push(api)
              resolve(res);
            })
          }
        })
      },
      set(api){
        return axios.get(api)
      },
      remove(){
        
      }
    }

  })()
}

### 项目打包 环境命令配置
本地
测试
生产
package.json文件加上：对应的打包命令
"build-dev": "vue-cli-service build --mode development",
"build-test": "vue-cli-service build --mode test",
"build-prod": "vue-cli-service build --mode production"

### webpack热更新失效  如果没有则 安装依赖 webpack-dev-server  npm install --save-dev webpack-dev-server / cnpm install --save-dev webpack-dev-server 
vue.config.js文件里面配置
devServer: {
	compress: true,
	disableHostCheck: true, //webpack4.0 开启热更新
}
"serve": "vue-cli-service serve && webpack-dev-server --open"

### npm代理设置1--常用1
npm config set registry "http://registry.npmjs.org/"

### npm代理设置2--常用2
npm config set registry https://registry.npm.taobao.org