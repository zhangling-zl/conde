<template>
  <div>
    <!--<loginAll></loginAll>-->
    <loginAllone></loginAllone>
  </div>
</template>

<script>
// import loginAll from '../../components/login/loginAll'
import loginAllone from '../../components/login/loginAllone'
export default {
  name: "",
  props: {},
  components: {
    // loginAll,
    loginAllone
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // login() {
    //   let user = {
    //     username: this.username,
    //     password: this.password
    //   };
    //   localStorage.setItem("user", JSON.stringify(user)); //把填写的数据存在本地存储里面，因为user是一个对象,所以要用JSON.stringify转化一下
    //   this.$router.go(-1);
    //   this.$router.black;
    // }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>