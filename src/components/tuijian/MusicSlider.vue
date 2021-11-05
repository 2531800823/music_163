<template>
  <!-- 轮播图 -->
  <div
    class="luobotu"
    :style="
      'background-image: url(' +
      url +
      '?imageView&blur=40x20); background-size: 6000px; background-position: center center;'
    "
  >
    <div class="jiaodian">
      <el-carousel
        :initial-index="active"
        @change="change"
        trigger="click"
        height="285px"
        arrow="hover"
        ref="liu"
        loop
        autoplay
        :interval="3000"
      >
        <el-carousel-item v-for="(item, index) in datalist" :key="index">
          <img :src="item.imageUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <button class="next" @click="next"></button>
      <button class="prev" @click="prev"></button>
      <div class="download">
        <a href="javascript:;"> </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getLunbo } from "@/api/shouye.js";
export default {
  created() {
    this.getList();
  },
  data() {
    return {
      active: 0,
      datalist: [],
      url: "",
    };
  },
  methods: {
    async getList() {
      const { data } = await getLunbo();
      this.datalist = data.banners;
      this.url = data.banners[this.active].imageUrl;
    },
    next() {
      this.$refs.liu.next();
    },
    prev() {
      this.$refs.liu.prev();
    },
    change(val) {
      this.url = this.datalist[val].imageUrl;
    },
  },
};
</script>

<style lang="less" scoped>
.jiaodian {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
  display: flex;
  button {
    position: absolute;
    outline: none;
    border: none;
    top: 50%;
    transform: translateY(-50%);
    background: url("https://s2.music.126.net/style/web2/img/index/banner.png?2629007435f39b2467ae488654a8b3ec");
    width: 37px;
    z-index: 999999;
    height: 63px;
  }
  .el-carousel {
    flex: 1;
  }
  .next {
    right: -68px;
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
  .prev {
    left: -68px;
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .download {
    position: relative;
    width: 254px;
    height: 285px;
    background: url("https://s2.music.126.net/style/web2/img/index/download.png?b52b30aaa009f9f25360b6784205979d")
      no-repeat 0 0;
    a {
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background: url("https://s2.music.126.net/style/web2/img/index/download.png?b52b30aaa009f9f25360b6784205979d")
        no-repeat 0 0;
      background-position: 0 9999px;
    }
  }

  .el-carousel--horizontal {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    /deep/ .el-carousel__indicator--horizontal {
      padding: 6px 4px;

      .el-carousel__button {
        width: 25px;
      }
    }
  }

  /deep/ .el-carousel__arrow--left {
    position: absolute;
    left: -68px;
    z-index: 0;
    font-size: 0;
  }
  /deep/ .el-carousel__arrow--right {
    right: -68px;
    font-size: 0;
  }
}
</style>