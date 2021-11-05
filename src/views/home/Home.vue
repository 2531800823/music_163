<template>
  <div class="home">
    <div class="nav">
      <div class="toubu">
        <router-link to="/" exact>推荐</router-link>
        <router-link to="/discover/top">排行榜</router-link>
        <router-link to="/discover/gedan">歌单</router-link>
        <router-link to="/discover/dian">电台</router-link>
        <router-link to="/discover/geshou">歌手</router-link>
        <router-link to="/discover/newdie">新碟上架</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  position: relative;
  .toubu {
    box-sizing: border-box;
    z-index: 100;
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    padding-left: 180px;
    display: flex;
    align-items: center;
    a {
      text-align: center;
      padding: 0 13px;
      margin: 3px 17px 0;
      border-radius: 20px;
      line-height: 21px;
      color: #fff;
      font-size: 12px;
      text-decoration: none;

      &:hover {
        background: #9b0909;
      }
    }
  }
  .router-link-exact-active,
  .router-link-active {
    background: #9b0909;
  }
}
</style>
