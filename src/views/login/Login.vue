<template>
  <div class="login-inner">
    <div class="login">
      <a v-if="!user" href="javascript:;" @click="isShow = true">登录</a>
      <div class="user" v-else>
        <el-dropdown trigger="click" @command="selectzhong" placement="bottom">
          <span class="el-dropdown-link">
            <img :src="user.profile.avatarUrl" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="xinxi">
              <i class="el-icon-user"></i> 个人信息
            </el-dropdown-item>
            <el-dropdown-item command="out">
              <i class="el-icon-switch-button"></i> 退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!-- 登录框 -->
    <el-dialog
      title="登录"
      :visible.sync="isShow"
      width="30%"
      @close="closeDia"
    >
      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        class="biaodan"
        ref="ruleForm"
        label-width="70px"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input
            type="number"
            maxlength="11"
            v-model="ruleForm.phone"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="yanzheng" label="验证码" prop="yan">
          <el-input type="text" maxlength="4" v-model="ruleForm.yan">
            <el-button @click="submitDuan" :disabled="fasong" slot="append"
              >获取验证码</el-button
            >
          </el-input>
        </el-form-item>
        <el-form-item v-else label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"> </el-input>
        </el-form-item>
        <span class="qiehuan" @click="yanmi"
          >{{ yanzheng ? "密" : "验证" }}码登录</span
        >
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import md5 from "js-md5";
export default {
  created() {},
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error("请输入正确的手机号"));
      }
      callback();
    };
    return {
      timer: null,
      isShow: false,
      yanzheng: false,
      fasong: false,
      timer: null,
      ruleForm: {
        phone: "18336110013",
        password: "liu5211314",
        yan: "",
      },
      rules: {
        phone: [
          { required: true, trigger: "blur", message: "手机号不能为空" },
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
        yan: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "验证码输入错误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("user", ["denglu", "yanDeng"]),
    ...mapMutations("user", ["removeToken"]),
    // 提交表单
    submit() {
      if (this.yanzheng) {
        this.$refs.ruleForm.validate(async (flag) => {
          console.log(flag);

          if (flag) {
            let msg = await this.denglu({
              phone: this.ruleForm.phone,
              captcha: this.ruleForm.yan,
            });
            // console.log(msg);
            if (msg) {
              // this.$message.error(msg);
            } else {
              this.isShow = false;
              this.$message({
                message: "验证码：登录成功",
                type: "success",
              });
            }
          }
        });
      } else {
        this.$refs.ruleForm.validate(async (flag) => {
          if (flag) {
            let md5_password = md5(this.ruleForm.password);
            let msg = await this.denglu({
              phone: this.ruleForm.phone,
              md5_password,
            });
            if (msg) {
              this.$message.error(msg);
            } else {
              this.isShow = false;
              this.$message({
                message: "登录成功",
                type: "success",
              });
            }
          }
        });
      }
    },
    //去主页还是退出
    selectzhong(val) {
      if (val === "out") {
        this.removeToken();
        // 退出
      } else if (val === "xinxi") {
        // 跳转登录页
        this.$router.push("/user");
      }
    },
    // 验证码登录还是手机号
    yanmi() {
      this.yanzheng = !this.yanzheng;
    },
    // 关闭登录框 清空表单
    closeDia() {
      this.$refs.ruleForm.resetFields();
      this.yanzheng = false;
      this.ruleForm.yan = "";
    },
    // 发送验证码
    submitDuan() {
      this.$refs.ruleForm.validateField("phone", async (flag) => {
        if (!flag) {
          let msg = await this.yanDeng({
            phone: this.ruleForm.phone,
          });
          if (msg) {
            this.$message.error(msg);
          } else {
            this.$message({
              message: "发送成功",
              type: "success",
            });
            this.fasong = true;
            if (!this.timer) {
              this.timer = setTimeout(() => {
                this.false = true;
                this.timer = null;
              }, 60000);
            }
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-inner {
  padding: 0 20px;
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .user {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }

  .qiehuan {
    padding-left: 70px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>