<template>
  <scroll-view
    class="scroll-container"
    :scroll-top="scrollTop"
    scroll-with-animation
    scroll-y="true"
    @scroll="handleScroll"
  >
    <view class="home-container">
      <CustomNav />
      <swiper
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="1000"
        indicator-active-color="#f5e67b"
      >
        <swiper-item v-for="item of banner" :key="item.objectId" @tap="gotoBannerDetail(item.link)">
          <view class="swiper-item">
            <image class="banner" :src="item.picture" mode=""></image>
          </view>
        </swiper-item>
      </swiper>
      <HomeTitle title="本季推荐" subtitle="seasonal Recommend" englishTitle="Seasonal" />
      <scroll-view scroll-x="true">
        <view class="home-scroll">
          <image src="../../static/images/recommend1.jpeg" mode="heightFix"></image>
          <image src="../../static/images/recommend2.jpg" mode="heightFix"></image>
          <image src="../../static/images/recommend3.jpg" mode="heightFix"></image>
        </view>
      </scroll-view>
      <HomeTitle title="法式经典" subtitle="french Recommend" englishTitle="French" />
      <image class="french" src="../../static/images/french.jpg" mode=""></image>
      <view class="goods flex flex-wrap align-center justify-between padding-xs">
        <GoodItem v-for="item of 4" :key="item" />
      </view>
      <view @tap="backTop" v-if="isShow" class="back-top">
        <i class="iconfont icon-arrowup"></i>
      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      scrollTop: 0,
      banner: []
    };
  },
  async onLoad() {
    this.loadBanner();
  },
  methods: {
    async loadBanner() {
      const { results } = await uni.$http.get('classes/banner');
      this.banner = results;
    },
    handleScroll({ detail }) {
      const { scrollTop } = detail;
      this.isShow = scrollTop > 500;
      this.scrollTop = scrollTop;
    },
    backTop() {
      this.scrollTop = 0;
    },
    gotoBannerDetail(link) {
      uni.navigateTo({
        url: `./banner-detail?link=${link}`
      });
    }
  }
};
</script>

<style lang="scss">
.scroll-container {
  height: 100vh;
}
swiper {
  height: 1000upx;
  swiper-item {
    height: 1000upx;
  }
}
.banner {
  height: 1000upx;
}
.home-scroll {
  white-space: nowrap;
  image {
    height: 290upx;
  }
}
.french {
  width: 100%;
  height: 390upx;
}
.back-top {
  width: 100upx;
  height: 100upx;
  background-color: #eee;
  box-shadow: 4upx 4upx 20upx rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: fixed;
  right: 20upx;
  bottom: 20upx;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 40upx;
  }
}
</style>
