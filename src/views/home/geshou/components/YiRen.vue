<template>
  <div class="yi-ren">
    <h2><i> </i>薛之谦简介</h2>
    <p class="tou">
      {{ data.briefDesc }}
    </p>
    <div v-for="(item, index) in data.introduction" :key="index">
      <h2>{{ item.ti }}</h2>
      <p>{{ item.txt }}</p>
    </div>
  </div>
</template>

<script>
import { getDesc } from "@/api/mini/geshou.js";
export default {
  created() {
    this.id = this.$route.query.id || this.id;
    console.log(this.$route.query.id);
    this.getList();
  },
  data() {
    return {
      id: 0,
      data: {},
    };
  },
  methods: {
    async getList() {
      const { data } = await getDesc({
        id: this.id,
      });
      this.data = data;
    },
  },
};
</script>


<style lang="less" scoped>
.yi-ren {
  h2 {
    margin: 28px 0 8px 0;
    color: #333;
    font-size: 14px;
    i {
      display: inline-block;
      height: 14px;
      width: 3px;
      margin-right: 7px;
      background: #c10d0c;
      vertical-align: middle;
    }
  }
  p {
    line-height: 25px;
    text-indent: 0;
    color: #666;
  }
  .tou {
    text-indent: 2em;
  }
}
</style>