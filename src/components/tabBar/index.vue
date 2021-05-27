<!-- 底部导航条 -->
<template>
  <div class='page-tabBar'>
    <van-tabbar v-model="active" route active-color="#010101" inactive-color="#8E8E8E" >
        <van-tabbar-item replace to='/home'>
            <span>首页</span>
            <template #icon="">
              <van-icon class="iconfont" class-prefix='icon' name='home-icon' ></van-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to='/invent' >
            <span>发现</span>
            <template #icon="">
              <van-icon class="iconfont" class-prefix='icon' name="eye"></van-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to='/sort'>
            <span>分类</span>
            <template #icon="">
              <van-icon class="iconfont" class-prefix='icon' name="Tabbar_classify_sel"></van-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to='/shoppingCart' >
            <span>购物车</span>
            <template #icon="">
              <van-icon class="iconfont" class-prefix='icon' name="cart"></van-icon>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to='/personal'>
            <span>我的</span>
            <template #icon="">
              <van-icon class="iconfont" class-prefix='icon' name='user'></van-icon>
            </template>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  components: {},
  data () {
    // 这里存放数据
    return {
      active:0
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang='less'>
.page-tabBar{
    .van-tabbar-item__icon{
      margin-bottom: 6px;
  }
}

</style>
