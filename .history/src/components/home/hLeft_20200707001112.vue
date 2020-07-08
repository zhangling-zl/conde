<template>
  <div>
    <div class="left">
      <div class="left-top ptb10 pl20 pr20">
        <div class="flex">
          <div class="text">全部</div>
          <div class="text">精华</div>
          <div class="text">分享</div>
          <div class="text">问答</div>
          <div class="text">招聘</div>
          <div class="text">客户端测试</div>
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
    return {};
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
  border-radius:5px 5px 0 0 ;
}
.text{
    border-radius:2px;
    background-color: #ccc;
}
</style>