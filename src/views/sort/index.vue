<!-- sort -->
<template>
  <div class="page-sort">
    <NavBar title="ZAOZUO造作新家">
      <div slot="nav-right">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          name="sousuo"
          size="16"
          color="#010101"
        ></van-icon>
      </div>
      <div slot="nav-left">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          size="16"
          name="xiaoxi-saoyisao"
          color="#010101"
        ></van-icon>
      </div>
    </NavBar>
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <div v-if="active === 0 || active === 1">
          <PicAddText
            :listItem="items[active].itemsChl"
            :color="items[active].color"
          />
        </div>
        <div v-else>
          <PicAddTextLeftTop :listItem="items[active].itemsChl" columnNum="2" />
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import { PicAddText, PicAddTextLeftTop } from "@/components/common/other";
export default {
  components: { NavBar, PicAddText, PicAddTextLeftTop },
  data() {
    // 这里存放数据
    return {
      active: 0,
      items: [
        {
          text: "21年新品",
          color: "#000",
          itemsChl: [
            {
              id: 1,
              title: "2021新品发布会",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "全屋系列",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "沙发.椅凳",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "柜架",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "床.床具",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "灯具",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
        {
          text: "家纺",
          color: "#fff",
          itemsChl: [
            {
              id: 1,
              title: "美术馆系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg"
            },
          ],
        },
      ],
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  // 方法集合
  methods: {}
};
</script>

<style lang="less" scoped>
.page-sort {
  background-color: #fff;
  font-weight: 500;
  .van-tree-select {
    margin-top: 46px;
    padding: 0 15px;
    /deep/ .van-sidebar {
      width: 50px;
      margin-top: 10px;
      .van-sidebar-item {
        background-color: #fff;
      }
    }
    .van-tree-select__nav {
      background-color: #fff;
    }
    .van-sidebar-item--select::before {
      background-color: #323233;
    }
    .van-tree-select__content {
      margin-top: 24px;
    }
  }
}
</style>
