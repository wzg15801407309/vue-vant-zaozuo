<!-- homeRecommend.vue -->
<template>
  <div class='homeRecommend'>
    <div class="head">
        <span class="bigtitle">{{bigtitle}}</span>
        <span class="title">{{title}}</span>
    </div>
	<van-swipe :autoplay="3000">
		<van-swipe-item v-for="(item, index) in swipeList" :key="index">
      <template #default>
        <div  class="swipe-content">
          <img v-lazy="item.img" width="100 %" />
          <div class="swipe-content-down">
            <div class="swipe-word-big">{{item.bigname}}</div>
            <div class="swipe-word">{{item.present}}</div>
          </div>
        </div>
      </template>
      <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
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
      swipeList: [
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
        {img:'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',bigname:"美术馆卧室",present:'莫兰迪色沉睡空间，安享纯净睡眠'},
      ],
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
      this.current = index;
    },
  }
}
</script>

<style lang='less'>
.homeRecommend{
  padding-left: 20px;
  position: relative;
	height: 400px;
    background-color: #fff;
    .head{
      padding-top: 25px;
      height: 60px;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;
      .bigtitle{
        font-size: 22px;
        font-weight: bold;
      }
      .title{
        color: #9f9c9c;
        font-size: 14px;
      }
    }
}
</style>
