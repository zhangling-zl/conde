<template>
  <div>
    <div>
      <input type="text" v-model="username" />
    </div>

    <div>
      <input type="password" v-model="password" />
    </div>

    <button @click="login">登录</button>
  </div>
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>