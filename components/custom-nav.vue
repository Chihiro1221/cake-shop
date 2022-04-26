<template>
  <view class="cu-bar bg-white fixed">
    <view class="action">
      <text class="cuIcon-locationfill text-gray"></text>
      杭州市
    </view>
    <view class="content text-bold">MCAKE</view>
    <view class="action">
      <text class="cuIcon-search"></text>
      <u-line direction="col" lineColor="red" margin="20upx" color="#777" length="20upx"></u-line>
      <text class="cuIcon-sort"></text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'custom-nav',
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
