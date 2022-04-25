<template>
  <div class="cake-container">
    <view v-for="item of 4" :key="item" class="cake-item">
      <view class="cover"></view>
      <div class="content">
        <view class="text-32">精选月半蕉</view>
        <view class="text-18">Banane demi-lune</view>
        <view class="price">
          <text class="text-16">￥</text>
          19.90
        </view>
      </div>
    </view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.cake-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 15upx;
  .cake-item {
    width: 350upx;
    margin-bottom: 30upx;
    .cover {
      background-color: #f5f5f5;
      width: 100%;
      height: 350upx;
    }
    .content {
      .text-32 {
        margin-top: 30upx;
        margin-bottom: 20upx;
      }
      .text-18 {
        margin-bottom: 20upx;
      }
      .price {
      }
    }
  }
}
</style>
