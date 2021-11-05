<template>
  <div class="top-inner">
    <div class="left">
      <div class="shang">
        <h2>云音乐特色榜</h2>
        <ul>
          <li
            v-for="item in filterList"
            :key="item.id"
            :class="[active == item.id ? 'active' : '']"
            @click="editActive(item)"
          >
            <div class="img">
              <img :src="item.coverImgUrl" alt="" />
            </div>
            <div class="font">
              <p>{{ item.name }}</p>
              <span>{{ item.updateFrequency }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="shang">
        <h2>全球媒体榜</h2>
        <ul>
          <li
            v-for="item in data"
            :key="item.id"
            :class="[active == item.id ? 'active' : '']"
            @click="editActive(item)"
          >
            <div class="img">
              <img :src="item.coverImgUrl" alt="" />
            </div>
            <div class="font">
              <p>{{ item.name }}</p>
              <span>{{ item.updateFrequency }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <TopXiang
      class="rigth"
      :topData="topData"
      :gengxin="gengxin"
      :active="active"
    ></TopXiang>
  </div>
</template>

<script>
import TopXiang from "./Topxiang.vue";
import { getTopList, getTopXiang } from "@/api/toplist.js";
export default {
  created() {
    this.active = this.$route.query.id || "";
    this.getList();
  },
  data() {
    return {
      data: [],
      filterList: [],
      active: "",
      topData: {},
      gengxin: "",
    };
  },
  methods: {
    async getList() {
      const { data } = await getTopList();
      this.active = this.active || data.list[0].id;
      this.filterList = data.list.splice(0, 4);
      this.gengxin = data.list[0].updateFrequency;
      this.data = data.list;
    },
    async TopXiang() {
      const { data } = await getTopXiang(this.active);
      this.topData = data;
      console.log(data);
    },
    editActive(val) {
      this.active = val.id;
    },
  },
  components: {
    TopXiang,
  },
};
</script>

<style lang="less" scoped>
.top-inner {
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ddd;
  a {
    text-decoration: none;
  }
  .left {
    background-color: #f9f9f9;
    border-right: 1px solid #ddd;
    padding-top: 40px;
    width: 240px;
    h2 {
      padding: 0 10px 12px 15px;
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }

    ul {
      cursor: pointer;
      margin-bottom: 20px;
      li {
        display: flex;
        padding: 10px 0 10px 20px;
        height: 42px;
        .img {
          padding-right: 10px;
          cursor: pointer;
          vertical-align: middle;
          img {
            width: 40px;
            height: 40px;
          }
        }
        .font {
          p {
            width: 150px;
            overflow: hidden;
            margin-top: 2px;
            margin-bottom: 8px;
            color: #000;
          }
          span {
            color: #999;
          }
        }
        &:hover {
          background-color: #f4f2f2;
        }
      }
    }
  }
  .active {
    background: #e6e6e6;
  }
  .rigth {
    background-color: #fff;
    border-left: none;
    flex: 1;
  }
}
</style>
