<template>
  <div>
    <div class="rigth">
      <div class="rigth-one p10 mb20">
        <div class="r-one-text1">CNode：Node.js专业中文社区</div>
        <div class="flex a-c mb5 mt20">
          <div class="r-one-text1 f14">您可以</div>
          <div class="r-one-text2 f14 mlr5" @click="login">登录</div>
          <div class="r-one-text1 f14">或</div>
          <div class="r-one-text2 f14 mlr5" @click="login">注册</div>
          <div class="r-one-text1 f14">, 也可以</div>
        </div>
        <el-button type="primary" @click="login">通过 GitHub 登录</el-button>
      </div>
      <div class="rigth-tow mb20">
        <div class="p10">
          <img src="../../assets/imgs/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_.png" class="img1 mb5" />
          <img src="../../assets/imgs/FlajCCXkxZaOsuWp3k0iaiqfrJaS.png" class="img1 mb5" />
          <img src="../../assets/imgs/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq.png" class="img1" />
        </div>
      </div>
      <div class="rigth-there">
        <div class="rigth-there-top f14 p10">无人回复的话题</div>
        <div class="rigth-there-bnt">
          <div class="r-there-bnt-text f14 f600">Vue 项目推荐，Github 过万 Star</div>
          <div>支持markdown语法的思维导图和大纲工具</div>
          <div>CNodejs每日新闻(2020-07-06)</div>
          <div>独立开发者专属的javascript前后端访问框架</div>
          <div>找一个能用的 mac rdp lib 库</div>
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
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rigth {
  width: 290px;
}
.rigth-one {
  background-color: #fff;
}
.r-one-text1 {
  color: rgb(51, 51, 51);
}
.r-one-text2 {
  color: rgb(119, 128, 135);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.rigth-tow {
  background-color: #fff;
}
.img1 {
  width: 100%;
  height: 100%;
}
.rigth-there {
}
.rigth-there-top {
  background-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
  border-radius: 5px 5px 0 0;
}
.rigth-there-bnt {
  background-color: #fff;
}
</style>