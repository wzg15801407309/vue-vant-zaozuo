<!-- 顶部，导航条 -->
<template>
  <div class="nav-bar">
    <van-nav-bar :title="title" fixed>
      <template #left>
        <slot name="nav-left"></slot>
      </template>
      <template #right>
        <slot name="nav-right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    }
  },
  components: {},
  data() {
    // 这里存放数据
    return {

    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang='less' scoped>
</style>
