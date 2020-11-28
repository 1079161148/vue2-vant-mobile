/*
 * @Description: 对于使用 babel7 的用户，可以在 babel.config.js 中配置
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 09:08:00
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-21 10:13:13
 */
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
