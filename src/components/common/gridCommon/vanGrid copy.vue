<!-- waterfall -->
<template>
  <div class="waterfall-page">
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      style="min-height: 100vh"
      :success-duration="800"
      success-text="加载成功"
      loading-text="加载中..."
    >
      <van-list
        v-if="haveData == 2"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onBottomLoad"
        :offset="150"
        :immediate-check="false"
      >
        <div class="waterfall-box" id="waterfall-box-id">
          <div
            class="waterfall-box-item"
            v-for="(item, index) in dataList"
            :key="index"
            :style="{ width: boxWidth + 'px' }"
          >
            <img
              class="data-cover"
              :src="item.cover"
              :style="{ width: '100%', height: item.imgHeight + 'px' }"
            />
            <div class="content-title">{{ item.sign }}</div>
            <div class="content-footer">
              <div class="pos-left">
                <van-image
                  round
                  width="20"
                  height="20"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <span>{{ item.name }}</span>
              </div>
              <div class="pos-right">{{ item.site }}</div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      isLoading: false,
      pageIndex: 1,
      haveData: 0, //是否有数据，1=无，2=有，0=页面还未初始化
      fisLoading: false, //下拉刷新进行中，请求开始true, 请求完成false，用于下拉刷新组件van-pull-refresh
      loading: false, //上拉加载更多中，上拉触底时自动变成true, 请求完成设置为false, 用于列表组件van-list
      finished: false, //上拉加载是否加载完最后一页数，用于组件van-list
      boxMargin: 8, //每个item之间的边距
      boxWidth: 165, //每个item宽度
      itemCount: 0, //上一次加载完成后的瀑布流item个数
      typeIndex: 0, //分类索引
      dataList: [{}], //列表数据
      pageSize: 6, //每页加载数据数量
      lastRowHeights: [0, 0], //最后一行标签的顶部间距+高度，2列
      list: [
        {
          id: 1,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 2,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 3,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 4,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 5,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 6,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 7,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 8,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 9,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 10,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 11,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 12,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 13,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 14,
          cover:
            "http://tencentjiaju.img-cn-beijing.aliyuncs.com/ueditor/20210528/h1080w810-60b084672931e.jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
        {
          id: 15,
          cover:
            "http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0515%2F13e17547j00qt4jst003mc000hs00m2g.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
          sign: "testtestetseteststststtsttttttttttttttttt",
          site: "重庆",
          name: "sjkm",
        },
      ],
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
    // 数据请求
    this.getDataList();
  },
  // 方法集合
  methods: {
    onRefresh() {
      //下拉刷新
      // if (this.isLoading) return; //还在请求中，返回
      this.pageIndex = 1; //重置第一页
      this.isLoading = true; //开始加载
      this.finished = false; //上拉加载"所有数据已经完成"标识 重置为false
      //接口请求
      this.getDataList();
    },
    // 获得图片高度
    loadImagesHeight(list) {
      // 用来标志list的图片的高度加载完成进行下一步操作
      let count = 0;
      list.forEach((item, index) => {
        // 创建图片对象，加载图片， 计算图片高度
        let img = new Image();
        img.src = item.cover;
        img.onload = img.onerror = (e) => {
          count++;
          // 图片加载成功 e.type == "load"
          if (e.type == "load") {
            // 计算图片缩放后的高度： 图片原高度/原宽度 = 缩放后的高度/缩放后宽度
            list[index].imgheight = Math.round(
              img.height * (this.boxWidth / img.width)
            );
          } else {
            // 加载失败
            list[index].imgheight = 50;
          }
          if (count == list.length) {
            this.resolveDataList(list);
          }
        };
      });
    },
    resolveDataList(list) {
      if (this.pageIndex <= 1) {
        this.itemCount = 0;
        this.dataList = [];
        this.lastRowHeights = [0, 0];
      }
      if (list.length >= this.pageSize) {
        // 说明还有下一页
        this.pageIndex++;
        console.log(this.pageIndex);
      } else {
        // 当前页面的所有的数据都加载完成了
        this.finished = true;
      }
      // 合并数据
      this.dataList = [...this.dataList, ...list];
      //判断页面是否有数据
      this.haveData = this.dataList.length > 0 ? 2 : 1;
      this.isLoading = false; //下拉刷新请求完成
      this.loading = false; //上拉加载更多请求完成
      console.log("resolveDataList", this.dataList);
      this.$nextTick(() => {
        setTimeout(() => {
          // 渲染完成 计算每个item的高度
          this.setItemElementPosition();
          this.isLoading = false; //下拉刷新请求完成
          this.loading = false; //上拉加载更多请求完成
        }, 1000);
      });
    },
    //获取每个item标签高度，设置item的定位
    setItemElementPosition() {
      let parentEle = document.getElementById("waterfall-box-id");
      let boxEles = parentEle.getElementsByClassName("waterfall-box-item");
      for (let i = 0; i < boxEles.length; i++) {
        const elem = boxEles[i];
        // 上一行的最小高度列索引
        let curColIndex = this.getMinHeightIndex(this.lastRowHeights);
        let boxTop = this.lastRowHeights[curColIndex];
        let boxLeft = curColIndex * (this.boxWidth + this.boxMargin);
        elem.style.left = boxLeft + "px";
        elem.style.top = boxTop + "px";
        elem.style.marginleft = this.boxMargin + "px";
        this.lastRowHeights[curColIndex] =
          boxTop + elem.offsetHeight + this.boxMargin;
      }
      this.itemCount = boxEles.length;
      //修改父级标签的高度
      let maxHeight = Math.max.apply(null, this.lastRowHeights);
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
    getDataList() {
      var list = this.list;
      //从list中取pageSize条数据出来
      var tempList = [];
      for (let i = 0; i < this.pageSize; i++) {
        if (list.length > 0) {
          let tempIndex = parseInt(Math.random() * 1000) % list.length;
          tempList.push(list[tempIndex]);
          list.splice(tempIndex, 1);
        }
      }
      this.loadImagesHeight(tempList); //模拟预加载图片，获取图片高度
    },
    onBottomLoad() {
      console.log("11111");
      //上拉加载更多
      if (this.finished) return; //说明所有数据已经加载完毕，返回
      this.getDataList(); //下一页数据请求中
    },
  },
};
</script>

<style lang="less" scoped>
.waterfall-page {
  padding: 0px 15px;
  background-color: #fff;
  .waterfall-box {
    position: relative;
    .waterfall-box-item {
      height: auto;
      position: absolute;
    }
    .content-title {
      width: 100%;
      word-wrap: break-word;
      display: -webkit-box;
      font-size: 14px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .content-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      .pos-left {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .pos-right {
        color: #b6b6b6;
      }
    }
  }
}
</style>
