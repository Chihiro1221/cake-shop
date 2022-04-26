<template>
  <view class="hoem-title padding flex align-center justify-between bg-white">
    <view class="meta flex align-center">
      <view class="icon"><view class="iconfont icon-canju"></view></view>
      <view class="content margin-left">
        <view class="title text-32 text-black">{{ title }}</view>
        <view class="subtitle text-18 text-gray">{{ subtitle }}</view>
      </view>
    </view>
    <view class="english-title text-28">{{ englishTitle }}</view>
  </view>
</template>

<script>
export default {
  name: 'home-title',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    englishTitle: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.icon {
  .iconfont {
    font-size: 50upx;
  }
}
</style>
