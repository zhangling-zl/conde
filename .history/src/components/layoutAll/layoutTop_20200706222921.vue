<template>
  <div>
    <div class="top flex j-c">
      <div class="top-center flex j-b a-c">
        <div class="left flex j-b a-c">
          <img src="../../assets/imgs/cnodejs_light.svg" class="img1 mr10" />
          <input type="text" class="input" />
          <img src="../../assets/imgs/search.e53b380a.hashed.png" class="img2" />
        </div>
        <div class="rigth flex">
          <div class="text mr30">首页</div>
          <div class="text mr30">新手入门</div>
          <div class="text mr30">API</div>
          <div class="text mr30">关于</div>
          <div class="text mr30">注册</div>
          <div class="text mr30">登录</div>
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
.top {
  width: 100%;
  height: 50px;
  background-color: rgb(68, 68, 68);
  .top-center {
    width: 1360px;
    height: 100%;
  }
}
.img1 {
  width: 150px;
  height: 28px;
}
.input {
  width: 233px;
  height: 26px;
  background-color: rgb(136, 136, 136);
  outline: none;
  border: none;
  border-radius: 20px;
  position: relative;
}
.img2 {
  position: absolute;
  left: 50px;
}
.text {
  color: rgb(204, 204, 204);
  &:hover {
    color: #fff;
  }
}
</style>