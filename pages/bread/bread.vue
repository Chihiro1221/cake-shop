<template>
  <view class="bread-container flex">
    <view class="title" @click="sendBread">蛋糕</view>
    <view class="">购物车</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendBread() {
      uni.$emit('sendBread', { data: '草莓蛋糕' });
    }
  }
};
</script>

<style lang="scss"></style>
