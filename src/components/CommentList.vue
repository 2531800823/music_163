<template>
  <!-- 歌单评论 -->
  <div class="commentlist-inner">
    <div class="biaoti">
      <h3>评论</h3>
      <span>共 {{ total }} 条评论</span>
    </div>

    <div class="mypingl">
      <img
        src="https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
        alt=""
      />
      <div class="kuang">
        <div class="jiao"></div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="评论"
        ></textarea>
        <div class="xiaolian">
          <div><span>😊</span> <i>@</i></div>
          <div>
            <span>135</span>
            <el-button type="primary" size="mini">评论</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="jingcai">
      <h3>精彩评论</h3>
    </div>

    <div>
      <div class="user" v-for="(item, index) in dataList" :key="index">
        <img :src="item.user.avatarUrl" alt="" />
        <div class="wen">
          <a href="javascript:;" class="username">{{ item.user.nickname }}：</a
          >{{ item.content }}
          <div>
            <span>{{ item.time | formatDatePing }}</span>
            <div>
              <p><i class="iconfont icon-aixin"></i></p>
              <span>|</span>
              <a href="javascript:;">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="  prev, pager, next "
      :total="total"
      :current-page="pageNum"
    >
    </el-pagination>
    <!-- /分页 -->
  </div>
</template>

<script>
import { getListPing } from "@/api/toplist.js";
export default {
  props: {
    active: {
      type: [String, Number],
      required: true,
    },
  },
  created() {
    this.TopXiang();
  },
  mounted() {},
  data() {
    return {
      dataList: [],
      total: 0,
      before: 0,
      pageSize: 20,
      pageNum: 1,
    };
  },
  watch: {
    active() {
      this.TopXiang();
    },
  },
  methods: {
    TopXiang() {
      getListPing(this.active, {
        offset: this.pageSize * this.pageNum - 1,
        before: this.pageSize * (this.pageNum - 1) > 5000 ? this.before : 0,
      }).then((data) => {
        data = data.data;
        if (!data.comments) return;
        this.dataList = data.comments;
        this.total = data.total;
        let size = data.comments?.length;
        this.before = size ? data.comments[size - 1].time : 0;
      });
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.TopXiang();
    },
  },
};
</script>

<style lang="less" scoped>
.commentlist-inner {
  padding: 40px;

  .biaoti {
    display: flex;
    align-items: center;
    height: 33px;
    border-bottom: 2px solid #c20c0c;

    h3 {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
      margin-right: 40px;
    }
    span {
      color: #666;
    }
  }
  .mypingl {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    img {
      width: 50px;
      height: 50px;
    }
    .kuang {
      flex: 1;
      margin-left: 20px;
      position: relative;
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        display: block;
        margin: 0;
        padding: 10px;
        padding-right: 0;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        resize: none;
        outline: none;
      }
      .jiao {
        position: absolute;
        border: 1px solid transparent;
        width: 10px;
        height: 10px;
        border-left-color: #cdcdcd;
        border-top-color: #cdcdcd;
        background-color: #fff;
        transform: rotate(-45deg);
        top: 12px;
        left: -5px;
        z-index: 1;
      }
      .xiaolian {
        margin-top: 10px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .el-button {
          margin-left: 10px;
        }
      }
    }
  }

  .jingcai {
    h3 {
      height: 20px;
      border-bottom: 1px solid #cfcfcf;
    }
  }

  .user:first-child {
    border-top: none;
  }
  .user {
    padding: 15px 0;
    border-top: 1px dotted #ccc;
    display: flex;

    img {
      width: 50px;
      height: 50px;
    }
    .wen {
      margin-left: 10px;
      width: 100%;
      overflow: hidden;
      line-height: 20px;
      color: #000;
      .username {
        color: #0c73c2;
        text-decoration: none;
      }
      div {
        display: flex;
        justify-content: space-between;
        color: #aaa;

        div {
          span {
            margin: 0 8px;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>