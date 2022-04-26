<template>
  <view class="cake-container"><GoodItem v-for="item of 4" :key="item" /></view>
</template>

<script>
import ComponentTest from '../../components/component-test.vue';
export default {
  components: {
    ComponentTest
  },
  data() {
    return {};
  },
  methods: {
    gotoDetail(id) {
      uni.navigateTo({
        url: `../detail/detail?id=${id}`
      });
    }
  },
  onLoad() {
    console.log(123);
  },
  created() {
    console.log(456);
  }
};
</script>

<style lang="scss">
.cake-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 15upx;
}
</style>
