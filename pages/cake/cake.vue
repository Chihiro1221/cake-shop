<template>
  <view>
    <!-- navbar模块 -->
    <CustomNav />
    <view class="cake-container">
      <GoodItem :good="item" v-for="item of goods" :key="item.objectId" />
    </view>
    <!-- tabbar模块 -->
    <view class="tabbar padding">
      <view @tap="handleTab(tab)" v-for="(tab, index) of tabbar" :key="index" class="item">
        <view class="text-32">{{ tab.title }}</view>
        <u-line
          v-if="index !== tabbar.length - 1"
          direction="col"
          lineColor="red"
          margin="30upx"
          color="#777"
          length="20upx"
        ></u-line>
      </view>
    </view>
    <!-- 弹出层模块 -->
    <u-popup :show="show" mode="left" @close="close">
      <scroll-view scroll-y="true">
        <view class="popup-container">
          <view
            v-for="(cate, index) of categories"
            :key="cate.objectId"
            class="item u-border-bottom"
          >
            <view class="title padding u-border-bottom">{{ cate.bname }}</view>
            <view v-if="!index" class="subtitle padding">
              <view @tap="listActive = !listActive" class="u-border-bottom padding-bottom">
                口味筛选
              </view>
              <view v-if="listActive" class="type">
                <u-cell
                  v-for="(scate, sindex) of cate.list"
                  :key="sindex"
                  isLink
                  :title="scate.tname"
                ></u-cell>
              </view>
              <view
                @tap="sceneActive = !sceneActive"
                class="margin-top u-border-bottom padding-bottom"
              >
                场景筛选
              </view>
              <view v-if="sceneActive" class="type">
                <u-cell
                  v-for="(scate, sindex) of cate.scene"
                  :key="sindex"
                  isLink
                  :border="sindex !== cate.scene.length - 1"
                  :title="scate.tname"
                ></u-cell>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      goods: [],
      page: 0,
      tabbar: [
        { title: '分类' },
        { title: '蛋糕', bcid: 1 },
        { title: '面包', bcid: 11 },
        { title: '小食', bcid: 6 },
        { title: '购物车', target: '/pages/cart' }
      ],
      // condiction: {
      //   bcid: 1
      // },
      show: false,
      categories: [],
      listActive: false,
      sceneActive: false
    };
  },
  computed: {
    condition() {
      return this.$store.state.condition.data;
    }
  },
  async onLoad() {
    this.goods = await this.loadGoods();
    this.loadCategories();
  },
  async onPullDownRefresh() {
    this.page = 0;
    this.goods = await this.loadGoods();
    uni.stopPullDownRefresh();
  },
  async onReachBottom() {
    const goods = await this.loadGoods();
    if (!goods.length) {
      return uni.showToast({
        title: '已经到底了',
        icon: 'none'
      });
    }
    this.goods = this.goods.concat(goods);
    this.page++;
  },
  methods: {
    async loadGoods() {
      const skip = this.page * 8;
      const { results } = await uni.$http.get(
        `classes/good?where=${JSON.stringify(this.condition)}&limit=8&skip=${skip}`
      );
      this.page++;
      return results;
    },
    async loadCategories() {
      const { results } = await uni.$http.get('classes/category');
      this.categories = results;
    },
    close() {
      this.show = false;
    },
    gotoDetail(id) {
      uni.navigateTo({
        url: `../detail/detail?id=${id}`
      });
    },
    async handleTab(tab) {
      if (!tab.bcid && !tab.target) {
        this.show = true;
      }
      if (tab.bcid) {
        // this.condiction.bcid = tab.bcid;
        this.$store.commit('condition/changeCondition', { bcid: tab.bcid });
        this.page = 0;
        this.goods = await this.loadGoods();
      }
    }
  }
};
</script>

<style lang="scss">
.scroll-container {
  height: 100vh;
}
.cake-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 15upx;
  padding-bottom: 150upx;
  padding-top: 130upx;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20upx rgba(0, 0, 0, 0.2);
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.popup-container {
  width: 400upx;
  height: 100vh;
}
</style>
