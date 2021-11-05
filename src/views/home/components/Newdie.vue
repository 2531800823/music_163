<template>
  <div class="newdie-inner">
    <!-- 热门新碟 -->
    <div class="top">
      <div class="u-title">
        <h3>热门新碟</h3>
      </div>
      <ul>
        <li v-for="item in data" :key="item.id" :to="'/album?id=' + item.id">
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
    <!-- /热门新碟 -->

    <!-- 全部新碟 -->
    <div class="footer">
      <div class="u-title all">
        <h3>全部新碟</h3>
        <div class="type">
          <a href="javascript:;" @click="updataList('ALL')">全部</a>
          <span>|</span>
          <a href="javascript:;" @click="updataList('ZH')">华语</a>
          <span>|</span>
          <a href="javascript:;" @click="updataList('EA')">欧美</a>
          <span>|</span>
          <a href="javascript:;" @click="updataList('KP')">韩国</a>
          <span>|</span>
          <a href="javascript:;" @click="updataList('JP')">日本</a>
        </div>
      </div>
      <ul>
        <li v-for="item in allList" :key="item.id" :to="'/album?id=' + item.id">
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
    <!-- /全部新碟 -->

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="pagenum"
      :page-size="pageSize"
      @size-change="updataPageSize"
      @current-change="updataPageNum"
    >
    </el-pagination>
    <!-- /分页 -->
  </div>
</template>

<script>
import { getAlbum, getAllAlbum } from "@/api/album.js";
export default {
  created() {
    this.getList();
    this.getAllList();
  },
  data() {
    return {
      data: [], // 热门新碟个数
      allList: [], // 全部新碟个数
      total: 0, // 总个数
      pagenum: 1, // 当前页数
      pageSize: 30, // 当前数量
      type: "ALL", // 当前类型
    };
  },
  methods: {
    // 获取热门个数
    async getList() {
      const { data } = await getAlbum();
      this.data = data.albums;
      // 只渲染10个 多余的删除
      this.data.splice(10, 9999);
    },
    // 获取新碟个数
    async getAllList() {
      const { data } = await getAllAlbum({
        area: this.type,
        limit: this.pageSize,
        offset: (this.pagenum - 1) * this.pageSize,
      });
      this.allList = data.albums;
      this.total = data.total;
    },
    // 获取分类新碟
    updataList(type) {
      this.type = type;
      this.pagenum = 1;
      this.getAllList(type);
    },
    // 每页的个数发生变化
    updataPageSize(val) {
      this.pageSize = val;
      this.getAllList();
    },
    updataPageNum(val) {
      this.pagenum = val;
      this.getAllList();
    },
  },
};
</script>

<style lang="less" scoped>
.newdie-inner {
  width: 980px;
  padding: 40px;
  margin: 0 auto;
  border: 1px solid #ccc;
  .u-title {
    text-align: left;
    height: 40px;
    border-bottom: 2px solid #c20c0c;

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
      width: 151px;
      height: 178px;
      text-align: left;
      padding: 0 50px 30px 0;

      &:nth-of-type(5n) {
        padding-right: 0;
      }

      .bgi {
        width: 130px;
        height: 130px;
        position: relative;
        .beijing {
          position: absolute;
          width: 153px;
          height: 130px;
          top: 0;
          left: 0;
          background-image: url("https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65");
          background-position: 0 -845px;
        }
        .bofang {
          position: absolute;
          left: 94px;
          width: 28px;
          height: 28px;
          right: 10px;
          bottom: 5px;
          background-image: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554");
          background-position: 0 -170px;
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
  .footer {
    .all {
      display: flex;
      align-items: center;
      .type {
        margin: 12px 0 0 20px;
        a {
          color: #666;
          font-size: 12px;
          text-decoration: none;
        }
        span {
          margin: 0 10px;
          color: #c7c7c7;
        }
      }
    }
  }
}
</style>
