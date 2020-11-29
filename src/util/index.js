/*
 * @Description: 工具类方法
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-29 21:47:22
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-29 23:06:55
 */
// 邮箱
export const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 手机号码
export const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

// 电话号码
export const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

export const ua = navigator.userAgent.toLowerCase();

// 是否是微信浏览器
export const isWeiXin = () => {
    return ua.match(/microMessenger/i) == 'micromessenger'
}

// 是否是移动端
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

// 是否为PC端
export const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 是否ios
export const isIos = () => {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
        return false
    } else if (u.indexOf('iPhone') > -1) { //苹果手机
        return true
    } else if (u.indexOf('iPad') > -1) { //iPad
        return false
    } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
        return false
    } else {
        return false
    }
}

// 去除html标签
export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}

// 随机数范围
export const random = (min, max) => {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null;
    }
}

// 求最大值
export const max = (arr) => {
    return Math.max.apply(null, arr);
}

// 求最小值
export const min = (arr) => {
    return Math.min.apply(null, arr);
}

// 求和
export const sum = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}

// 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

// 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
export const changeCase = (str, type) => {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

// 获取地址栏携带的参数
export const getUrlParam = (name) => {
    let reg = new RegExp('(^|&)' + name + '=([^&|^#]*)(#|&|$)', 'i');
    let r = window.location.href.match(reg);
    if (r != null) return decodeURIComponent(r[2]).replace("#", '');
    return null
}


// 获得设备类型 1：安卓 ; 2：IOS
export const getDevicesType = () => {
    var devicesType = 0;
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; // android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        devicesType = 1;
    } else if (isiOS) {
        devicesType = 2;
    }
    return devicesType;
}

// localStorage 设置  sessionStorage 一样处理不再赘述
export const localStorageSet = (key, value) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key, value)
}


// localStorage 获取
export const localStorageGet = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// localStorage 移除
export const localStorageRemove = (key) => {
    localStorage.removeItem(key)
}

// localStorage 存贮某一段时间失效
export const localStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key, value)
    setTimeout(() => {
        localStorage.removeItem(key)
    }, expire)
}


/**
 * cookie 设置
 * @param {String} key  属性
 * @param {*} value  值
 * @param String expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
    const d = new Date()
    d.setDate(d.getDate() + expire)
    document.cookie = `${key}=${value};expires=${d.toGMTString()}`
}

/**
 * cookie 获取
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
    const cookieStr = unescape(document.cookie)
    const arr = cookieStr.split('; ')
    let cookieValue = ''
    for (var i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=')
        if (temp[0] === key) {
            cookieValue = temp[1]
            break
        }
    }
    return cookieValue
}

/**
 * cookie 删除
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
}

/**
 * 判断字符是否包含某值  或者使用 indexOf 方法
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
    return str.includes(value)
  }