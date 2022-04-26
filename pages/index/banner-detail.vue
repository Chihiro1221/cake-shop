<template>
  <view class=""><web-view :src="webUrl"></web-view></view>
</template>

<script>
export default {
  data() {
    return {
      webUrl: ''
    };
  },
  methods: {},
  onLoad({ key2, link, type }) {
    this.webUrl = `${link}&key2=${key2}&type=${type}`;
  }
};
</script>

<style></style>
