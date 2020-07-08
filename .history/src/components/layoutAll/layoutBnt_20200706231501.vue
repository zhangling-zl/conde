<template>
  <div>
    <div class="bnt flex j-c">
      <div class="bnt-center">
        <div class="flex a-c">
          <div class="text1 f14">RSS</div>
          <div class="line mlr5"></div>
          <div class="text2 f14">源码地址</div>
        </div>
        <div class="text3  mt10">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
        <p class="text4">服务器赞助商为<img src="" alt="">，存储赞助商为<img src="../../assets/imgs/Fg0jtDIcTqVC049oVu5-sn6Om4NX.png" class="img2">，由 <img src="" alt=""> 提供应用性能服务。</p>
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
.bnt {
  width: 100%;

  .bnt-center {
    width: 1360px;
    height: 100%;
  }
}
.text1,
.text2 {
  color: rgb(102, 102, 102);
  &:hover{
    color: rgb(56,95,138);
  }
}
.line {
  width: 1px;
  height: 12px;
  background-color: rgb(226,226,226);
}
.text3{
  color: rgb(171,171,171);
}
.text4{
  color: rgb(171,171,171);
}
.img2{
  width: 115px;
  height: 44px;
}
</style>