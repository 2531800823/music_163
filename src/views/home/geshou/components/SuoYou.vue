<template>
  <div class="suoyou-inner">
    <ul>
      <li v-for="item in data" :key="item.id" :to="'/album?id=' + item.id">
        <div class="bgi">
          <img :src="item.blurPicUrl" alt="" />
          <a href="javascript:;" class="beijing"></a>
          <a href="javascript:;" class="bofang"></a>
        </div>
        <p>{{ item.name }}</p>
        <span>{{ item.publishTime | formatDatePing }}</span>
      </li>
    </ul>
    <div class="fenye">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="pageNum"
        :page-size="pageSize"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getAlbum } from "@/api/mini/geshou.js";
export default {
  created() {
    this.id = this.$route.query.id || this.id;
    this.getList();
  },
  data() {
    return {
      id: 0,
      data: [],
      pageSize: 12,
      pageNum: 1,
      total: 0,
    };
  },
  methods: {
    async getList() {
      const { data } = await getAlbum({
        id: this.id,
        limit: this.pageSize,
        offset: (this.pageNum - 1) * this.pageSize,
      });
      this.total = data.artist.albumSize;
      this.data = data.hotAlbums;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getList();
    },
  },
};
</script>

<style lang="less" scoped>
.suoyou-inner {
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 145px;
      height: 175px;
      text-align: left;
      padding: 0 18px 30px 0;

      &:nth-of-type(4n) {
        padding-right: 0;
      }

      .bgi {
        width: 120px;
        height: 120px;
        position: relative;
        .beijing {
          position: absolute;
          width: 145px;
          height: 120px;
          top: 0;
          left: 0;
          background-image: url("https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65");
          background-position: -170px -850px;
        }
        .bofang {
          position: absolute;
          left: 85px;
          width: 28px;
          height: 28px;
          right: 10px;
          bottom: 5px;
          background-image: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554");
          background-position: 0 -140px;
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
  .fenye {
    display: flex;
    justify-content: center;
  }
}
</style>