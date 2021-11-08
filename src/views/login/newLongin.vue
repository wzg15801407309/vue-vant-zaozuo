<!-- 新用户注册 -->
<template>
  <div class="page-newlogin">
    <NavBar>
      <div slot="nav-left">
        <van-icon name="arrow-left" color="black" size="20" @click="goto" />
      </div>
    </NavBar>
    <div class="newlogin-title">欢迎加入造作新家</div>
    <div class="newlogin-content">
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
        <div style="margin-top: 15px">
          <van-button block color="#d1d1d1" native-type="submit">
            注册
          </van-button>
        </div>
        <div class="newlogin-protocol">
          注册代表你已同意<span>《造作新家用户协议》</span>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  name: "newlogin",
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
    goto() {
      // 返回上一个页面
      this.$router.go(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onClick(val) {
      console.log(val);
    },

  },
};
</script>

<style lang="less" scoped>
.page-newlogin {
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  /deep/.van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .newlogin-title {
    padding-top: 70px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
  }
  .newlogin-content {
    padding-top: 30px;
    width: 68%;
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
  }
  .newlogin-footer {
    width: 100%;
    position: absolute;
    bottom: 50px;
    font-size: 15px;
    color: #8f8f8f;
    text-align: center;
    padding: 10px 0;
  }

  /deep/.van-button--default {
    font-size: 15px;
    color: #d1d1d1;
  }
  .newlogin-protocol {
    width: 100%;
    color: #d1d1d1;
    padding: 15px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    span {
      margin-left: 5px;
      color: #000;
      font-size: 14px;
    }
  }
}
</style>
