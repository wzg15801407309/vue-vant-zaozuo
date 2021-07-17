<!-- homeMillionUsers-->
<template>
  <div class='page-MillionUsers'>
    <div class="millionUsers">
       <div class="title">百万用户实景嗮单</div>
       <div class="millionUsers-content">
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item,index) in listItems" :key="index">
            <van-image :src="item.img" />
            <div class="millionUsers-content-title">{{ item.describe }}</div>
            <div class="millionUsers-content-pos">
              <div class="pos-left"> 
                <van-image round width="20" height="20" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                <span>{{ item.name }}</span>
              </div>
              <div class="pos-right"> {{ item.site}}</div>
            </div>
         </van-grid-item>
        </van-grid>
       </div>
       <div class="millionUsers-footer">查看更多嗮单>></div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    // 这里存放数据
    return {
      listItems:[
        {
          img:"http://n.sinaimg.cn/sinakd20210621ac/89/w508h381/20210621/afdc-6231977c80d1eb5ef0d526a5d2c9a874.jpg",
          describe:"古典欧式风格的家具市面上很多，选购的时候尽量注意款式要优雅，一些劣质的欧式古典风格家具，造型款式上显得很僵化，特别是表现古典的一些典型细节如弧形或者涡状装饰等，都显得拙劣。",
          site:"成都",
          name:"弟弟"
        },
        {
          img:"http://n.sinaimg.cn/sinakd20210621ac/89/w508h381/20210621/afdc-6231977c80d1eb5ef0d526a5d2c9a874.jpg",
          describe:"欧式风格的家居宜选用现代感强烈的家具组合，特点是简单、抽象、明快、现代感强，组合家具的颜色选用白色或流行色，配上合适的灯光及现代化的电器，比如音像器材，就仿佛为主人编织了一个明快美丽的梦想。",
          site:'上海',
          name:"冰花的花期"
        },

        {
          img:"http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          describe:"配色：欧式风格的底色大多采用白色、淡色为主，家具则是白色或深色都可以，但是要成系列，风格统一为上。同时，一些布艺的面料和质感很重要，亚麻和帆布的面料是不太合时宜的，丝质面料是会显得比较高贵的。",
          site:'重庆',
          name:"sjkm"
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

  }
}
</script>

<style lang='less' scoped>
.page-MillionUsers{
  .millionUsers{
    margin-top: 8px;
    background-color: #fff;
    padding: 0 20px;
    .title{
        font-size: 22px;
        padding-top: 20px;
        padding-bottom: 10px;
        font-weight: bold;
    }
    .millionUsers-content{
      padding-bottom: 20px;
    }
    .millionUsers-content-title{
      font-size: 14px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .millionUsers-content-pos{
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      justify-content: space-between;
      padding-top: 5px;
      .pos-left{
        display: flex;
        align-items: center;
      }
      .pos-right{
        color: #B6B6B6;
        margin-left: 5px;
      }
    }
    .millionUsers-footer{
      // margin: 0 auto;
      text-align: center;
      width: 70%;
      background: #F4F4F4;
      border: 1px solid #E2E2E2;
      padding: 10px 0;
      font-size: 14px;
      font-weight: bold;
      margin-left: 15%;
    }
  }
  /deep/.van-grid-item__content{
    padding: 8px 8px ;
  }
}

</style>
