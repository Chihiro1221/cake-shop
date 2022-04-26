<template>
  <view class="flex flex-direction align-center margin-top-lg">
    <button type="default" @tap="loadOriginalCategories()">转录分类</button>
    <button type="default" @tap="loadOriginalGoods()">转录商品</button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    // this.loadOriginalCategories();
  },
  methods: {
    loadOriginalCategories() {
      uni.showLoading({
        title: '录入中...'
      });
      // 获取原网站数据
      uni.request({
        url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=641',
        header: {
          'access-token': 'c9335bc9cc99b8892db9463c3b4d59ba',
          version: 'v1.0'
        },
        async success({ data }) {
          // 转换数据格式
          const requests = data.data.map(item => ({
            method: 'POST',
            path: '/1.1/classes/category',
            body: item
          }));
          // 录入到leanCloud
          const res = await uni.$http.post('batch', {
            requests
          });
          if (res) {
            uni.showToast({
              title: '录入成功!'
            });
          }
          uni.hideLoading();
        }
      });
    },
    loadOriginalGoods() {
      uni.showLoading({
        title: '录入中...'
      });
      // 获取原网站数据
      uni.request({
        url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=641&page=1&bid=1',
        header: {
          'access-token': 'c9335bc9cc99b8892db9463c3b4d59ba',
          version: 'v1.0'
        },
        async success({ data }) {
          console.log(data);
          // 转换数据格式
          const requests = data.data.list.map(item => {
            item.weight = item.weight ? item.weight : '0g';
            return {
              method: 'POST',
              path: '/1.1/classes/good',
              body: item
            };
          });
          // 录入到leanCloud
          const res = await uni.$http.post('batch', {
            requests
          });
          if (res) {
            uni.showToast({
              title: '录入成功!'
            });
          }
          uni.hideLoading();
        }
      });
    }
  }
};
</script>

<style></style>
