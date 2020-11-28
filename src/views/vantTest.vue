<!--
 * @Description: vant测试
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-21 10:16:50
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-22 21:47:10
-->
<template>
  <div>
    <div class="title" @click="showUp">你好</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <popUpPicker :columns="['java','js','vue']"  @changeValue="handelChange" ref="popup" :showPicker="showPicker" @close="handelChange"/>
  </div>
</template>

<script>
import popUpPicker from '@/components/popUpPicker'

export default {
    components:{
        popUpPicker
    },
    data(){
        return {
            showPicker: false
        }
    },
    methods:{
       showUp(){
           this.showPicker = true;
           console.log(this.$refs.popup)
       },
       handelChange(val){
           this.showPicker = false;
           console.log(val,'val')
       }
    }
}
</script>

<style lang="scss" scoped>
.title{
    font-size: 38px;
    width: 400px;
}

</style>