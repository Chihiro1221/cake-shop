<template>
  <view class="personal-container">
    <view class="box-bottom"></view>
    <view class="card">
      <view class="card-box radius flex flex-direction align-center">
        <view class="card-avatar flex flex-direction align-center">
          <image class="avatar margin-bottom" src="../../static/logo.png" mode=""></image>
          <view class="name">张三丰</view>
        </view>
        <view class="card-content flex justify-around padding">
          <view v-for="(item, index) of navs" :key="index" class="icon-item flex flex-direction align-center">
            <i :class="['iconfont', item.icon]"></i>
            <text>{{ item.title }}</text>
          </view>
        </view>
        <view class="card-content flex justify-around padding">
          <view v-for="(item, index) of navs" :key="index" class="icon-item flex flex-direction align-center">
            <i :class="['iconfont', item.icon]"></i>
            <text>{{ item.title }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          title: '我的订单',
          icon: 'icon-order_fill'
        },
        {
          title: '待收货',
          icon: 'icon-31daishouhuo'
        },
        {
          title: '代付款',
          icon: 'icon-daifukuan'
        },
        {
          title: '会员等级',
          icon: 'icon-huiyuan'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
page {
  background-color: #fff;
}
.box-bottom {
  background-color: #f0f0f0;
  height: 400upx;
}
.personal-container {
  .card {
    padding: 0 15upx;
    position: absolute;
    width: 100%;
    top: 200upx;
    box-sizing: border-box;
    .card-box {
      background-color: #fff;
      .card-avatar {
        transform: translateY(-75upx);
        .avatar {
          width: 150upx;
          height: 150upx;
          border: 4upx solid #cccecd;
          border-radius: 50%;
        }
      }
      .card-content {
        width: 100%;
      }
      .iconfont {
        font-size: 50upx;
        color: #949494;
      }
    }
  }
}
</style>
