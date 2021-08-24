<!--  
  组件介绍：图片中间显示文子
  功能：可修改图片的文字的颜色，
 -->
<template>
  <div class="sub-page-two">
    <div class="sub-page-item" v-for="item in listItem" :key="item.id">
      <van-image :src="item.img" />
      <div class="words">{{ item.title }}</div>
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
    columnNum: {
      typeof: Number,
      default() {
        return 1;
      },
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
};
</script>

<style lang="less" scoped>
.sub-page-two {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .sub-page-item {
    width: 49%;
    color: #fff;
    position: relative;
    .words {
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
}
</style>
