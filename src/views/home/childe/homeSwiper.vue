<!-- homeSwiper.vue -->
<template>
  <div class='homeSwiper'>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
  </div>
</template>

<script>
export default {
  name:'homeSwiper',
  components: {},
  data () {
    // 这里存放数据
    return {
			images: [
        'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',
        'http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0520%2F373419ccj00qtdg3b0024c000u000nmc.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
				'http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg',
        'http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0520%2F373419ccj00qtdg3b0024c000u000nmc.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
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

  }
}
</script>

<style lang='less'>
.homeSwiper{
	height: 210px;
	.van-swipe{
		height: 100%;
			.van-swipe-item {
				color: #fff;
				font-size: 20px;
				text-align: center;
				img{
					height: 90%;
					width: 100%;
				}
			}
			.van-swipe__indicators{
				bottom: 5%;
				transform: translate(-50%,50%);
			}
			.van-swipe__indicator{
				background-color: #000000;
			}
			.van-swipe__indicator--active{
				background-color: #000000;
			}
	}

}
</style>
