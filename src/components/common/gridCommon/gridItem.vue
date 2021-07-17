<!-- grid item -->
<template>
    <div class="grid-item">
       <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
    </div>
</template>

<script>

export default {
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

</style>
