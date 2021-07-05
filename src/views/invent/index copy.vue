<!-- invent 发现-->
<template>
  <div class='page-invent'>
      <NavBar title="发现" />
      <!-- tabbar -->
      <div class="invent-content">
        <van-tabbar v-model="active" :fixed='false' :border='false' @change="onChange">
          <van-tabbar-item v-for="(item,index) in tablist" :key="index">
            {{ item }}
          </van-tabbar-item>
        </van-tabbar>
      </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar"
export default {
  name:'invent',
  components: {
    NavBar
  },
  data () {
    // 这里存放数据
    return {
      active: 0,
      tablist:['客人的家','品牌','实体店','设计师','灵感']
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
    onChange(index) {
      console.log(index);
    },
  }
}
</script>

<style lang='less' scoped>
.page-invent{
  /deep/.van-nav-bar{
    background-color: #F5F5F5;
  }
  /deep/.van-hairline--bottom::after{
    border-bottom-width:0;
  }
  .invent-content{
    min-width: 100%;
    padding-left:15px;
    .van-tabbar{
      background-color: #F5F5F5;
      height: 30px;
      height: auto;
      .van-tabbar-item{
        font-size: 14px;
        /deep/.van-tabbar-item__text{
          padding-bottom: 10px;
        }
      }
    }
    /deep/.van-tabbar-item--active{
      color: #646566;
      background-color: #F5F5F5;
      .van-tabbar-item__text{
        border-bottom: 2px solid #272727 ;
      }
    }
  }
}

</style>
