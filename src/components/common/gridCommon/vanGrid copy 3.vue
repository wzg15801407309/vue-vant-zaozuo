<!-- waterfall -->
<template>
  <div class="waterfall-page">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="true"
      @load="onLoad"
    >
      <div class="waterfall-box" id="waterfall-box-id">
        <div
          class="waterfall-box-item"
          v-for="item in list"
          :key="item"
          :style="{ width: boxWidth + 'px' }"
        >
          {{ item }}
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      list: [],
      loading: false,
      finished: false,

      //item的宽度
      boxWidth: 165, //每个item宽度
      boxMargin: 8, //两个item中间间隔
      lastRowHeights: [0, 0], //最后一行标签的顶部间距+高度，2列
      itemCount: 0, //上一次加载完成后的瀑布流item个数
      // 测试数据
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //当前瀑布流设置为两列，计算瀑布流每个item和图片的宽度
    let screenWidth = document.body.offsetWidth; //屏幕宽度
    this.boxWidth = (screenWidth - 30 - this.boxMargin) / 2; //每个item的宽度
  },
  // 方法集合
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 11; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        this.$nextTick(() => {
          this.setItemElementPosition();
        });
        // 数据全部加载完成
        if (this.list.length >= 22) {
          this.finished = true;
        }
      }, 1000);
    },
    //获取每个item标签高度，设置item的定位
    setItemElementPosition() {
      let parentEle = document.getElementById("waterfall-box-id");
      let boxEles = parentEle.getElementsByClassName("waterfall-box-item");
      alert(this.itemCount);
      for (let i = this.itemCount; i < this.list.length; i++) {
        const elem = boxEles[i];
        // 上一行的最小高度列索引
        let curColIndex = this.getMinHeightIndex(this.lastRowHeights);
        let boxTop = this.lastRowHeights[curColIndex];
        let boxLeft = curColIndex * (this.boxWidth + this.boxMargin) + 15;
        console.log(boxTop, boxLeft);
        elem.style.top = boxTop + "px";
        elem.style.left = boxLeft + "px";
        this.lastRowHeights[curColIndex] = boxTop + elem.offsetHeight;
        console.log(curColIndex, elem.offsetHeight);
      }
      this.itemCount = boxEles.length;
      //修改父级标签的高度
      let maxHeight = Math.max.apply(null, this.lastRowHeights);
      console.log(this.lastRowHeights);
      console.log(maxHeight);
      parentEle.style.height = maxHeight + "px";
    },
    // 获取数组中最小的索引值
    getMinHeightIndex(arr) {
      var minHeight = Math.min.apply(null, arr);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == minHeight) {
          return i;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.waterfall-page {
  width: 100%;
  .waterfall-box {
    position: relative;
    padding: 0 15px;
    .waterfall-box-item {
      position: absolute;
      background-color: wheat;
    }
  }
}
</style>
