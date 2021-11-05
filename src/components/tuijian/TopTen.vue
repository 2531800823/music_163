<template>
  <div class="top10">
    <div class="biaoti">
      <div>
        <h3 @click="toTop()">榜单</h3>
      </div>
      <p @click="toTop()">更多 <i class="el-icon-position"></i></p>
    </div>

    <div class="list">
      <div v-for="(item, i) in data" :key="item.id">
        <div class="top">
          <div class="tu">
            <img :src="item.img" alt="" />
            <a href="javascript:;" @click="toTop()"></a>
          </div>
          <div class="wen">
            <h3 @click="toTop()">{{ item.name }}</h3>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
          </div>
        </div>
        <ul>
          <li v-for="(item2, index) in item.children" :key="item2.id">
            <span :class="[index < 3 ? 'color' : '']">{{ index + 1 }}</span>
            <a href="javascript:;" class="gename">{{ item2.name }}</a>
            <div class="play">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </li>
          <li class="chufa">
            <a href="javascript:;" @click="toTop(id[i])">查看更多> </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTop } from "@/api/shouye.js";
export default {
  created() {
    this.getList();
  },
  data() {
    return {
      id: [2884035, 3779629, 19723756],
      data: [],
    };
  },
  methods: {
    toTop(val) {
      val = val || "";
      this.$router.push("/discover/top?id=" + val);
    },
    // 获取数据
    async getList() {
      for (let i = 0; i < this.id.length; i++) {
        const { data } = await getTop(this.id[i]);
        this.data.push({
          name: data.playlist.name,
          id: data.playlist.id,
          img: data.playlist.coverImgUrl,
          children: data.playlist.tracks.splice(0, 10),
        });
      }
      //   console.log(this.data);

      //   console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.top10 {
  padding: 20px 20px 40px;
  .biaoti {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 33px;
    border-bottom: 2px solid #c20c0c;

    div {
      display: flex;
      align-items: center;
    }
    h3 {
      cursor: pointer;
      padding: 0 10px 0 34px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
      margin-right: 10px;
      background: url("https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66");
      background-position: -225px -156px;
    }
    a {
      color: #666;
      text-decoration: none;
    }
    span {
      margin: 0 10px;
      color: #ccc;
    }
    p {
      cursor: pointer;
      color: #666;
      i {
        color: #c20c0c;
        font-size: 14px;
      }
    }
  }

  .list {
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    background: url("https://s2.music.126.net/style/web2/img/index/index_bill.png?4100bf50abcdc6cfbf5ef979dc03aa68");
    display: flex;
    div {
      flex: 1;
    }
    .top {
      height: 100px;
      display: flex;
      padding: 20px 0 0 19px;
      .tu {
        position: relative;
        width: 80px;
        height: 80px;
        img {
          width: 80px;
          height: 80px;
        }
        a {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 80px;
          height: 80px;
          background: url("https://s2.music.126.net/style/web2/img/coverall.png?18ba099d8d27a00c16809c928747ea0f")
            no-repeat;
          background-position: -145px -57px;
        }
      }
      .wen {
        width: 116px;
        margin: 6px 0 0 10px;
        h3 {
          font-size: 14px;
          margin-bottom: 10px;
        }
        a {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          text-indent: -9999px;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66)
            no-repeat 0 9999px;
          background-position: -267px -205px;
          &:nth-of-type(2) {
            background-position: -300px -205px;
          }
        }
      }
    }

    ul {
      height: 319px;
      margin-left: 10px;
      line-height: 32px;
      li {
        position: relative;
        height: 32px;
        display: flex;

        span {
          display: block;
          width: 35px;
          height: 32px;
          text-align: center;
          color: #666;
          padding-right: 10px;
          font-size: 16px;
        }
        .gename {
          width: 170px;
          height: 32px;
          text-decoration: none;
          color: #000;
        }
        .color {
          color: #c10d0c;
        }
        &:hover .play {
          display: flex;
        }
        &:hover .gename {
          width: 96px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .play {
          position: absolute;
          top: 50%;
          right: 0;
          width: 60px;
          transform: translateY(-50%);
          padding-right: 10px;
          display: flex;
          justify-content: space-between;
          display: none;

          a {
            display: block;
            width: 17px;
            height: 17px;
            background: url(https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66)
              no-repeat 0 9999px;
            background-position: -267px -268px;
            &:nth-of-type(2) {
              background: url(https://s2.music.126.net/style/web2/img/icon.png?a47232f417b70e0ad8238ffd98bc16f6)
                no-repeat 0 9999px;

              background-position: 0 -698px;
            }
            &:nth-of-type(3) {
              background-position: -297px -268px;
            }
          }
        }
      }

      .chufa {
        justify-content: flex-end;
        a {
          font-size: 12px;
          color: #000;
          text-decoration: none;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>