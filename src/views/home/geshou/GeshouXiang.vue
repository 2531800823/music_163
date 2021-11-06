<template>
  <div class="geshou-xiang">
    <div class="left">
      <div class="tou">
        <h2>
          {{ userName && userName.name }}
          <span>{{ userName.alias && userName.alias[0] }}</span>
        </h2>
        <img :src="userName && userName.picUrl + '?param=640y300'" alt="" />
        <div class="mask"></div>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
      <ul>
        <li>
          <router-link
            :to="'/discover/artist?id=' + $route.query.id"
            exact
            class="gs1"
          >
            <em>热门作品</em>
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/discover/artist/suoyou?id=' + $route.query.id"
            class="gs1"
          >
            <em>所有专辑</em>
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/discover/artist/xiangmv?id=' + $route.query.id"
            class="gs1"
          >
            <em>相关MV</em>
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/discover/artist/yiren?id=' + $route.query.id"
            class="gs1"
          >
            <em>歌手介绍</em>
          </router-link>
        </li>
      </ul>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="right">
      <div>
        <h3>热门歌手</h3>
        <ul>
          <li v-for="item in hotList" :key="item.id" @click="toHot(item.id)">
            <div class="mask">
              <a href="javascript:;">
                <img :src="item.img1v1Url + '?param=50y50'" alt="" />
              </a>
            </div>
            <p>
              <a href="javascript:;">{{ item.name }}</a>
            </p>
          </li>
        </ul>
      </div>
      <div class="download">
        <h3>网易云音乐多端下载</h3>
        <ul>
          <li>
            <a href="javascript:;"> </a>
          </li>
          <li>
            <a href="javascript:;"> </a>
          </li>
          <li>
            <a href="javascript:;"> </a>
          </li>
        </ul>
        <p>同步歌单，随时畅听320k好音乐</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getGeShou } from "@/api/mini/geshou.js";
import { getHotGeShou } from "@/api/user.js";
export default {
  created() {
    this.id = this.$route.query.id || this.id;
    this.getList();
    this.getHotList();
  },
  data() {
    return {
      select: ["热门单曲", "作词作品", "作曲作品"],
      value: "热门单曲",
      userName: {},
      musicList: [],
      id: 5781,
      hotList: [],
    };
  },
  // watch: {
  //   $route: function (to, from) {
  //     if (to.fullPath !== from.fullPath) {
  //       //监听路由参数是否变化
  //     }
  //   },
  // },
  methods: {
    async getList() {
      const { data } = await getGeShou(this.id);
      this.userName = data.artist;
      this.musicList = data.hotSongs;
    },
    async getHotList() {
      const { data } = await getHotGeShou({
        offset: 0,
        limit: 6,
      });
      this.hotList = data.artists;
    },
    toHot(val) {
      // 跳转到本路由 ，参数不变 监视器 监听
      this.$router.replace("/discover/artist?id=" + val);
      location.reload(); //强制刷新页面
    },
  },
};
</script>

<style lang="less" scoped>
.geshou-xiang {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  .left {
    flex: 1;
    padding: 27px 30px 40px 39px;
    .tou {
      height: 333px;
      position: relative;
      h2 {
        max-width: 75%;
        height: 34px;
        line-height: 24px;
        font-weight: normal;
        font-size: 24px;
        color: #333;
        span {
          max-width: 23%;
          padding-left: 10px;
          font-size: 14px;
          line-height: 32px;
          color: #999;
          font-weight: normal;
        }
      }
      img {
        display: block;
        width: 640px;
        height: 300px;
      }

      .mask {
        position: absolute;
        width: 640px;
        height: 300px;
        top: 34px;
        left: 0;
        background: url("https://s2.music.126.net/style/web2/img/ban_mask.png?2481f00ae0d0e2c0897702688967573f");
      }
      a {
        display: block;
        position: absolute;
        bottom: 18px;
        right: 116px;
        width: 96px;
        height: 32px;
        background: url("https://s2.music.126.net/style/web2/img/iconall.png?7237ccd62006aacfd72e6d10b563aa18");
        background-position: 0 -1156px;
        &:nth-of-type(2) {
          bottom: 18px;
          right: 20px;
          width: 76px;
          height: 32px;
          background-position: 0 -500px;
          &:hover {
            background-position: 0 -540px;
          }
        }
        &:hover {
          background-position: 0 -1196px;
        }
      }
    }

    ul {
      height: 39px;
      border: 1px solid #ccc;
      border-width: 0 1px;
      background: url("https://s2.music.126.net/style/web2/img/tab.png?3ad7d7042e8760120b5c0bc9468a1059");
      background-position: 0 0;
      background-repeat: repeat-x;
      display: flex;
      li {
        position: relative;
        left: -1px;
        a {
          color: #333;
          padding-left: 2px;
        }
        a,
        em {
          display: inline-block;
          background: url("https://s2.music.126.net/style/web2/img/tab.png?3ad7d7042e8760120b5c0bc9468a1059")
            no-repeat 0 9999px;
          height: 39px;
          font-size: 14px;
        }

        em {
          font-style: normal;
          height: 37px;
          width: 134px;
          padding: 2px 2px 0 0;
          line-height: 37px;
          cursor: pointer;
          text-align: center;
          &:hover {
            background-position: right -45px;
          }
        }
      }
    }
    .router-link-exact-active,
    .router-link-active {
      background-position: left -90px;
      em {
        background-position: right -90px;
        &:hover {
          background-position: right -90px;
        }
      }
    }
  }
  .right {
    width: 270px;
    padding: 20px 40px 40px 30px;
    border-left: 1px solid #ccc;
    position: relative;
    h3 {
      position: relative;
      height: 23px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50px;
        height: 92px;
        padding-right: 25px;
        &:nth-of-type(3n) {
          padding-right: 0;
        }
        .mask {
          width: 50px;
          height: 50px;
          a {
            color: #333;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 7px;
          text-align: center;
          a {
            color: #333;
            text-decoration: none;
            width: 50px;
            vertical-align: middle;
          }
        }
      }
    }

    .download {
      margin-top: 20px;
      h3 {
        position: relative;
        height: 23px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
      }
      ul {
        display: flex;
        justify-content: space-between;
        height: 65px;
        margin-bottom: 10px;
        background: url("https://s2.music.126.net/style/web2/img/sprite.png?0d17754063e0b740a06098ac46b3fe30")
          no-repeat 0 9999px;
        background-position: 0 -392px;
        li {
          padding: 0;
          a {
            display: block;
            width: 42px;
            height: 48px;
            text-indent: -9999px;
            &:hover {
              background: url("https://s2.music.126.net/style/web2/img/sprite.png?0d17754063e0b740a06098ac46b3fe30");
              background-position: 0 -472px;
            }
          }
          &:nth-of-type(2) a {
            margin-left: -3px;
            width: 60px;
            background-position: -72px -472px;
          }
          &:nth-of-type(3) a {
            margin-left: 8px;
            width: 42px;
            background-position: -158px -472px;
          }
        }
      }
      p {
        color: #999;
      }
    }
  }
}
</style>