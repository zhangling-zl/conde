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
      <div
        v-for="(item,index) in arr.slice((currentPage-1)*pageSie,currentPage*pageSie)"
        :key="index"
      >
        <div class="boxs j-b flex a-c">
          <div class="a-c j-c flex">
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
          <!-- <div class="text3 f14">{{getTime(item.last_reply_at)}}</div> -->
          <div v-if="item.day && item.day>=30">{{item.day % 30 }}月前</div>
          <div v-if="item.day && item.day<30  && item.day>=1">{{item.day}}天前</div>
          <div v-if="item.hour && item.hour<24 &&item.hour>1">{{item.hour}}小时前</div>
        </div>
      </div>
      <div class="s a-c flex pl5">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSie"
          layout="total, sizes, prev, pager, next, jumper"
          :total="arr.length"
        ></el-pagination>
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
      arr: [],
      pageSie: 20, //默认每一页多少条
      currentPage: 1 //默认当前页数为第一页
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
            //循环数组
            this.arr.map(item => {
              //拿到数据中每一项的时间戳
              item.time = dayjs(item.last_reply_at).valueOf();
              let now = Date.now(); //获取到当前时间
              item.second = Math.ceil((now - item.time) / 1000); //拿到秒数
              item.mins = Math.ceil((now - item.time) / 1000 / 60); //拿到分钟数
              item.hour = Math.ceil((now - item.time) / 1000 / 60 / 60); //拿到小时数
              item.day = Math.ceil((now - item.time) / 1000 / 60 / 60 / 24); //拿到天数
              console.log((now - item.time) / 1000 / 60 / 60 / 24); //天数的时间戳
            });
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSie = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    }
    // //获取时间 i代表的是item.last_reply_at
    // getTime(i) {
    //   let time = dayjs(i).format("YYYY-MM-DD HH:mm:ss");
    //   return time;
    // }
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
  background-color: #fff;
  border-radius: 5px 5px 0 0;
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
  padding: 10px;
  background-color: #fff;
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
.s {
  height: 50px;
}
.text3 {
  color: rgb(119, 128, 135);
}
</style>