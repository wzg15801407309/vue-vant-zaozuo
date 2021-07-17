<!--客人的家 -->
<template>
  <div class='page-guests'>
    <van-tabs v-model="active">
        <van-tab v-for="(item,index) in tablists" :key="index" >
          <template slot="title">
            <div class="gue-titles">{{ item }}</div>
          </template>
          <template #default>
            <vanGrid :girdStyle={border:false,columnnum:2} :listData='listItems'></vanGrid>
          </template>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {vanGrid} from '@/components/common/gridCommon'
export default {
  components: {
    vanGrid,
  },
  data () {
    // 这里存放数据
    return {
      active:0,
      tablists:['全部','沙发','椅凳','柜架','床·床具','桌几'],
      listItems:[
        {
          img:"http://n.sinaimg.cn/sinakd20210621ac/89/w508h381/20210621/afdc-6231977c80d1eb5ef0d526a5d2c9a874.jpg",
          describe:"古典欧式风格的家具市面上很多，选购的时候尽量注意款式要优雅，一些劣质的欧式古典风格家具，造型款式上显得很僵化，特别是表现古典的一些典型细节如弧形或者涡状装饰等，都显得拙劣。",
          site:"成都",
          name:"弟弟"
        },
        {
          img:"http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          describe:"配色：欧式风格的底色大多采用白色、淡色为主，家具则是白色或深色都可以，但是要成系列，风格统一为上。同时，一些布艺的面料和质感很重要，亚麻和帆布的面料是不太合时宜的，丝质面料是会显得比较高贵的。",
          site:'重庆',
          name:"sjkm"
        },
        {
          img:"http://n.sinaimg.cn/sinakd20210621ac/89/w508h381/20210621/afdc-6231977c80d1eb5ef0d526a5d2c9a874.jpg",
          describe:"欧式风格的家居宜选用现代感强烈的家具组合，特点是简单、抽象、明快、现代感强，组合家具的颜色选用白色或流行色，配上合适的灯光及现代化的电器，比如音像器材，就仿佛为主人编织了一个明快美丽的梦想。",
          site:'上海',
          name:"冰花的花期"
        },
        {
          img:"http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          describe:"简约不简单,简约中求艺术,化繁为简,合理的简约居室可以使人在快乐的节奏中体验舒适精致的生活,得到别样轻松自由。",
          site:"北京",
          name:"今年结束"
        },
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
      console.log(index);
    },
  }
}
</script>

<style lang='less' scoped>
.page-guests{
   .van-tabs{
    /deep/.van-tabs__nav{
      background-color: #fff !important;
    }
    /deep/.van-tab--active{
      color: #fff;
      .van-tab__text{
        border-bottom: none !important;
        background-color: #377D49 !important;
      }
    }
    /deep/.van-tab{
      .van-tab__text{
        padding: 5px 8px;
        background-color: #f5f5f5;
      }
    }
    /deep/.van-tabs__wrap--scrollable .van-tab{
      padding: 15px 5px;
    }
    /deep/.van-tabs__content{
      padding: 0 7px;
    }
  }
  
  // /deep/.van-nav-bar{
  //   background-color: #fff;
  // }
  // /deep/.van-tabs__nav{
  //   background-color: #fff;
  // }
  // /deep/.van-tabs__nav--card{
  //   border: none;
  // }
  // /deep/.van-tabs__nav--card .van-tab{
  //   border-right:none;
  //   background-color: #fff;
  // }
  // /deep/.van-tabs__nav--card .van-tab.van-tab--active{
  //   background-color: #377D49;
  //   .van-tab__text{
  //     border-bottom: none !important;
  //   }
  // }

}
</style>
