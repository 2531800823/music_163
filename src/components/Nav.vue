<template>
  <div class="nav-inner">
    <div class="quanbu" v-for="p in title" :key="p.id">
      <h2>{{ p.name }}</h2>
      <ul>
        <li
          v-for="(item, index) in 3"
          :key="item"
          @click="setisShow(p.id, item, p.name + name[index])"
        >
          <a
            href="javascript:;"
            class="geshou"
            :class="[isShow === p.id + '-' + item ? 'active' : '']"
            >{{ p.name + name[index] }}</a
          >
        </li>
      </ul>
    </div>
    <div class="xiangqing"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$emit("shuju", this.isShow, "华语男歌手");
  },
  data() {
    return {
      name: ["男歌手", "女歌手", "组合/乐队"],
      isShow: "7-1",
    };
  },
  props: ["title"],
  methods: {
    setisShow(i, index, str) {
      this.isShow = i + "-" + index;
      this.$bus.$emit("shuju", this.isShow, str);
    },
  },
};
</script>

<style lang="less" scoped>
.quanbu {
  margin: 5px 0 0;
  padding-top: 16px;
  border-top: 1px solid #d3d3d3;
  &:first-child {
    border-top: none;
  }
  h2 {
    height: 25px;
    text-align: left;
    padding-left: 14px;
    font-size: 16px;
    font-family: "Microsoft Yahei";
  }

  li {
    height: 29px;
    line-height: 29px;
    a {
      display: block;
      width: 160px;
      color: #333;
      font-size: 12px;
      background: url("../assets/singer.png") no-repeat 0 9999px;
      background-position: 0 -30px;

      i {
        color: #999;
      }
    }
    .active {
      background-position: 0 0;
      text-decoration: none;
      color: #c20c0c;
      background-position: 0 0px;
    }
  }
}
</style>