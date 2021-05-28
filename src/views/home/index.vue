<!-- home -->
<template>
  <div class='page-home'>
    <NavBar title="ZAOZUO造作新家">
      <div slot="nav-right">
          <van-icon class="iconfont" class-prefix='icon' name='sousuo' size="16" color='#010101'></van-icon>
      </div>
      <div slot="nav-left">
          <van-icon class="iconfont" class-prefix='icon' size="16" name='xiaoxi-saoyisao' color="#010101" ></van-icon>
      </div>
    </NavBar>
    <div class="home-banner">
      <HomeSwiper />
      <HomeBannerItem />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar"
import { HomeSwiper,HomeBannerItem } from "./childe"
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeBannerItem
  },
  data () {
    // 这里存放数据
    return {

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

<style lang='less' scoped>
.page-home{
  .home-banner{
    background-color: #fff;
  }
}
</style>
