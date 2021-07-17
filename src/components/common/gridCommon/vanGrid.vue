<!-- 容器组件 -->
<template>
  <van-grid :border="girdStyle.border" :column-num="girdStyle.columnnum ? girdStyle.columnnum :'2'">
    <van-grid-item v-for="(item,index) in listData" :key="index">
      <div class="girditem">
        <van-image :src="item.img" />
        <div class="describe">{{ item.describe }}</div>
        <div class="footer">
          <div class="footer-left">
            <van-image :round='girdStyle.border'  width="20" height="20" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            <span style="padding-left:5px">{{ item.name }}</span>
          </div>
          <div class="footer-right">{{ item.site}}</div>
        </div>
      </div>
       <!--  <div class="millionUsers-content-title">{{ item.describe }}</div>
          <div class="millionUsers-content-pos">
            <div class="pos-left"> 
              <van-image round width="20" height="20" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
              <span>{{ item.name }}</span>
            </div>
            <div class="pos-right"> {{ item.site}}</div>
           </div> -->
    </van-grid-item>
  </van-grid>
</template>

<script>

export default {
  name:"vangrid",
  props:{
    girdStyle:{
      type:Object,
      default(){
        return {}
      }
    },
    listData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
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
.girditem{
  padding: 2px 4px ;
  .van-image{
    height: auto !important;
  }
  .describe{
      font-size: 14px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  .footer{
    display: flex;
    justify-content:space-between;
    align-items: center;
    .footer-left{
    }
  }
}
</style>
