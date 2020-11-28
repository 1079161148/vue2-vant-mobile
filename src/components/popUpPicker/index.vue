<!--
 * @Description: 封装组件
 * @Version: 2.0
 * @Autor: lhl
 * @Date: 2020-11-22 17:19:30
 * @LastEditors: lhl
 * @LastEditTime: 2020-11-22 21:46:06
-->
<template>
  <div class="popup-pciker-wrap">
    <van-popup
      v-model="isPicker"
      round
      position="bottom"
      closeable
      close-icon="close"
      close-icon-position="top-left"
      @close="close"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="cancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    showPicker: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    isPicker (val) {
      !val && this.$emit('changeValue')
    },
    showPicker (val) {
      this.isPicker = val
    }
  },
  data () {
    return {
      isPicker: false
    }
  },
  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.$emit('changeValue',value)
    },
    cancel() {
        this.$emit('changeValue')
    },
    close(){
        // this.$emit('close')
    }
  },
}
</script>

<style>
.van-picker__cancel{
    visibility: hidden;
}

</style>
