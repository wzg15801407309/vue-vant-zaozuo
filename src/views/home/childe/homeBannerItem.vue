
<!-- banner item -->
<template>
  <div class='homeBannerItem'>
    <van-grid :column-num="4" :border="false">
        <van-grid-item v-for="(value,index) in gridValues" :key="index" :text="value.text" :to="value.url">
            <div slot="icon">
                <van-icon  class="iconfont" class-prefix='icon' :name='value.iconname' ></van-icon>
            </div>
            <div slot="text" style="font-size:12px"> {{ value.text }} </div>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>

export default {
  name:"",
  components: {},
  data () {
    // 这里存放数据
    return {
        gridValues:[
            {text:"中国设计",iconname:"shigongtushejix",url:""},
            {text:"中国制造",iconname:"UE",url:""},
            {text:"免费送装",iconname:"jinhuoche",url:""},
            {text:"7日退换",iconname:"tianwuliyoutuihuo",url:""},
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
.homeBannerItem{
    padding: 0 30px;
    /deep/.van-grid-item{
        .van-grid-item__content{
            padding: 10px 6px;
        }
    }
    
}
</style>
