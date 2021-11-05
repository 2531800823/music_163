<template>
  <div class="topxiang-inner">
    <div class="title">
      <div class="img">
        <img :src="datalist && datalist.coverImgUrl" alt="" />
      </div>
      <div class="wen">
        <h2>{{ datalist && datalist.name }}</h2>
        <div class="gengxin">
          <i class="el-icon-alarm-clock"></i>
          <span
            >最近更新：{{ datalist && datalist.updateTime | formatDate }}</span
          >
          <u>（{{ gengxin }}）</u>
        </div>
        <div class="btns">
          <el-button-group>
            <el-button icon="el-icon-video-play" type="primary" size="mini"
              >播放</el-button
            >
            <el-button
              class="plus"
              type="primary"
              size="mini"
              icon="el-icon-plus"
              round
            ></el-button>
          </el-button-group>
          <el-button size="mini" plain icon="el-icon-folder-add"
            >({{ datalist && datalist.subscribedCount }})</el-button
          >
          <el-button icon="el-icon-share" size="mini"
            >({{ datalist && datalist.shareCount }})</el-button
          >
          <el-button icon="el-icon-download" size="mini">下载</el-button>
          <el-button icon="el-icon-chat-dot-square" size="mini"
            >({{ datalist && datalist.commentCount }})</el-button
          >
        </div>
      </div>
    </div>
    <div class="list">
      <div class="biaoti">
        <div>
          <h3>歌曲列表</h3>
          <span>{{ titleData && titleData.length }}首歌</span>
        </div>
        <p>
          播放：<strong>{{ datalist && datalist.playCount }}</strong>
          次
        </p>
      </div>
      <ul class="">
        <li class="tou">
          <div>序号</div>
          <div>歌曲</div>
          <div>歌手</div>
          <div>专辑</div>
          <div>时长</div>
        </li>
        <li v-for="(item, index) in titleData" :key="item.id">
          <div>{{ index + 1 }}</div>
          <div>
            <img :src="item.al.picUrl" alt="" v-if="index < 3" />
            <span>{{ item.name }}</span>
          </div>
          <div>
            <span>{{ item.ar | geshou }}</span>
          </div>
          <div>
            <span>{{ item.al.name }}</span>
          </div>
          <div>
            <span>{{ item.dt | formatDateMu }}</span>
          </div>
        </li>
      </ul>
    </div>
    <CommentList :active="active"></CommentList>
  </div>
</template>

<script>
import { getTopXiang } from "@/api/toplist.js";
import CommentList from "@/components/CommentList.vue";
export default {
  props: {
    gengxin: {
      type: String,
      required: true,
    },
    active: {
      type: [String, Number],
      required: true,
    },
  },
  created() {
    this.$nextTick(() => {
      this.TopXiang();
    });
  },
  data() {
    return {
      datalist: {},
      id: this.active,
      titleData: [],
    };
  },
  watch: {
    active() {
      this.TopXiang();
    },
  },
  methods: {
    async TopXiang() {
      const { data } = await getTopXiang(this.active);
      this.datalist = data.playlist;
      this.titleData = data.playlist?.tracks;
    },
  },
  components: {
    CommentList,
  },
};
</script>

<style lang="less" scoped>
.topxiang-inner {
  .title {
    padding: 40px;
    display: flex;
    .img {
      width: 150px;
      height: 150px;
      border: 1px solid #ccc;
      padding: 3px;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .wen {
    margin-left: 20px;
    h2 {
      margin: 16px 0 4px;
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
    }
    .gengxin {
      margin: 0 0 20px;
      line-height: 35px;
      i {
        font-size: 14px;
        margin-right: 5px;
      }
      span {
        color: #666;
      }
      u {
        text-decoration: none;
        color: #999;
      }
    }
    .btns {
      display: flex;
      margin-bottom: 25px;
      margin-right: -10px;
      font-size: 14px;
    }
    .el-button {
      padding: 7px;
    }
    .el-button-group {
      margin-right: 10px;
      display: flex;
    }
  }

  .list {
    padding: 0 30px 40px 40px;
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
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
        margin-right: 40px;
      }
      p {
        strong {
          color: #c20c0c;
          text-decoration: none;
        }
      }
    }

    ul {
      //   border: 1px solid #d9d9d9;
      .tou {
        color: rgb(100, 100, 100);
        div {
          text-align: center;
          flex: 1;
          font-size: 16px;
          line-height: 50px;
          &:nth-of-type(2) {
            flex: 2;
          }
          &:nth-of-type(3) {
            flex: 1.5;
          }
          &:nth-of-type(4) {
            flex: 2;
          }
          &:nth-of-type(5) {
            flex: 1;
          }
        }
      }
      li {
        &:nth-of-type(2n) {
          background-color: hsla(0, 5.9%, 90%, 0.5);
        }
        &:hover {
          background-color: hsla(0, 3%, 80.6%, 0.5) !important;
        }
      }
      li {
        display: flex;
        height: 50px;
        margin: 5px 0;
        border-radius: 5px;
        cursor: pointer;
        span {
          margin: 0 auto;
          display: block;
          width: 100px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        div {
          text-align: center;
          flex: 1;
          font-size: 16px;
          line-height: 50px;
          span {
            font-size: 14px;
          }
          &:nth-of-type(2) {
            flex: 2;
            display: flex;
            align-items: center;
            img {
              width: 35px;
              height: 35px;
              border-radius: 5px;
              margin-right: 5px;
            }
          }
          &:nth-of-type(3) {
            flex: 1.5;
          }
          &:nth-of-type(4) {
            flex: 2;
          }
          &:nth-of-type(5) {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>