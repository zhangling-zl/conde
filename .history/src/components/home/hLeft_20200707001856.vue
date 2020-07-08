<template>
  <div>
    <div class="left">
      <div class="left-top ptb10 pl20 pr20">
        <div class="flex">
          <div v-for="(item,index) in text" :key="index"><div class="text">{{item.name}}</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      text: [
        { name: "全部" },
        { name: "精华" },
        { name: "分享" },
        { name: "问答"},
        { name: "招聘"},
        { name: "客户端测试"},
        
      ]
    };
  },
  methods: {},
  mounted() {},
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
.text.bs {
  background-color: rgb(128, 189, 1);
  color: #fff;
}
</style>