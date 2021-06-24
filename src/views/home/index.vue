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
  <HomeRecommend />
  <!-- 全品目录 -->
  <HomeFullCatalog />
  <!-- 百万用户 -->
  <HomeMillionUsers />
  <!-- 全国直营店 -->
  <div class="home-shop">
    <div class="title">全国直营门店</div>
    <div class="home-shop-pos">
      <van-image  width="100%" height="100%" src="https://p4.itc.cn/images01/20210602/ecbfceb16d53489ca5dca1ac36ca65d1.jpeg"/>
      <div class="home-shop-text">
          <div class="shop-text"><span>北京</span><span>上海</span><span>成都</span><span>...</span></div>
          <div class="shop-text1">更多新店即将见面</div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div class="home-footer">
    <div class="home-footer-line">
      <span class="home-footer-text">浏览已完毕</span>
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar"
import { HomeSwiper,HomeBannerItem,HomeRecommend,HomeFullCatalog,HomeMillionUsers} from "./childe"
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeBannerItem,
    HomeRecommend,
    HomeFullCatalog,
    HomeMillionUsers
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
  margin-bottom: 50px;
  .home-banner{
    background-color: #fff;
    margin-bottom: 10px;
  }
  .home-footer{
    padding: 30px 20px;
    background-color: #fff;
    text-align: center;
    .home-footer-line:before{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background-color: #E2E2E2;/*颜色需与主题大背景色一致*/ 
      position: relative;
      top: 10px;/*调节线高*/
      left: 0;

    }
    .home-footer-text{
      color: #E2E2E2;
      display: inline-block;
      background: #fff;
      padding: 0 18px 0 18px;
      position: relative;
      font-size: 13px;
      font-weight: 500;   
    }
  }
  .home-shop{
    background-color: #fff;
    padding: 20px  20px  0 20px;
    .title{
        font-size: 22px;
        padding-top: 20px;
        padding-bottom: 10px;
        font-weight: bold;
    }
    .home-shop-pos{
      position: relative;
      .home-shop-text{
        width: 100%;
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        position: absolute;
        top: 50%;
        transform:  translateY(-50%);
        .shop-text{
          span{
            margin: 0 10px;
          }
        }
      }
    }
  }

}

</style>
