<template>
  <div id="app">
    <div id="nav">
      <div class="tou">
        <a class="logo" hidefocus="true" href="javascript:;">网易音乐</a>
        <div class="xiala"></div>
        <router-link
          to="/"
          :class="{
            active:
              $route.path === '/' || $route.path.indexOf('/discover') !== -1,
          }"
        >
          <span>发现音乐</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/mymusic">
          <span>我的音乐</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/firend">
          <span>朋友</span>
          <span class="col"></span>
        </router-link>
        <router-link to="/shop">
          <span>下载客户端</span>
          <span class="col"></span>
        </router-link>
        <!-- 占用层 -->
        <div class="zhanyong"></div>
        <!-- /占用层 -->
        <!-- 搜索 -->
        <div class="search">
          <el-autocomplete
            v-model="value"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            suffix-icon="el-icon-search"
          >
            <template slot-scope="{ item }">
              <span class="addr">
                <i
                  class="iconfont"
                  :class="
                    item.type == 0
                      ? 'icon-yinle'
                      : item.type == 1
                      ? 'icon-geren'
                      : item.type == 2
                      ? 'icon-zhuanji'
                      : 'icon-cuowu'
                  "
                ></i>
                {{ item.name }}
              </span>
              <span v-if="item.id && (item.type == 0 || item.type == 3)">{{
                "-" + item.nameMusic
              }}</span>
            </template>
          </el-autocomplete>
        </div>
        <a class="login" href="javascript:;" @click="isShow = true">登录</a>
      </div>
    </div>
    <router-view />
    <MusicFooter></MusicFooter>
    <!-- 登录框 -->
    <el-dialog title="登录" :visible.sync="isShow" width="30%">
      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        class="biaodan"
        ref="ruleForm"
        label-width="70px"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <!-- /登录表单 -->

      <span slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- /登录框 -->
  </div>
</template>
<script>
import MusicFooter from "@/components/MusicFooter.vue";
import { getKeyWords, getHotKeyWords } from "@/api/search.js";
import { Login } from "@/api/login.js";
import { mapActions } from "vuex";
import md5 from "js-md5";
export default {
  created() {
    this.getLishi();
  },
  components: {
    MusicFooter,
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error("请输入正确的手机号"));
      }
      callback();
    };
    return {
      value: "",
      timer: null,
      results: [],
      isShow: false,
      ruleForm: {
        phone: "18336110013",
        password: "liu5211314",
      },
      rules: {
        phone: [
          { required: false, trigger: "blur", message: "手机号不能为空" },
          { validator: checkAge, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("user", ["denglu"]),
    querySearchAsync(str, cb) {
      // console.log(this.value.trim());
      if (!this.value?.trim()) return cb(this.results);
      console.log(1);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getList(cb);
      }, 1000);
    },
    // 点击搜索
    handleSelect(val) {
      console.log(val);
    },
    // 获取联想
    async getList(cb) {
      const { data } = await getKeyWords(this.value);
      console.log(data);
      this.results = this.formatData(data);
      if (this.results.length === 0)
        this.results.push({
          type: 4,
          name: "找不到",
        });
      cb(this.results);
      console.log(this.results);
    },
    // 处理获取联想数据
    formatData(data) {
      data = data.result;
      if (!data) return null;
      let obj = [];
      // 歌曲过滤
      if (data.albums?.length) {
        for (let i = 0; i < data.albums.length; i++) {
          obj.push({
            type: 0,
            id: data.albums[i].id,
            name: data.albums[i].name,
            nameMusic: data.albums[i].artist.name,
            idMusic: data.albums[i].artist.id,
          });
        }
      }

      // 歌手过滤
      if (data.artists?.length) {
        for (let i = 0; i < data.artists.length; i++) {
          obj.push({
            type: 1,
            id: data.artists[i].id,
            name: data.artists[i].name,
          });
        }
      }

      // 专辑过滤
      if (data.songs?.length) {
        for (let i = 0; i < data.songs.length; i++) {
          obj.push({
            type: 2,
            id: data.songs[i].album.id,
            name: data.songs[i].album.name,
            nameMusic: data.songs[i]?.artists[0].name,
            idMusic: data.songs[i]?.artists[0].id,
          });
        }
      }

      return obj;
    },
    // 获取热门联想
    async getLishi() {
      const { data } = await getHotKeyWords();
      this.utilHot(data);
      console.log(data);
    },
    // 处理热门联想
    utilHot(data) {
      data = data.result;
      for (let i = 0; i < data.hots.length; i++) {
        this.results.push({
          type: 0,
          name: data.hots[i].first,
        });
      }
    },
    // 提交表单
    submit() {
      this.$refs.ruleForm.validate(async (flag) => {
        if (flag) {
          let md5_password = md5(this.ruleForm.password);
          this.denglu({
            phone: this.ruleForm.phone,
            md5_password,
          });
          // const { data } = await Login({

          // });
          // console.log(data);
          this.isShow = false;
        }
      });
    },
  },
};
</script>

<style lang="less">
@import url("https://at.alicdn.com/t/font_2916485_j9k5td9hyx.css");
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(245, 245, 245);
}
li {
  list-style: none;
}
#app {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}

#nav {
  position: relative;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;

  .tou {
    margin: 0 auto;
    width: 1100px;
    height: 100%;
    display: flex;
    .logo {
      padding: 0;
      width: 157px;
      height: 100%;
      padding-right: 20px;
    }
    a {
      font-size: 14px;
      padding: 0 19px;
      line-height: 70px;
      text-align: center;
      color: #ccc;
      text-decoration: none;
      position: relative;
    }
  }
  .router-link-exact-active {
    color: #fff;
    background: #000;
    .col {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      overflow: hidden;
      background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
      background-position: -226px 0;
    }
  }

  a {
    &.active {
      color: #fff;
      background: #000;
      .col {
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
        background-position: -226px 0;
      }
    }
  }
}
.logo {
  width: 157px;
  height: 100%;
  padding-right: 20px;
  text-indent: -9999px;
  background-image: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?f7c167d667235e711c82cae876552cd4");
}
.xiala {
  position: absolute;
  z-index: 0;
  top: 70px;
  left: 0;
  width: 100%;
  height: 5px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.zhanyong {
  flex: 1;
}
.search {
  align-self: center;
  i {
    font-size: 18px;
  }
  .addr {
    i {
      margin-right: 10px;
    }
  }
}
.biaodan {
  width: 80%;
  margin: 0 auto;
}
</style>
