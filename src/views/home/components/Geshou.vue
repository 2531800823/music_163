<template>
  <div class="geshou-inner">
    <div class="left">
      <Nav :title="data"></Nav>
    </div>

    <div class="right">
      <NavGeshou :data="data"></NavGeshou>
    </div>
  </div>
</template>

<script>
import NavGeshou from "@/components/NavGeshou.vue";
import Nav from "@/components/Nav.vue";
export default {
  data() {
    return {
      data: [
        {
          name: "华语",
          id: "7",
        },
        {
          name: "欧美",
          id: "96",
        },
        {
          name: "日本",
          id: "8",
        },
        {
          name: "韩国",
          id: "16",
        },
        {
          name: "其他",
          id: "0",
        },
      ],
    };
  },
  components: {
    Nav,
    NavGeshou,
  },
};
</script>

<style lang="less">
.geshou-inner {
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ddd;
  a {
    text-decoration: none;
  }
  .left {
    background-color: #eee;
    padding: 0 10px 40px;
  }
  .right {
    background-color: #fff;
    border-left: none;
    padding: 40px;
    flex: 1;
  }
}
</style>