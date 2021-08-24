<!-- 
  分类页面的导航条
 -->
<template>
  <div class="my-narbar" :border="false">
    <van-nav-bar fixed>
      <template #left>
        <slot name="nav-left"></slot>
      </template>
      <template #title>
        <slot name="nav-title"></slot>
      </template>
      <template #right>
        <slot name="nav-right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>
<style lang="less" scoped>
.van-hairline--bottom::after {
  border: none;
}
</style>
