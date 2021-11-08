<template>
  <div class="yi-ren">
    <h2><i> </i>{{ name }}简介</h2>
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
import { getDesc, getGeShou } from "@/api/mini/geshou.js";
export default {
  created() {
    this.id = this.$route.query.id || this.id;
    this.getList();
    this.getName();
  },
  data() {
    return {
      id: 0,
      data: {},
      name: "",
    };
  },
  methods: {
    async getList() {
      const { data } = await getDesc({
        id: this.id,
      });
      this.data = data;
    },
    async getName() {
      const { data } = await getGeShou(this.id);
      this.name = data.artist.name;
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