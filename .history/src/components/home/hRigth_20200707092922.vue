<template>
  <div>
    <div class="rigth">
      <div class="r-one-text1">CNode：Node.js专业中文社区</div>
      <div class="flex a-c mb10">
        <div class="r-one-text1 f14">您可以</div>
        <div class="r-one-text2 f14 mlr5" @click="login">登录</div>
        <div class="r-one-text1 f14">或</div>
        <div class="r-one-text2 f14  mlr5" @click="login">注册</div>
        <div class="r-one-text1 f14">, 也可以</div>
      </div>
       <el-button type="primary" @click="login">通过 GitHub 登录</el-button>
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
.rigth {
  width: 290px;
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
</style>