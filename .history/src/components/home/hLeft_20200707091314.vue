<template>
  <div>
    <div class="left">
      <div class="left-top ptb10 pl20 pr20">
        <div class="flex">
          <div v-for="(item,index) in text" :key="index">
            <div class="text" :class="{'text-bs':num===index}" @click="clickAll(num)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div v-for="(item) in arr" :key="item.id">
          <div class="boxs">
            <!-- 图片 -->
            <img :src="item.author.avatar_url" alt />
            <!--时间-->
            <div class="text1">
              <div class="text1_1">{{item.reply_count}}</div>
              <div class="text1_2">/{{item.visit_count}}</div>
            </div>
            <div class="Top-share">
              <div v-if="item.top" class="Top">置顶</div>
              <div v-else>
                <div v-if="item.tab === 'share'" class="share">分享</div>
                <div v-if="item.tab === 'ask'" class="share">问答</div>
              </div>
            </div>
            <!--标题-->
            <div class="text2">{{item.title}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      num: 0,
      text: [
        { name: "全部" },
        { name: "精华" },
        { name: "分享" },
        { name: "问答" },
        { name: "招聘" },
        { name: "客户端测试" }
      ],
      arr: []
    };
  },
  methods: {
    //点击变色事件
    clickAll(item, index) {
      this.num = num;
    },
    //数据
    getData() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          if (res.data.success === true) {
            this.arr = res.data.data;
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.left {
  width: 1052px;
}
.left-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.text {
  border-radius: 5px;
  padding: 4px 8px;
  margin-right: 10px;
  color: rgb(128, 189, 1);
  &:hover {
    cursor: pointer;
    color: rgb(0, 85, 128);
  }
}
.text-bs {
  background-color: rgb(128, 189, 1);
  color: #fff;
}
.boxs {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.boxs:hover {
  background-color: rgb(245, 245, 245);
}
img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.text1 {
  width: 66px;
  margin: 0 10px;
  display: flex;
  align-items: center;
}
.text1_1 {
  font-size: 16px;
  color: rgb(158, 120, 192);
  margin-right: 5px;
}
.text1_2 {
  font-size: 12px;
  color: rgb(180, 180, 180);
}
.Top-share {
  width: 32px;
  height: 20px;
}
.Top {
  width: 32px;
  height: 20px;
  background-color: rgb(128, 189, 1);
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.share {
  width: 32px;
  height: 20px;
  background-color: rgb(229, 229, 229);
  color: rgb(153, 153, 153);
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text2 {
  color: rgb(51, 51, 51);
  margin-left: 5px;
}
.text2:hover {
  text-decoration: underline;
}
</style>