<template>
  <div>
    <div class="bnt flex j-c">
      <div class="bnt-center">
        <div class="flex a-c">
          <div class="text1">RSS</div>
          <div class="line mlr5"></div>
          <div class="text2">源码地址</div>
        </div>
        <div class="text2 f18">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
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
  background-color: #eee;
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
</style>