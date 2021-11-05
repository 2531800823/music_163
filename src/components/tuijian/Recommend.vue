<template>
  <div class="recommend">
    <div class="biaoti">
      <div>
        <h3 @click="toGedan('全部')">热门推荐</h3>
        <a href="javascript:;" @click="toGedan('华语')">华语</a>
        <span>|</span><a href="javascript:;" @click="toGedan('流行')">流行</a>
        <span>|</span><a href="javascript:;" @click="toGedan('摇滚')">摇滚</a>
        <span>|</span><a href="javascript:;" @click="toGedan('华语')">华语</a>
        <span>|</span><a href="javascript:;" @click="toGedan('电子')">电子</a>
      </div>
      <p @click="toGedan('全部')">更多 <i class="el-icon-position"></i></p>
    </div>

    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div class="bgi">
          <img :src="item.picUrl" alt="" />
          <div class="playf">
            <a href="javascript"></a>
            <span class="erji"></span>
            <span class="playl">{{ item.playCount | geshouNum }}</span>
          </div>
        </div>
        <p class="mingzi">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getHotTui } from "@/api/shouye.js";
export default {
  props: ["recommend"],
  created() {
    this.getList();
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    // 跳转歌单
    toGedan(type) {
      this.$router.push("/discover/gedan?cat=" + type);
    },
    // 获取数据
    async getList() {
      const { data } = await getHotTui();
      this.data = data.result.splice(0, 8);
    },
  },
};
</script>
<style lang="less" scoped>
.recommend {
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

  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 140px;
      height: 188px;
      overflow: hidden;
      padding: 0 42px 30px 0;
      &:nth-of-type(4n) {
        padding-right: 0;
      }
      .bgi {
        position: relative;
        width: 140px;
        height: 140px;
        img {
          width: 100%;
          height: 100%;
        }
        .playf {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          color: #ccc;
          line-height: 1.4;
          background: url("https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65")
            no-repeat;
          background-position: 0 -537px;

          a {
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            color: #333;
            background: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554")
              no-repeat;
            background-position: 0 0;
          }
          .erji {
            float: left;
            width: 14px;
            display: inline-block;
            height: 11px;
            margin: 9px 5px 9px 10px;
            background: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554")
              no-repeat;
            background-position: 0 -24px;
          }
          .playl {
            font-size: 12px;
            float: left;
            margin: 7px 0 0 0;
          }
        }
      }
      .mingzi {
        text-align: left;
        margin: 8px 0 3px;
        font-size: 14px;
        width: 100%;
        overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
      }
      .msg {
        text-align: left;
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>