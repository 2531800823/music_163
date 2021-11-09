<template>
  <div id="app">
    <div id="nav">
      <div class="tou">
        <a class="logo" hidefocus="true" href="javascript:;">网易音乐</a>
        <div class="xiala"></div>
        <router-link
          to="/"
          :class="{
            active:
              $route.path === '/' || $route.path.indexOf('/discover') !== -1,
          }"
        >
          <span>发现音乐</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/mymusic">
          <span>我的音乐</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/firend">
          <span>朋友</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/shop">
          <span>下载客户端</span>
          <span class="col"></span>
        </router-link>
        <!-- 占用层 -->
        <div class="zhanyong"></div>
        <!-- /占用层 -->

        <!-- 搜索 -->
        <Search />

        <!-- d登录 -->
        <Login />
      </div>
    </div>
    <router-view />
    <MusicFooter></MusicFooter>
  </div>
</template>
<script>
import MusicFooter from "@/components/MusicFooter.vue";
import Search from "@/views/search/Search.vue";
import Login from "@/views/login/Login.vue";
export default {
  created() {},
  components: {
    MusicFooter,
    Search,
    Login,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
@import url("https://at.alicdn.com/t/font_2916485_j9k5td9hyx.css");
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(245, 245, 245);
}
li {
  list-style: none;
}

/* 普通IE浏览器 样式清除 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
/* 火狐浏览器样式清除 */
input[type="number"] {
  -moz-appearance: textfield;
}

#app {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}

#nav {
  position: relative;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;

  .tou {
    margin: 0 auto;
    width: 1100px;
    height: 100%;
    display: flex;
    .logo {
      padding: 0;
      width: 157px;
      height: 100%;
      padding-right: 20px;
    }
    a {
      font-size: 14px;
      padding: 0 19px;
      line-height: 70px;
      text-align: center;
      color: #ccc;
      text-decoration: none;
      position: relative;
    }
  }
  .router-link-exact-active {
    color: #fff;
    background: #000;
    .col {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
      background-position: -226px 0;
    }
  }

  a {
    &.active {
      color: #fff;
      background: #000;
      .col {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
        background-position: -226px 0;
      }
    }
  }
}
.logo {
  width: 157px;
  height: 100%;
  padding-right: 20px;
  text-indent: -9999px;
  background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
}
.xiala {
  position: absolute;
  z-index: 0;
  top: 70px;
  left: 0;
  width: 100%;
  height: 5px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.zhanyong {
  flex: 1;
}

.biaodan {
  width: 80%;
  margin: 0 auto;
}
</style>
