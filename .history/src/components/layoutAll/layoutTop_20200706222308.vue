<template>
  <div>
    <div class="top flex j-c">
      <div class="top-center flex j-b a-c">
        <div class="top-center-left flex j-b a-c">
          <img src="../../assets/imgs/cnodejs_light.svg" class="img1" />
          <input type="text" class="input" />
        </div>
        <div class="top-center-rigth">
          <div class="flex">
            <div class="text mr30 cf">首页</div>
            <div class="text mr30 cf">新手入门</div>
            <div class="text mr30 cf">API</div>
            <div class="text mr30 cf">关于</div>
            <div class="text mr30 cf">注册</div>
            <div class="text mr30 cf">登录</div>
          </div>
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
}
.input {
  width: 233px;
  height: 36px;
  background-color: rgb(136, 136, 136);
  outline: none;
  border: none;
  border-radius: 20px;
}
</style>