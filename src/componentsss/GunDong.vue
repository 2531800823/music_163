<template>
  <div class="gundong" @click="tiaotop" ref="liu"></div>
</template>

<script>
export default {
  created() {
    // 防抖 在一定时间内执行函数， 如果重复触发  事件重新计时
    // window.onscroll = function () {
    //   clearTimeout(this.timer);
    //   this.timer = setTimeout(() => {
    //     if (document.documentElement.scrollTop > 300) {
    //       this.$refs.liu.style.display = "block";
    //     } else {
    //       this.$refs.liu.style.display = "none";
    //     }
    //   }, 200);
    // }.bind(this);
    // 节流 这次不执行结束不让下次执行 触发
    window.onscroll = function () {
      if (this.flag) {
        this.flag = false;
        this.timer = setTimeout(() => {
          if (document.documentElement.scrollTop > 200) {
            this.$refs.liu.style.display = "block";
          } else {
            this.$refs.liu.style.display = "none";
          }
          this.flag = true;
        }, 200);
      }
    }.bind(this);
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    tiaotop() {
      document.documentElement.scrollTo(0, 0);
    },
  },
  data() {
    return {
      timer: null, // 防抖定时器
      flag: true, // 节流标识
    };
  },
};
</script>

<style  lang="less" scoped>
.gundong {
  display: none;
  position: fixed;
  bottom: 160px;
  width: 49px;
  height: 44px;
  right: 20%;
  background: url("https://s2.music.126.net/style/web2/img/sprite.png?0d17754063e0b740a06098ac46b3fe30")
    no-repeat 0 9999px;
  background-position: -265px -47px;
  &:hover {
    background-position: -325px -47px;
  }
}
</style>