<!-- 新用户注册 -->
<template>
  <div class="page-chanePasswords">
    <NavBar>
      <div slot="nav-left">
        <van-icon name="arrow-left" color="black" size="20" @click="goto" />
      </div>
    </NavBar>
    <div class="chanePasswords-title">设置密码</div>
    <div class="chanePasswords-content">
      <van-form @submit="onSubmit">
        <van-row>
          <van-col :span="24">
            <van-field v-model="phone" center placeholder="请输入手机号/邮箱" />
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
        <van-row>
          <van-col :span="24">
            <van-field
              v-model="phone"
              center
              placeholder="请输入密码(6-12位数字和字母组合)"
            />
          </van-col>
        </van-row>
        <div style="margin-top: 30px">
          <van-button block color="#d1d1d1" native-type="submit">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  name: "chanePasswords",
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
.page-chanePasswords {
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  /deep/.van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .chanePasswords-title {
    padding-top: 70px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
  }
  .chanePasswords-content {
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
  .chanePasswords-footer {
    width: 100%;
    position: absolute;
    bottom: 50px;
    font-size: 15px;
    color: #8f8f8f;
    text-align: center;
    padding: 10px 0;
  }
  /deep/.van-row {
    margin-top: 10px;
    .van-col {
      border-bottom: 1px solid #ebedf0;
      .van-button--default {
        color: #d1d1d1;
        font-size: 15px;
      }
    }
  }
  /deep/.van-button--default {
    font-size: 15px;
  }
}
</style>
