/*
 * @Description: vue配置文件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-22 16:44:07
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-22 17:17:39
 */
module.exports = {
    devServer: {
        host: '0.0.0.0', // 允许外部ip访问
        open: true, //设置自动打开浏览器
        port: 8989, //设置端口
        compress: true,
		disableHostCheck: true, //webpack4.0 开启热更新
        proxy: {
            //设置代理
            '/api': {
                target: 'xxx', // 接口的域名
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                secure: false, // 如果是https接口，需要配置这个参数
                pathRewrite: { // 如果接口本身没有/api需要通过pathRewrite来重写接口地址
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        // 配置使用 autoprefixer
                        overrideBrowserslist: ["last 15 versions"]
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 100, // 换算的基数 75
                        // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                        //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                        selectorBlackList: [".van"], // 过滤掉.van-开头的class，不进行rem转换
                        propList: ["*"],
                        exclude: /node_modules/
                    })
                ]
            }
        }
    }

}