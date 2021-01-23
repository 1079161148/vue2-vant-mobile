<!--
 * @Description: vant测试
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 10:16:50
 * @LastEditors: lhl
 * @LastEditTime: 2021-01-23 22:17:21
-->
<template>
  <div class="vant-wrap">
    <div class="title more-txt-ellipsis">你好333333333333333333</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </div>
</template>

<script>

export default {
    components:{
        
    },
    data(){
        return {
            value: ''
        }
    },
    methods:{
       
    }
}
</script>

<style lang="less" scoped>
.title{
  width: 100px;
	font-size: 18px;
	color: @red;
}

// 更改UI样式
.vant-wrap /deep/ .van-button {
	height: 28px;
}
</style>