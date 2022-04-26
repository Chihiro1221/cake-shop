<template>
  <view class="cake-item">
    <view class="cover"></view>
    <div class="content">
      <view class="flex align-center justify-between">
        <view>
          <view class="text-32">精选月半蕉</view>
          <view class="text-18">Banane demi-lune</view>
        </view>
        <view class="cart margin-right-sm"><i class="iconfont icon-cart"></i></view>
      </view>
      <view class="price">
        <text class="text-16">￥</text>
        19.90
      </view>
    </div>
  </view>
</template>

<script>
export default {
  name: 'good-item',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
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
      margin-top: 20upx;
      margin-bottom: 15upx;
    }
    .text-18 {
      margin-bottom: 15upx;
    }
    .price {
    }
    .cart {
      width: 60upx;
      height: 60upx;
      background-color: #fae456;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24upx;
      }
    }
  }
}
</style>
