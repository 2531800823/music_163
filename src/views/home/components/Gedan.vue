<template>
  <div class="gedan-inner">
    <!-- 歌单 -->
    <div class="u-title">
      <h3>{{ title }}</h3>
      <button class="selectType" @click="showSelect">
        选择分类 <i class="el-icon-arrow-down"></i>
      </button>
      <div class="xuanze" ref="selectAll" :class="{ hideSelect: isSelectAll }">
        <div class="sanjiao"></div>
        <h3><a href="javascript:;" @click="updataCat">全部风格</a></h3>
        <dl v-for="item in typeData" :key="item.id">
          <dt><i class="el-icon-monitor"></i>{{ item.name }}</dt>
          <dd>
            <a
              href="javascript:;"
              v-for="(item2, index) in item.children"
              :key="index"
              @click="editCat(item2.name)"
              >{{ item2.name }}<span>|</span></a
            >
          </dd>
        </dl>
      </div>
    </div>
    <!-- 歌单内容 -->
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div class="bgi">
          <img :src="item.coverImgUrl" alt="" />
          <div class="playf">
            <a href="javascript"></a>
            <span class="erji"></span>
            <span class="playl">{{ item.playCount | geshouNum }}</span>
          </div>
        </div>
        <p class="mingzi">{{ item.name }}</p>
        <p class="msg">by {{ item.creator.nickname }}</p>
      </li>
    </ul>
    <!-- /歌单内容 -->

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="pageNum"
      @size-change="deitPageSize"
      @current-change="editPageNum"
    >
    </el-pagination>
    <!-- /分页 -->
  </div>
</template>

<script>
import { getPlayList, getPlayListType } from "@/api/playlist.js";
export default {
  created() {
    this.title = this.$route.query.cat || "全部";
    this.getList(this.$route.query.cat);
    this.getTypeList();
  },
  data() {
    return {
      title: "全部",
      data: [],
      typeData: [],
      total: 0,
      pageSize: 30,
      pageNum: 1,
      cat: "全部",
      order: "hot",
      isSelectAll: true,
    };
  },
  methods: {
    async getList(type) {
      const { data } = await getPlayList({
        cat: type || this.cat,
        order: this.order,
        limit: this.pageSize,
        offset: (this.pageNum - 1) * this.pageSize,
      });
      this.data = data.playlists;
      this.total = data.total;
    },
    async getTypeList() {
      const { data } = await getPlayListType();
      this.typeData = this.formatData(data);
    },
    deitPageSize(val) {
      this.pageSize = val;
      this.getList();
    },
    editPageNum(val) {
      this.pageNum = val;
      this.getList();
    },
    editCat(type) {
      this.cat = type;
      this.getList();
      this.isSelectAll = true;
    },
    showSelect() {
      this.isSelectAll = !this.isSelectAll;
    },
    updataCat() {
      this.cat = "全部";
      this.getList();
      this.isSelectAll = true;
    },
    formatData(data) {
      let obj = [];
      for (const key in data.categories) {
        obj.push({
          id: key - 0,
          name: data.categories[key],
          children: [],
        });
      }

      for (let i = 0; i < data.sub.length; i++) {
        for (let j = 0; j < obj.length; j++) {
          if (data.sub[i].category === obj[j].id) {
            obj[j].children.push(data.sub[i]);
            break;
          }
        }
      }
      return obj;
    },
  },
  watch: {
    isSelectAll(newval, oldval) {
      if (!oldval) {
        window.onclick = function () {
          this.isSelectAll = true;
        }.bind(this);

        this.$refs.selectAll.onmouseleave = function () {
          window.onclick = function () {
            this.isSelectAll = true;
          }.bind(this);
        }.bind(this);

        this.$refs.selectAll.onmouseover = function () {
          window.onclick = null;
        }.bind(this);
      } else {
        this.$refs.selectAll.onmouseover = null;
        this.$refs.selectAll.onclick = null;
        window.onclick = null;
        this.$refs.selectAll.onmouseover = null;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.gedan-inner {
  width: 900px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  min-height: 700px;
  .u-title {
    display: flex;
    text-align: left;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    position: relative;

    h3 {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-weight: normal;
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
      padding: 0 50px 30px 0;
      &:nth-of-type(5n) {
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
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .msg {
        text-align: left;
        color: #999;
        font-size: 12px;
      }
    }
  }

  .selectType {
    font-size: 12px;
    width: 90px;
    font-weight: normal;
    margin: 2px 0 0 12px;
    color: #333;
    padding: 0 7px;
    height: 31px;
    color: rgb(12, 115, 194);
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    background-color: rgb(249, 249, 249);
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .hideSelect {
    display: none !important;
  }
  .xuanze {
    display: block;
    position: absolute;
    top: 40px;
    left: -10px;
    z-index: 1;
    width: 700px;
    background-color: #fff;
    box-shadow: 3px 2px 10px 2px #ccc;
    border-radius: 10px;
    .sanjiao {
      position: absolute;
      width: 0;
      top: -15px;
      left: 105px;
      border: 8px solid transparent;
      border-bottom-color: #fff;
      z-index: 3;
    }
    h3 {
      height: 37px;
      padding-left: 26px;
      border-bottom: 1px solid #e6e6e6;
      font-weight: normal;
      margin-top: 20px;
      padding-bottom: 10px;
      a {
        font-size: 12px;
        color: #333;
        text-decoration: none;
        padding: 5px 6px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: rgb(248, 248, 248);
      }
    }
    dl {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    }
    dt {
      position: absolute;
      top: 0;
      padding-top: 15px;
      margin-left: 20px;
      padding-right: 10px;
      margin-right: 5px;
      font-weight: bold;
      i {
        margin-right: 5px;
      }
    }
    dd {
      padding: 15px 15px 0;
      border-left: 1px solid #e6e6e6;
      margin-left: 90px;
      padding-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      a {
        font-size: 12px;
        color: #333;
        text-decoration: none;
      }
      span {
        margin: 0 8px 0 10px;
        font-size: 12px;
        color: #d8d8d8;
        line-height: 24px;
      }
    }
  }
}
</style>