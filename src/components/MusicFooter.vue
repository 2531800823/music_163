<template>
  <div class="footer">
    <div class="box">
      <div class="item">
        <div class="left">
          <p class="link">
            <a href="#" class="tit">服务条款</a>
            <span class="line">|</span>
            <a href="#" class="tit">隐私政策</a>
            <span class="line">|</span>
            <a href="#" class="tit">儿童隐私政策</a>
            <span class="line">|</span>
            <a href="#" class="tit">版权投诉指引</a>
            <span class="line">|</span>
            <a href="#" class="tit">意见反馈</a>
            <span class="line">|</span>
            <a href="#" class="tit">广告合作</a>
            <span class="line">|</span>
          </p>
          <p class="title">
            <span> 网易公司版权所有©1997-2021</span>
            <span> 杭州乐读科技有限公司运营：</span>
            <a href="#">浙网文[2021] 1186-054号</a>
          </p>
          <p class="title">
            <span> 违法和不良信息举报电话：0571-89853516</span>
            <span> 举报邮箱：</span>
            <a href="#"> ncm5990@163.com</a>
          </p>
          <p class="title">
            <a href="#"> 粤B2-20090191-18 </a>
            <a href="#"> 工业和信息化部备案管理系统网站</a>
            <a href="#">
              <span class="logo"></span>
              浙公网安备 33010902002564号</a
            >
          </p>
        </div>
        <div class="right">
          <ul class="center">
            <li class="unit">
              <a class="logonew" href="#"></a>
              <span class="tt"></span>
            </li>
            <li class="unit">
              <a class="logonew logonew1" href="#"></a>
              <span class="tt tt1"></span>
            </li>
            <li class="unit">
              <a class="logonew logonew2" href="#"></a>
              <span class="tt tt2"></span>
            </li>
            <li class="unit">
              <a class="logonew logonew3" href="#"></a>
              <span class="tt tt3"></span>
            </li>
            <li class="unit">
              <a class="logonew logonew4" href="#"></a>
              <span class="tt tt4"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.box {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
}
.item {
  overflow: hidden;
}
.item .left {
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  font-size: 12px;
}
.item .left .link .tit {
  color: #999;
  cursor: pointer;
  text-decoration: none;
}
.item .left .link .line {
  margin: 0 8px 0 10px;
  color: #c2c2c2;
}
.item .left .title,
a {
  color: #666;
  cursor: pointer;
  text-decoration: none;
}
.item .left a:hover {
  text-decoration: underline;
}
.item .left .title .logo {
  width: 14px;
  height: 14px;
  background: url("https://s2.music.126.net/style/web2/img/3rd/police.png?89e6f838a39c109ee09474d3eb126335")
    no-repeat;
  /* background-size: cover; */
  display: inline-block;
  vertical-align: -2px;
  padding: 0;
  padding-right: 5px;
  margin: 0 3px;
}
.item .right {
  width: 420px;
  margin-top: 33px;
  float: right;
}
.item .right .center {
  width: 420px;
}
.item .right .center .unit {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}
.item .right .center .unit:first-child {
  margin-left: 0;
}
.item .right .center .unit .logonew {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?3580a7f7af2fb207a52fde4acc25d7c8)
    no-repeat;
  background-size: 110px 552px;
  background-position: -63px -456.5px;
}
.item .right .center .unit .logonew1 {
  background-position: -63px -101px;
}
.item .right .center .unit .logonew2 {
  background-position: 0px 0px;
}
.item .right .center .unit .logonew3 {
  background-position: -60px -50px;
}
.item .right .center .unit .logonew4 {
  background-position: -0px -101px;
}
.item .right .center .unit .tt {
  display: inline-block;
  margin: 5px 5px 0;
  height: 14px;
  margin-left: -6px;
  width: 72px;
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?a75377ef8ee0ca85bf82e07181122b45)
    no-repeat;
  background-size: 180px 139px;
  background-position: 0 -108px;
}
.item .right .center .unit .tt1 {
  background-position: 8px -91px;
}
.item .right .center .unit .tt2 {
  background-position: 8px 0px;
}
.item .right .center .unit .tt3 {
  background-position: 10px -54px;
}
.item .right .center .unit .tt4 {
  background-position: 8px -72px;
}
</style>