<template>
  <div class="geshou-item">
    <h1>{{ title }}</h1>

    <ul class="biao">
      <li>
        <a
          :class="[asAcitve === 0 ? 'asActive' : '']"
          @click="editActive(0)"
          href="javascript:;"
          >热门</a
        >
      </li>
      <li v-for="(item, index) in 26" :key="index">
        <a
          href="javascript:;"
          :class="[asAcitve === item ? 'asActive' : '']"
          @click="editActive(item)"
        >
          {{ String.fromCharCode(index + 65) }}
        </a>
      </li>
      <li>
        <a
          :class="[asAcitve === 27 ? 'asActive' : '']"
          href="javascript:;"
          @click="editActive(27)"
          >其他</a
        >
      </li>
    </ul>

    <ul class="zhu">
      <li
        v-for="(item, index) in filterList"
        :key="item.id"
        @click="toXiangQing(item.id)"
      >
        <img :src="item.img1v1Url" :alt="item.name" v-if="index < 10" />
        <div>
          <p>{{ item.name }}</p>
          <i v-if="item.accountId" class="el-icon-user"></i>
        </div>
      </li>
      <li class="zhongjian"></li>
      <li v-for="item in lastList" :key="item.id">
        <p>
          {{ item.name + " " }}
          <i v-if="item.accountId" class="el-icon-user"></i>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getGeshou } from "@/api/user";
export default {
  created() {
    this.$bus.$on("shuju", (val, str) => {
      let arr = val.split("-");
      this.bigIndex = arr[0];
      this.smallIndex = arr[1];
      this.title = str;
      this.getList();
    });
  },
  beforeDestroy() {
    this.$bus.$off("shuju");
  },
  data() {
    return {
      active: "",
      bigIndex: 0,
      smallIndex: 0,
      title: "",
      asAcitve: 0,
      dataList: [],
    };
  },
  props: ["data"],
  computed: {
    geIndex() {
      return this.active.split("-")[0];
    },
    type() {
      if (this.asAcitve === 0) return -1;
      if (this.asAcitve === 27) return 0;
      return String.fromCharCode(this.asAcitve + 64);
    },
    filterList() {
      return this.dataList.filter((item, index) => {
        if (index < 10) {
          return true;
        }
        return false;
      });
    },
    lastList() {
      return this.dataList.filter((item, index) => {
        if (index < 10) {
          return false;
        }
        return true;
      });
    },
  },
  methods: {
    // getList() {
    //   axios
    //     .get(
    //       `http://localhost:3000/artist/list?type=${this.smallIndex}&area=${this.bigIndex}&initial=${this.type}`
    //     )
    //     .then((res) => {
    //       this.dataList = res.data.artists;
    //       console.log("ok");
    //     });
    // },
    // 修改英文下标
    editActive(val) {
      this.asAcitve = val;
      this.getList();
    },
    async getList() {
      const { data } = await getGeshou({
        type: this.smallIndex,
        area: this.bigIndex,
        initial: this.type,
      });
      this.dataList = data.artists;
    },
    toXiangQing(val) {
      this.$router.push("/discover/artist?id=" + val);
    },
  },
};
</script>

<style lang="less" scoped>
h1 {
  font-size: 24px;
  text-align: left;
  font-weight: normal;
  padding-bottom: 10px;
  border-bottom: 2px solid #c20c0c;
}
.biao {
  display: flex;
  margin-top: 30px;
  li {
    a {
      display: block;
      width: 24px;
      line-height: 24px;
      text-align: center;
      color: #333;
      cursor: pointer;
    }
    &:first-of-type a {
      width: 45px;
      font-size: 12px;
    }
    &:last-of-type a {
      width: 45px;
      font-size: 12px;
    }
    .asActive {
      background: #c20c0c;
      border-radius: 2px;
      color: #fff;
    }
  }
}
.zhu {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  li {
    cursor: pointer;
    box-sizing: content-box;
    width: 130px;
    padding: 0 15px 30px 0;

    &:nth-of-type(5n) {
      padding: 0 0 30px 0px;
    }
    img {
      width: 130px;
      height: 130px;
      border: 1px solid #aaa;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
    p {
      font-size: 12px;
    }
    .el-icon-user {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #c20c0c;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      line-height: 20px;
    }
  }
  .zhongjian {
    width: 100%;
    padding: 0;
    height: 10px;
    margin-bottom: 15px;
    border-bottom: 1px dotted #ddd;
  }
}
</style>