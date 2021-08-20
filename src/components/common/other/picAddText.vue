<!--  
  组件介绍：图片中间显示文子
  功能：可修改图片的文字的颜色，
 -->
<template>
  <div class="sub-page">
    <div class="sub-page-item" v-for="item in listItem" :key="item.id">
      <van-image :src="item.img" />
      <div class="words" :style="{ color: color }">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picAddText",
  props: {
    listItem: {
      typeof: Array,
      default() {
        return null;
      },
    },
    color: {
      typeof: String,
      default: "red",
    },
  },
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 方法集合
  methods: {},
}
</script>

<style lang="less" scoped>
.sub-page {
  width: 100%;
  min-height: 100%;
  margin-bottom: 50px;
  .sub-page-item {
    width: 100%;
    height: 100%;
    position: relative;
    .words {
      width: 100%;
      text-align: center;
      // color: #000;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
