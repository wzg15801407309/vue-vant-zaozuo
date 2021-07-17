<!-- invent 发现-->
<template>
  <div class='page-invent'>
    <NavBar title="发现" />
    <!-- tabs -->
    <div class="invent-tabs">
      <van-tabs animated title-inactive-color='#000' :swipeable='true' offset-top="46px" title-active-color='#000' @change="onChange" :sticky ='true'>
      <template v-for="(item,index) in tablists">
        <van-tab :key="index"  :title='item.title'  v-if="item.ID == '01'"  >
            <GuestsTabs />
        </van-tab>
        <van-tab  v-else :key="index"  :title='item.title'   >
          <van-grid :column-num="1">
            <van-grid-item v-for="(item,index) in listItem" :key="index">
              <van-image :src="item.img" />
              <div class="invent-content">
                <div class="invent-content-title">{{ item.title }}</div>
                <div class="invent-content-text">{{ item.smalltitle }}</div>
              </div>
            </van-grid-item>
          </van-grid>
        </van-tab>
      </template>
    </van-tabs>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar"
import { GuestsTabs } from "./childe"
export default {
  name:'invent',
  components: {
    NavBar,
    GuestsTabs
  },
  data () {
    // 这里存放数据
    return {
      active: 0,
      tablist:['客人的家','品牌','实体店','设计师','灵感'],
      // 页面分析：01 代表要跳转路由的 02 就是组件的形式展示 
      // 数据库分析：01需要返回需要的路由的信息的
      tablists:[
        {title:'客人的家',ID:"01",path:'guest'},
        {title:'品牌',ID:"02",},
        {title:'实体店',ID:"02"},
        {title:'设计师',ID:"02"},
        {title:'灵感',ID:"02"},
      ],
      listItem:[
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
        {title:"造作生活美术馆｜成都红星美凯龙生活美学中心L1 103-106",smalltitle:"家居卖场混搭零售业态，造作首间‘美术馆’落成开幕",img:"https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com"},
      ]

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
      this.active=index;
      // console.log(index);
    },
  }
}
</script>

<style lang='less' scoped>
.page-invent{
  padding-bottom: 50px;
  /deep/.van-nav-bar{
    background-color: #F5F5F5;
  }
  /deep/.van-hairline--bottom::after{
    border-bottom-width:0;
  }
  .van-tabs{
    /deep/.van-tabs__nav{
      padding-left: 11px;
      background-color: #f5f5f5;
      &.van-tabs__nav--line{
        padding-bottom: 0;
      }
    }
    /deep/.van-tabs__line{
      display: none;
      /deep/.van-tabs__wrap{
        height: auto;
      }
    }
    /deep/.van-tab--active{
      font-weight: normal;
      .van-tab__text{
        border-bottom: 2px solid;
      }
    }
    /deep/.van-tabs__content{
      background-color: #fff;
    }
  }
  /deep/.van-tabs--line .van-tabs__wrap{
    height: auto;
  }
  /deep/.van-grid-item__content{
    padding: 0;
    .van-image{
      height: 220px;
    }
  }
  .invent-content{
    padding: 20px;
    .invent-content-title{
      font-size: 18px;
      font-weight: bold;
    }
    .invent-content-text{
      font-size: 12px;
      color: #545454;
    }
  }
}

</style>
