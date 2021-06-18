<!-- homeRecommend.vue -->
<template>
  <div class='homeRecommend'>
    <div class="head">
      <div class="head-left">
        <span class="bigtitle">{{bigtitle}}</span>
        <span class="title">{{title}}</span>
      </div>
      <div class="head-right">
        <span class="right-current">{{ this.current+1 }}</span>/<span class="right-total">{{ this.total }}</span>
      </div>
    </div>
	<van-swipe :width="320" @change="onChange" :show-indicators=false>
		<van-swipe-item v-for="(item, index) in swipeList" :key="index">
      <template #default>
        <div  class="swipe-content">
          <img v-lazy="item.img" width="100%" />
          <div class="swipe-content-down">
            <div class="swipe-word-big">{{item.bigname}}</div>
            <div class="swipe-word">{{item.present}}</div>
          </div>
        </div>
      </template>
		</van-swipe-item>
	</van-swipe>
  </div>
</template>

<script>
export default {
  name:'homeRecommend',
  components: {},
  data () {
    // 这里存放数据
    return {
      bigtitle:'造作经典空间组搭',
      title:'618一键入手，打造理想新家',
      current:0,
      total:0,
      swipeList: [
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0520%2F373419ccj00qtdg3b0024c000u000nmc.jpg&thumbnail=650x2147483647&quality=80&type=jpg',bigname:"美术馆卧室1",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室2",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0520%2F373419ccj00qtdg3b0024c000u000nmc.jpg&thumbnail=650x2147483647&quality=80&type=jpg',bigname:"美术馆卧室1",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室3",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
      ],
    } 
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.total=this.swipeList.length;
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  // 方法集合
  methods: {
    onChange(index) {
      this.current = index;
    },
  }
}
</script>

<style lang='less'>
.homeRecommend{
  padding-left: 20px;
  position: relative;
  background-color: #fff;
  .head{
    display: flex;
    padding-top: 25px;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding-right: 20px;
    .head-left{
      display: flex;
      flex-direction: column;
      .bigtitle{
        font-size: 22px;
        font-weight: bold;
      }
      .title{
        color: #9f9c9c;
        font-size: 13px;
      }
    }
    .head-right{
      padding-right: 20px;
      font-size: 16px;
      .right-current{
        font-weight: bold;
      }
      .right-total{
        color: #9f9c9c;
        font-size: 13px;
      }
    }
      



  }
  .swipe-content{
    margin-right: 15px;
    img{
      height: 170px;
      object-fit: cover;
    }
    .swipe-content-down{
      .swipe-word-big{
        font-size: 16px;
        font-weight: bold;
      }
      .swipe-word{
        color: #9f9c9c;
        font-size: 14px;
      }
    }
  }
}
</style>
