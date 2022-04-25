<template>
  <view>
    <view class="">传递过来的商品id为{{ id }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    };
  },
  methods: {},
  onLoad({ id }) {
    this.id = id;
  }
};
</script>

<style></style>
