<template>
  <div class="geshou-xiang">
    <div class="left">
      <div class="tou">
        <h2>{{ name }}</h2>
        <img
          src="https://p2.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg?param=640y300"
          alt=""
        />
        <div class="mask"></div>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
      <ul>
        <li>
          <router-link to="/artist" class="gs1">
            <em>热门作品</em>
          </router-link>
        </li>
        <li>
          <router-link to="/artist/suoyou" class="gs1">
            <em>所有专辑</em>
          </router-link>
        </li>
        <li>
          <router-link to="/artist/xiangmv" class="gs1">
            <em>所有专辑</em>
          </router-link>
        </li>
        <li>
          <router-link to="/artist/yiren" class="gs1">
            <em>所有专辑</em>
          </router-link>
        </li>
      </ul>

      <router-view></router-view>
    </div>
    <div class="right">2</div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      name: "薛之谦",
    };
  },
  methods: {},
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
        .gs1 {
          //   background-position: left -90px;
          em {
            // background-position: right -90px;
          }
        }
        em {
          font-style: normal;
          height: 37px;
          width: 134px;
          //   padding: 2px 0px 0 0;
          line-height: 37px;
          cursor: pointer;
          text-align: center;
        }
      }
    }
  }
  .right {
    width: 270px;
    position: relative;
  }
}
</style>