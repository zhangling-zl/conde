<template>
  <div>
    <div class="top flex j-c">
      <div class="top-center flex j-b a-c">
        <div class="left flex j-b a-c">
          <img src="../../assets/imgs/cnodejs_light.svg" class="img1 mr10" />
          <input
            type="text"
            class="input"
            @focus="focus"
            @blur="blur"
            :class="{'colorAll':flge===true}"
          />
          <img src="../../assets/imgs/search.e53b380a.hashed.png" class="img2" />
        </div>
        <div class="rigth flex">
          <div class="text mr30">首页</div>
          <div class="text mr30">新手入门</div>
          <div class="text mr30">API</div>
          <div class="text mr30">关于</div>
          <div class="text mr30">注册</div>
          <div class="text " @click="login">登录</div>
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
      flge: false
    };
  },
  methods: {
    //得到焦点事件
    focus() {
      this.flge = true;
    },
    //失去焦点事件
    blur() {
      this.flge = false;
    },
    //点击跳转到登录页面
    login(){
      this.$router.push('/login')
    }
  },
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
  width: 130px;
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
  padding: 0 25px;
  &:hover {
    background-color: rgb(255, 255, 255);
    transition: all 1s;
  }
}
.img2 {
  position: absolute;
  left: 224px;
}
.text {
  color: rgb(204, 204, 204);
  &:hover {
    color: #fff;
  }
}
.colorAll {
  background-color: rgb(255, 255, 255);
}
</style>