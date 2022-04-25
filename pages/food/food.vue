<template>
  <view class="body">
    你好
    <u-tag text="标签" plain size="mini" type="warning"></u-tag>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!'
    };
  },
  onLoad() {
    uni.$on('sendBread', data => {
      console.log(data);
    });
  }
};
</script>

<style lang="scss">
.body {
  width: 100%;
}
</style>
