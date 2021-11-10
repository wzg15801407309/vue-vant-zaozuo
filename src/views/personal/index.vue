<!-- personal -->
<template>
  <div class="page-personal">
    <NavBar>
      <div slot="nav-right">
        <van-icon name="comment-o" size="20" color="#010101" />
      </div>
    </NavBar>
    <div class="personal-content">
      <div class="personal-title">
        <div class="title-left">
          <van-uploader
            v-model="heade"
            :before-read="beforeRead"
            :max-count="1"
          />
        </div>
        <div class="title-right">
          <div class="title-right-up">131****0803</div>
          <div class="title-right-down">
            <van-icon name="new-arrival" color="#f9c148" size="20px" />
            <span>新进造作生活家</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="personal-tag">
        <van-grid column-num="5" :border="false">
          <van-grid-item icon="balance-pay" text="未付款" />
          <van-grid-item icon="peer-pay" text="已付款" />
          <van-grid-item icon="completed" text="已完成" />
          <van-grid-item icon="other-pay" text="其他渠道" />
          <van-grid-item icon="photo-o" text="嗮单中心" />
        </van-grid>
      </div>
      <div class="personal-pic">
        <van-image :src="require('@/assets/bg/bg002.jpg')" />
      </div>
      <div class="personal-list">
        <van-list v-model="loading" @load="onLoad">
          <van-cell v-for="item in list" :key="item">
            <div class="cell-item">
              <span>{{ item }}</span> <van-icon name="arrow" />
            </div>
          </van-cell>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
export default {
  name: "personal",
  components: {
    NavBar,
  },
  data() {
    // 这里存放数据
    return {
      heade: [],
      list: ["会员中心", "我的优惠卷", "我的礼品卡", "我的收藏", "在线客服", "收货地址", "设置"],
    };
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
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        alert("请上传 jpg 格式图片");
        return false;
      }
      return true;
    },
    onLoad() { },
  },
};
</script>

<style lang="less" scoped>
.page-personal {
  /deep/.van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
  .personal-content {
    margin-top: 46px;
    .personal-title {
      padding: 0px 30px;
      font-size: 18px;
      display: flex;
      align-items: center;
      .title-left {
        margin-right: 10px;
        /deep/.van-uploader__upload {
          border-radius: 50%;
        }
        /deep/.van-image {
          border-radius: 50%;
        }
      }
      .title-right {
        display: flex;
        flex-direction: column;
        .title-right-up {
          font-weight: 900;
          font-size: 20px;
        }
        .title-right-down {
          padding: 4px 0;
          font-size: 14px;
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
      }
    }
    .personal-tag {
      padding: 0px 30px;
    }
    .personal-list {
      padding: 0px 30px;
      /deep/.van-cell::after {
        right: 0px;
        left: 0px;
      }

      /deep/.van-cell {
        padding: 10px 0px;
        .cell-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}
</style>
