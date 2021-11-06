<template>
  <div class="discover">
    <!-- 轮播图 -->
    <MusicSlider />

    <div class="box">
      <div class="left">
        <!-- 热门推荐 -->
        <Recommend :recommend="recommend" />

        <!-- 新碟上架 -->
        <NewAlbum />

        <!-- 榜单 -->
        <TopTen />
      </div>
      <div class="right">
        <div class="login">这里放登录</div>
        <!-- 入驻歌手 -->
        <Songer />

        <!-- 热门主播 -->
        <HotAnchor />
      </div>
    </div>
  </div>
</template>

<script>
import MusicSlider from "@/components/tuijian/MusicSlider.vue";
import Recommend from "@/components/tuijian/Recommend.vue";
import NewAlbum from "@/components/tuijian/NewAlbum.vue";
import TopTen from "@/components/tuijian/TopTen.vue";
import Songer from "@/components/tuijian/Songer.vue";
import HotAnchor from "@/components/tuijian/HotAnchor.vue";

export default {
  components: {
    MusicSlider,
    Recommend,
    NewAlbum,
    TopTen,
    Songer,
    HotAnchor,
  },
  data() {
    return {
      recommend: [],
    };
  },
  created() {
    // this.getRecommend();
  },
  methods: {
    // getRecommend() {
    //   axios.get("/api/personalized?limit=8").then((res) => {
    //     console.log(res);
    //     this.recommend = res.data.result;
    //   });
    // },
  },
};
</script>

<style scoped>
.discover .box {
  width: 980px;
  margin: 0 auto;
  background: url("https://s2.music.126.net/style/web2/img/frame/wrap1.png?ef294f16b138e342200a2a90e073a9e6")
    repeat-y 100% 100%;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  min-height: 700px;
  display: flex;
  justify-content: space-between;
}

.box .left {
  width: calc(100% - 250px);
}

.box .right {
  width: 250px;
}
</style>
