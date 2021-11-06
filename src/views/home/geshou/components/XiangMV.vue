<template>
  <div class="xiang-mv">
    <ul>
      <li v-for="item in data" :key="item.id">
        <div class="neirong">
          <img :src="item.imgurl + '?param=137y103'" alt="" />
          <a href="javascript:;" class="bj1"></a>
          <a href="javascript:;" class="bj2"></a>
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getMV } from "@/api/mini/geshou.js";
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
      const { data } = await getMV({
        id: this.id,
        limit: this.pageSize,
        // offset: (this.pageNum - 1) * this.pageSize,
      });
      this.data = data.mvs;
      // console.log(data);
    },
    // handleSizeChange(val) {
    //   this.pageSize = val;
    //   this.getList();
    // },
    // handleCurrentChange(val) {
    //   this.pageNum = val;
    //   this.getList();
    // },
  },
};
</script>

<style lang="less" scoped>
.xiang-mv {
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 137px;
      height: 140px;
      padding-right: 29px;
      border-radius: 2px;
      overflow: hidden;
      &:nth-of-type(4n) {
        padding-right: 0;
      }

      .neirong {
        width: 137px;
        height: 103px;
        position: relative;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .bj1 {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://s2.music.126.net/style/web2/img/coverall.png?af2f3b7d433d2c1545043aae398e9d65")
            no-repeat 0 9999px;
          background-position: 0 -1170px;
        }
        .bj2 {
          display: inline-block;
          width: 44px;
          height: 44px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          background: url("https://s2.music.126.net/style/web2/img/iconall.png?2e839379085bcc620631b550c825f554")
            no-repeat 0 9999px;
          background-position: -30px -135px;
        }

        &:hover .bj2 {
          background-position: -30px -85px;
        }
      }

      p {
        display: inline-block;
        max-width: 100%;
        vertical-align: middle;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 8px 0 3px;
        font-size: 14px;
      }
    }
  }
}
</style>