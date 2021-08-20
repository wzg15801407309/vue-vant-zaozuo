<!--  homeFullCatalog-->
<template>
  <div class="page-fullcatalog">
    <div class="title">全品目录</div>
    <div class="fullcatalog">
      <div class="fullcatalog-head">
        <div class="fullcatalog-head-zh">客厅</div>
        <div class="fullcatalog-head-en">Living Room</div>
        <div class="fullcatalog-head-type">
          <span class="only-span">沙发</span>
          <span class="only-span">休闲椅</span>
          <span class="only-span">茶几</span>
          <span>电视柜</span>
        </div>
      </div>
      <div class="fullcatalog-content">
        <van-grid :border="false" :column-num="2">
          <van-grid-item v-for="(item, index) in listItem" :key="index">
            <van-image :src="item.img" />
            <div class="fullcatalog-content-title">{{ item.title }}</div>
            <div class="fullcatalog-content-price">{{ item.price }}</div>
            <div class="fullcatalog-content-color">
              <span>{{ item.colortext }}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeFullCatalog",
  components: {},
  data() {
    // 这里存放数据
    return {
      listItem: [
        { title: "飞鸟沙发", price: "¥5489起", colortext: "3色可选", img: "https://img.alicdn.com/tfscom/i3/820285741/TB2TQMMCTtYBeNjy1XdXXXXyVXa_!!820285741.jpg?img.alicdn.com" },
        { title: "飞鸟沙发", price: "¥5489起", colortext: "3色可选", img: "https://img.alicdn.com/tfscom/i3/711882586/TB20Uy2ubZnBKNjSZFGXXbt3FXa_!!711882586.jpg?img.alicdn.com" },
        { title: "飞鸟沙发", price: "¥5489起", colortext: "3色可选", img: "https://img.alicdn.com/tfscom/i3/711882586/TB20Uy2ubZnBKNjSZFGXXbt3FXa_!!711882586.jpg?img.alicdn.com" },
        { title: "飞鸟沙发", price: "¥5489起", colortext: "3色可选", img: "https://img.alicdn.com/tfscom/i3/711882586/O1CN011UyQh4YS0GN3nRB_!!711882586.jpg?img.alicdn.com" },
        { title: "飞鸟沙发", price: "¥5489起", colortext: "3色可选", img: "https://img.alicdn.com/tfscom/i4/711882586/TB20Uy2ubZnBKNjSZFGXXbt3FXa_!!711882586.jpg?img.alicdn.com" },
      ]
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
.page-fullcatalog {
  margin-top: 8px;
  background-color: #fff;
  padding: 0 20px;
  .title {
    font-size: 22px;
    padding-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: bold;
    // border-bottom: 1px solid #D7D7D7;
  }
  .fullcatalog {
    // border-bottom: 1px solid #D7D7D7;
    border-top: 1px solid #d7d7d7;
    .fullcatalog-head {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      .fullcatalog-head-zh {
        width: 50px;
        height: 50px;
        line-height: 50px;
        background-color: #fdeb83;
        text-align: center;
        border-radius: 50%;
      }
      .fullcatalog-head-en {
        margin-top: -15px;
      }
      .fullcatalog-head-type {
        padding-top: 20px;
        font-size: 14px;
        .only-span {
          padding-right: 10px;
          margin-right: 5px;
          border-right: 1px solid #afafaf;
        }
      }
    }
  }
  .fullcatalog-content {
    .fullcatalog-content-title {
      padding-top: 5px;
      font-size: 14px;
      font-weight: bold;
    }
    .fullcatalog-content-price {
      font-size: 12px;
      font-weight: bold;
    }
    .fullcatalog-content-color {
      padding: 5px 0;
      span {
        background-color: #f4f4f4;
        padding: 2px 5px;
        color: #929292;
        font-size: 12px;
      }
    }
    /deep/.van-grid-item__content {
      padding: 16px 8px 0 8px;
    }
  }
}
</style>
