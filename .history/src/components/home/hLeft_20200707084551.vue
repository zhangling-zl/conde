<template>
  <div>
    <div class="left">
      <div class="left-top ptb10 plr20 ">
        <div class="flex">
          <div v-for="(item,index) in text" :key="index">
            <div class="text" :class="{'text-bs':num===index}" @click="clickAll(num)">{{item.name}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
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
      arr:[]
    };
  },
  methods: {
    //点击变色事件
      clickAll(item,index){
          this.num=num
      },
      //数据
      getData(){
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
    this. getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.left {
  width: 1052px;
  height: 200px;
}
.left-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.text {
  border-radius: 5px;
  padding: 4px 8px;
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
</style>