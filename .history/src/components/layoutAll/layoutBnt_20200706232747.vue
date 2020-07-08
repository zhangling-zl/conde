<template>
  <div>
    <div class="bnt flex j-c">
      <div class="bnt-center">
        <div class="flex a-c">
          <div class="text1 f14">RSS</div>
          <div class="line mlr5"></div>
          <div class="text2 f14">源码地址</div>
        </div>
        <div class="text3 mtb10">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
        <p class="text4">
          服务器赞助商为
          <img src="../../assets/imgs/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9.png" class="img1" />，存储赞助商为
          <img src="../../assets/imgs/Fg0jtDIcTqVC049oVu5-sn6Om4NX.png" class="img2" />，由
          <img src="../../assets/imgs/FpMZk31PDyxkC8yStmMQL4XroaGD.png" class="img3" /> 提供应用性能服务。
        </p>
        <div class="flex a-c">
          <div class="text55 mr">新手搭建 Node.js 服务器，推荐使用无需备案的</div>
          <div class="text6">DigitalOcean(https://www.digitalocean.com/)</div>
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
  &:hover {
    color: rgb(56, 95, 138);
  }
}
.line {
  width: 1px;
  height: 12px;
  background-color: rgb(226, 226, 226);
}
.text3 {
  color: rgb(171, 171, 171);
}
.text4 {
  color: rgb(171, 171, 171);
}
.img2 {
  width: 115px;
  height: 44px;
}
.img1 {
  width: 92px;
  height: 18.4px;
}
.img3 {
  width: 166px;
  height: 54px;
}
.text5 {
  color: rgb(171, 171, 171);
}
.text6 {
  color: rgb(0, 136, 204);
  &:hover {
    color: rgb(0, 85, 128);
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>