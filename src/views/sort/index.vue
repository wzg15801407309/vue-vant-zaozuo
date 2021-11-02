<!-- sort -->
<template>
  <div class="page-sort">
    <!-- 导航条 -->
    <MyNavBar>
      <div slot="nav-title">
        <van-field v-model="sms" center clearable @focus="onFocus">
          <template #right-icon>
            <van-icon v-if="!isStausSms" name="search" color="#000" size="18" />
            <span v-else @click="onCancel">取消</span>
          </template>
          <template v-if="isStausSms" #left-icon>
            <van-icon name="search" color="#000" size="18" />
          </template>
        </van-field>
      </div>
    </MyNavBar>
    <template v-if="!isStausSms">
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
            <PicAddTextLeftTop
              :listItem="items[active].itemsChl"
              columnNum="2"
            />
          </div>
        </template>
      </van-tree-select>
    </template>
    <template v-else>
      <div class="search-page-two">
        <div class="page-two-title">热门搜索</div>
        <div class="page-two-content">
          <span
            class="page-two-content-moudle"
            v-for="(value, index) in searchArray"
            :key="index"
          >
            <span>{{ value }}</span>
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MyNavBar from "./childe/myNavBar.vue";
import { PicAddText, PicAddTextLeftTop } from "@/components/common/other";
export default {
  components: { MyNavBar, PicAddText, PicAddTextLeftTop },
  data() {
    // 这里存放数据
    return {
      sms: "",
      active: 0,
      // 0:正常状态 1:搜索装态
      navBarStatus: 0,
      items: [
        {
          text: "21年新品",
          color: "#000",
          itemsChl: [
            {
              id: 1,
              title: "2021新品发布会",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
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
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 2,
              title: "飞鸟.流方套系",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 3,
              title: "cosmo系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
            {
              id: 4,
              title: "海盐硬糖系列",
              img: "https://img01.yzcdn.cn/vant/cat.jpeg",
            },
          ],
        },
      ],
      // 搜索框不同的状态
      isStausSms: false,
      // 搜索的热门词汇（要做搜索的历史纪录，我了解到要使用U技术）
      searchArray: ["沙发", "新家卡", "云衫天丝新色", "美术管系列", "桌几", "美术管系列", "桌几"],
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
  methods: {
    onFocus(val) {
      //触发搜索框，进入另一个页面
      console.log(val, "$$$$$$");
      this.isStausSms = true;
    },
    onCancel() {
      this.isStausSms = false;
    },
  },
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
  /deep/.van-hairline::afte {
    color: #323233;
  }
  /deep/.van-nav-bar__title {
    max-width: none;
    width: 100%;
  }
  .van-cell {
    line-height: 28px;
    /deep/.van-field__body {
      border-bottom: 1px solid;
    }
    /deep/.van-field__left-icon {
      margin-right: 0;
      border-bottom: 1px solid;
    }
    /deep/.van-field__right-icon {
      color: #323233;
    }
  }
  .search-page-two {
    margin-top: 46px;
    padding: 10px 16px;
    .page-two-title {
      font-weight: bold;
    }
    .page-two-content {
      font: 14px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .page-two-content-moudle {
        background-color: #f5f5f5;
        margin-bottom: 10px;
        margin-right: 8px;
        color: #b3b3b3;
        span {
          padding: 4px;
        }
      }
    }
  }
}
</style>
