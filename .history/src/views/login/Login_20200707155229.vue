<template>
 <div>
 <loginAll></loginAll></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let user = {
        username: this.username,
        password: this.password
      };
      localStorage.setItem("user", JSON.stringify(user)); //把填写的数据存在本地存储里面，因为user是一个对象,所以要用JSON.stringify转化一下
      this.$router.go(-1)
      this.$router.black
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>