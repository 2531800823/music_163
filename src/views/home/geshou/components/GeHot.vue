<template>
  <div class="ge-hot">
    <div class="title">
      <div>
        <a href="javascript:;" class="play">
          <i>
            <em></em>
            播放
          </i>
        </a>
        <a href="javascript:;" class="add"></a>
        <a href="javascript:;" class="shou">
          <i>收藏热门50</i>
        </a>
      </div>
      <!-- <div>
        <el-select class="select" v-model="value" placeholder="热门单曲">
          <el-option
            v-for="(item, index) in select"
            :key="index"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div> -->
    </div>

    <div class="list">
      <ul class="">
        <li class="tou">
          <div>序号</div>
          <div class="gequ">歌曲</div>
          <div>歌手</div>
          <div>专辑</div>
          <div>时长</div>
        </li>
        <li v-for="(item, index) in musicList" :key="item.id">
          <div class="is-show">
            <u>{{ index + 1 }}</u
            ><i class="el-icon-video-play"></i>
          </div>

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
  </div>
</template>

<script>
import { getGeShou } from "@/api/mini/geshou.js";
export default {
  created() {
    this.id = this.$route.query.id || this.id;
    this.getList();
  },
  data() {
    return {
      select: ["热门单曲", "作词作品", "作曲作品"],
      value: "热门单曲",
      musicList: [],
      id: 0,
    };
  },
  methods: {
    async getList() {
      const { data } = await getGeShou(this.id);
      this.musicList = data.hotSongs;
    },
  },
};
</script>

<style lang="less" scoped>
.ge-hot {
  .title {
    margin: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    a,
    i,
    em {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      line-height: 32px;
      vertical-align: top;
      text-align: center;
      cursor: pointer;
      background: url("https://s2.music.126.net/style/web2/img/button2.png?8d028f4ae60c39ce091ca36082d150cc")
        no-repeat 0 9999px;
    }
    a {
      color: #fff;
      padding: 0 5px 0 0;
      background-position: right -428px;
      i {
        padding: 0 7px 0 8px;
        color: #fff;
        font-style: normal;
        background-position: 0 -387px;
      }
      em {
        width: 20px;
        height: 18px;
        margin: 6px 2px 2px 0;
        background-position: 0 -1622px;
        overflow: hidden;
      }
      &:hover {
        background-position: right -510px;
      }
      &:hover i {
        background-position: 0 -469px;
      }
      &:hover em {
        background-position: -28px -1622px;
      }
    }
    .add {
      margin-right: 5px;
      font-family: simsun, \5b8b\4f53;
      width: 31px;
      white-space: nowrap;
      margin-left: -3px;
      padding-right: 0;
      height: 31px;
      background-position: 0 -1588px;
      &:hover {
        background-position: 0 -1588px;
      }
    }
    .shou {
      margin-right: 6px;
      background-position: right -1020px;
      font-family: simsun, \5b8b\4f53;
      color: #333;
      i {
        background-position: 0 -977px;
        padding-right: 2px;
        padding-left: 28px;
        padding: 0 7px 0 30px;
        color: #333;
      }
      &:hover {
        background-position: right -1106px;
      }
      &:hover i {
        background-position: 0 -1063px;
      }
    }
  }
  /deep/ .select {
    width: 110px;
    .el-input {
      .el-input__inner {
        height: 31px;
      }
      .el-input__icon {
        line-height: 31px;
        margin-right: 5px;
      }
    }
  }

  .list {
    ul {
      //   border: 1px solid #d9d9d9;
      .tou {
        color: rgb(100, 100, 100);
        div {
          text-align: center;
          flex: 1;
          font-size: 16px;
          line-height: 50px;

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
        .gequ {
          display: block;
        }
      }
      li {
        &:nth-of-type(2n) {
          background-color: hsla(0, 5.9%, 90%, 0.5);
        }
        &:hover {
          background-color: hsla(0, 3%, 80.6%, 0.5) !important;
        }
        &:first-child {
          background-color: #fff !important;
        }
        &:hover .is-show u {
          display: none;
        }
        &:hover .is-show i {
          display: inline;
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

        .is-show {
          u {
            text-decoration: none;
          }
          i {
            color: red;
            font-size: 20px;
            display: none;
          }
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