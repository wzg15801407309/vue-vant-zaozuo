<!-- shoppingCart -->
<template>
  <div class="page-shoppingCart">
    <!-- 导航栏 -->
    <NavBar title="购物车" />
    <div class="page-shoppingCart-content">
      <div v-if="cardCountList.length <= 0">
        <noShopCart />
      </div>
      <div v-else>
        <haveShopCart />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import { noShopCart, haveShopCart } from "./childe";
export default {
  components: { NavBar, noShopCart, haveShopCart },
  data() {
    // 这里存放数据
    return {
      cardCountList: [],
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang="less" scoped>
.page-shoppingCart {
  /deep/.van-nav-bar {
    background-color: #f5f5f5;
  }
  /deep/.van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .page-shoppingCart-content {
    margin-top: 46px;
  }
}
</style>
