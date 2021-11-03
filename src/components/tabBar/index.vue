<!-- 底部导航条 -->
<template>
  <div class="page-tabBar">
    <van-tabbar route active-color="#010101" inactive-color="#a09c9c">
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template #icon="">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="home-icon"
          ></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/invent">
        <span>发现</span>
        <template #icon="">
          <van-icon class="iconfont" class-prefix="icon" name="eye"></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/sort">
        <span>分类</span>
        <template #icon="">
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="Tabbar_classify_sel"
          ></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart">
        <span>购物车</span>
        <template #icon="">
          <van-icon class="iconfont" class-prefix="icon" name="cart"></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/personal">
        <span>我的</span>
        <template #icon="">
          <van-icon class="iconfont" class-prefix="icon" name="user"></van-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  name: "tabBar",
}
</script>

<style lang='less'>
.page-tabBar {
  .van-tabbar-item__icon {
    margin-bottom: 6px;
  }
}
</style>
