<template>
  <div class="songer">
    这里放入驻歌手
    <button @click="daa">aaaaaaaaa</button>
  </div>
</template>
<script>
export default {
  methods: {
    daa() {
      this.$router.push("/discover/artist?id=5781");
    },
  },
};
</script>
<style scoped>
.songer {
  outline: 1px solid blue;
}
</style>