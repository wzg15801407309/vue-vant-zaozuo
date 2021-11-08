<!-- 登录页面 -->
<template>
  <div class="page-login">
    <NavBar>
      <div slot="nav-left">
        <van-icon name="cross" color="black" size="20" />
      </div>
    </NavBar>
    <div class="login-title">ZAOZUO 造作新家</div>
    <div class="login-content">
      <van-tabs @click="onClick">
        <van-tab title="快捷登录">
          <van-form @submit="onSubmit">
            <van-row>
              <van-col :span="24">
                <van-field v-model="phone" center placeholder="请输入手机号" />
              </van-col>
            </van-row>
            <van-row>
              <van-col :span="14" style="margin-right: 10px">
                <van-field v-model="sms" center placeholder="请输入验证码" />
              </van-col>
              <van-col :span="9">
                <van-button style="width: 100%" plain hairline>
                  获取验证码
                </van-button>
              </van-col>
            </van-row>
            <div style="margin-top: 10px">
              <van-button block color="#d1d1d1" native-type="submit">
                登陆
              </van-button>
            </div>
          </van-form>
        </van-tab>
        <van-tab title="账号密码">
          <van-form @submit="onSubmit">
            <van-row>
              <van-col :span="24">
                <van-field
                  v-model="username"
                  center
                  placeholder="请输入手机号/邮箱"
                />
              </van-col>
            </van-row>
            <van-row>
              <van-col :span="24" style="margin-right: 10px">
                <van-field
                  v-model="passwords"
                  center
                  placeholder="请输入密码"
                />
              </van-col>
            </van-row>
            <div style="margin-top: 10px">
              <van-button block color="#d1d1d1" native-type="submit">
                登陆
              </van-button>
            </div>
            <div class="changePassWords" @click="changePassWords">忘记密码</div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
    <div class="login-footer" @click="newUserLogin">新用户注册</div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  name: "login",
  components: {
    NavBar,
  },
  data() {
    // 这里存放数据
    return {
      phone: "",
      sms: "",
      username: "",
      passwords: "",
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  // 方法集合
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClick(val) {
      console.log(val);
    },
    newUserLogin() {
      // 进入新用户注册界面 
      this.$router.push({ path: "/newLongin" });
    },
    changePassWords() {
      this.$router.push({ path: "/changePassWords" });

    }
  },
};
</script>

<style lang="less" scoped>
.page-login {
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  /deep/.van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .login-title {
    padding-top: 70px;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
  }
  .login-content {
    padding-top: 20px;
    width: 68%;
    /deep/.van-tab {
      padding: 0px;
      color: #8f8f8f;
      font-size: 16px;
      justify-content: left;
      flex: unset;
      margin-right: 15px;
      .van-tab__text {
        padding-bottom: 8px;
        font-weight: 500;
      }
    }
    /deep/.van-row {
      margin-top: 10px;
      .van-cell {
        padding: 0;
        font-size: 16px;
        .van-field__control {
          padding: 10px 0;
          border-bottom: 1px solid #ebedf0;
        }
        .van-field__control:focus {
          border-bottom: 1px solid #000;
        }
      }
    }
    /deep/.van-tab--active {
      color: #000;
      .van-tab__text {
        border-bottom: 2px solid #000;
      }
    }
    /deep/.van-tabs__line {
      display: none;
    }
  }
  .login-footer {
    width: 100%;
    position: absolute;
    bottom: 50px;
    font-size: 15px;
    color: #8f8f8f;
    text-align: center;
  }
  /deep/.van-row {
    margin-top: 10px;
    .van-col {
      border-bottom: 1px solid #ebedf0;
      .van-button--default {
        color: #d1d1d1;
        font-size: 14px;
      }
    }
  }
  /deep/.van-button--default {
    font-size: 14px;
  }
  .changePassWords {
    width: 100%;
    color: #d1d1d1;
    padding: 15px 0;
    text-align: right;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
