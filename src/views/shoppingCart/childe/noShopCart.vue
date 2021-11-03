<!-- 购物车没有东西页面 -->
<template>
  <div class="noShopCart-page">
    <div class="noShopCart-page-up">
      <div class="up-pic">
        <van-image
          width="100"
          height="100"
          :src="require('@/assets/bg/bg001.jpeg')"
          round
        />
        <div class="car">
          <van-icon class="iconfont" class-prefix="icon" name="cart"></van-icon>
        </div>
      </div>
      <span class="up-words">购物车中没有物品</span>
    </div>
    <div class="noShopCart-page-down">
      <div class="down-title">猜你喜欢</div>
      <div class="down-content">
        <van-grid :column-num="2">
          <van-grid-item v-for="(value, index) in listArray" :key="index">
            <div class="likeitem">
              <div class="likeitempic">
                <van-image :src="value.imgurl" />
              </div>
              <div class="likeitemwords">
                <div class="likeitemwords-title">{{ value.title }}</div>
                <div class="likeitemwords-describe">{{ value.describe }}</div>
                <div class="likeitemwords-price">
                  <span class="price-new">¥{{ value.newprice }}起</span>
                  <span class="price-old">¥{{ value.oldprice }}起</span>
                </div>
                <div class="likeitemwords-tag">
                  <span class="tag-left">{{ value.timetag }}</span>
                  <span v-if="value.color != ''" class="tag-right">
                    {{ value.color }}
                  </span>
                </div>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      // like 就只有6个
      listArray: [
        {
          imgurl: require("@/assets/img/img-00.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "",
        },
        {
          imgurl: require("@/assets/img/img-01.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "3色可选",
        },
        {
          imgurl: require("@/assets/img/img-02.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "3色可选",
        },
        {
          imgurl: require("@/assets/img/img-03.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "",
        },
        {
          imgurl: require("@/assets/img/img-04.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "",
        },
        {
          imgurl: require("@/assets/img/img-05.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "2色可选",
        },
        {
          imgurl: require("@/assets/img/img-06.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "2色可选",
        },
        {
          imgurl: require("@/assets/img/img-06.jpeg"),
          title: "新深海成睡床垫",
          describe: "深海般睡眠，选择好床垫从此变简单",
          newprice: "4400",
          oldprice: "4999",
          timetag: "11.11特惠",
          color: "",
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
.noShopCart-page {
  .noShopCart-page-up {
    height: 240px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .up-pic {
      width: 150px;
      height: 150px;
      position: relative;
      /deep/.van-image {
        width: 100% !important;
        height: 100% !important;
        opacity: 0.3;
      }
      .car {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /deep/.iconfont {
          font-size: 40px;
          color: #8f8f8f;
        }
      }
    }
    .up-words {
      padding-top: 10px;
      color: #8f8f8f;
      font-weight: 600;
    }
  }
  .noShopCart-page-down {
    margin-bottom: 50px;
    .down-title {
      height: 60px;
      width: 100%;
      text-align: center;
      line-height: 60px;
      font-size: 18px;
      color: #000;
    }
    .down-content {
      background: #f5f5f5;
      padding-bottom: 10px;
      /deep/.van-grid-item__content {
        padding: 0px;
      }
      .likeitem {
        width: 100%;
        .likeitempic {
          height: 192px;
          width: 100%;
          .van-image {
            height: 100%;
            width: 100%;
          }
        }
        .likeitemwords {
          padding: 5px 10px 15px 10px;
          .likeitemwords-title {
            font-size: 18px;
            font-weight: bold;
            color: #000;
          }
          .likeitemwords-describe {
            color: #8f8f8f;
            font-size: 14px;
            overflow: hidden;
            display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
            -webkit-box-orient: vertical; //从上到下垂直排列子元素(设置伸缩盒子的子元素排列方式)
            -webkit-line-clamp: 1; //这个属性需要同上面两个属性一起使用，表示显示的行数。
          }
          .likeitemwords-price {
            color: #8f8f8f;
            .price-new {
              color: red;
              margin-right: 4px;
              font-weight: 500;
            }
            .price-old {
              font-size: 12px;
              text-decoration: line-through;
            }
          }
          .likeitemwords-tag {
            font-size: 7px;
            margin-top: 5px;
            .tag-left {
              background-color: #fbeded;
              padding: 3px;
              color: #b57c82;
              margin-right: 5px;
            }
            .tag-right {
              background-color: #f6f6f6;
              padding: 3px;
              color: #6f6f6f;
            }
          }
        }
      }
    }
  }
}
</style>
