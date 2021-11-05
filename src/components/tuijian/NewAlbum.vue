<template>
  <div class="new-album">
    <div class="biaoti">
      <div>
        <h3 @click="toXindie">新碟上架</h3>
      </div>
      <p @click="toXindie">更多 <i class="el-icon-position"></i></p>
    </div>

    <div class="touda">
      <a class="prev" href="javascript:;" @click="prev"> </a>
      <a class="next" href="javascript:;" @click="next"> </a>
      <div class="taowa">
        <div class="dianji" ref="liu">
          <ul>
            <li
              v-for="item in data2"
              :key="item.id"
              :to="'/album?id=' + item.id"
            >
              <div class="bgi">
                <img :src="item.blurPicUrl" alt="" />
                <a href="javascript:;" class="beijing"></a>
                <a href="javascript:;" class="bofang"></a>
              </div>
              <p>{{ item.name }}</p>
              <span>{{ item.artists | geshou }}</span>
            </li>
          </ul>
          <ul>
            <li
              v-for="item in data"
              :key="item.id"
              :to="'/album?id=' + item.id"
            >
              <div class="bgi">
                <img :src="item.blurPicUrl" alt="" />
                <a href="javascript:;" class="beijing"></a>
                <a href="javascript:;" class="bofang"></a>
              </div>
              <p>{{ item.name }}</p>
              <span>{{ item.artists | geshou }}</span>
            </li>
          </ul>
          <ul>
            <li
              v-for="item in data2"
              :key="item.id"
              :to="'/album?id=' + item.id"
            >
              <div class="bgi">
                <img :src="item.blurPicUrl" alt="" />
                <a href="javascript:;" class="beijing"></a>
                <a href="javascript:;" class="bofang"></a>
              </div>
              <p>{{ item.name }}</p>
              <span>{{ item.artists | geshou }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbum } from "@/api/album.js";

export default {
  created() {
    this.getList();
  },

  data() {
    return {
      data: [],
      data2: [],
      active: 1,
    };
  },
  methods: {
    // 跳转到新路由
    toXindie() {
      this.$router.push("/discover/newdie");
    },
    // 获取数据
    async getList() {
      const { data } = await getAlbum();
      this.data = data.albums.splice(0, 5);
      this.data2 = data.albums.splice(0, 5);
    },

    prev() {
      if (this.active < 1) {
        this.active = 2;
        this.$refs.liu.style.transition = "none";
        this.$refs.liu.style.marginLeft = "-200%";
        setTimeout(() => {
          this.$refs.liu.style.transition = "all 2s";
          this.$refs.liu.style.marginLeft = --this.active * -100 + "%";
        }, 0);
        return;
      }
      this.$refs.liu.style.transition = "all 2s";
      this.$refs.liu.style.marginLeft = --this.active * -100 + "%";
    },
    next() {
      if (this.active > 1) {
        this.active = 0;
        this.$refs.liu.style.transition = "none";
        this.$refs.liu.style.marginLeft = "0%";
        setTimeout(() => {
          this.$refs.liu.style.transition = "all 2s";
          this.$refs.liu.style.marginLeft = ++this.active * -100 + "%";
        }, 0);
        return;
      }
      this.$refs.liu.style.transition = "all 2s";
      this.$refs.liu.style.marginLeft = ++this.active * -100 + "%";
    },
  },
};
</script>

<style lang="less" scoped>
.new-album {
  padding: 0 20px 40px;
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
    p {
      color: #666;
      cursor: pointer;
      i {
        color: #c20c0c;
        font-size: 14px;
      }
    }
  }

  .touda {
    position: relative;
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
    margin-top: 20px;
    overflow: hidden;

    .prev {
      position: absolute;
      top: 71px;
      left: 0px;
      width: 17px;
      height: 17px;
      background: url("https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66")
        no-repeat 0 9999px;
      background-position: -260px -75px;
    }
    .next {
      position: absolute;
      top: 71px;
      right: 2px;
      width: 17px;
      height: 17px;
      background: url("https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66")
        no-repeat 0 9999px;
      background-position: -300px -75px;
    }
    .dianji {
      width: 300%;
      display: flex;
      margin-left: -100%;
      transition: all 2s;
    }
    ul {
      width: 100%;
      display: flex;
      margin-top: 20px;
      flex-wrap: wrap;
      li {
        width: 118px;
        height: 150px;
        text-align: left;
        background: url("https://s2.music.126.net/style/web2/img/index/index.png?9a8890d997742913d30a9d9789e1de66")
          no-repeat 0 9999px;
        background-position: -260px 100px;
        margin-left: 11px;

        &:nth-of-type(5n) {
          padding-right: 0;
        }

        .bgi {
          width: 100px;
          height: 100px;
          position: relative;
          .beijing {
            position: absolute;
            width: 118px;
            height: 100px;
            top: 0;
            left: 0;
            background-image: url("https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65");
            background-repeat: no-repeat;
            background-position: 0 -570px;
          }
          .bofang {
            position: absolute;
            left: 72px;
            width: 22px;
            height: 22px;
            right: 10px;
            bottom: 5px;
            background-image: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554");
            background-position: 0 -85px;
            display: none;
          }
          &:hover .bofang {
            display: block;
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        p {
          margin: 8px 0 3px;
          width: 130px;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span {
          width: 130px;
          display: block;
          font-size: 12px;
          color: #666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .taowa {
    width: 650px;
    overflow: hidden;
  }
}
</style>