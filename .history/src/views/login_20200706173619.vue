<template>
  <div>
    <div>
      用户名：
      <input type="text" v-model="username" />
    </div>
    <div>
      密码：
      <input type="password" v-model="password" />
    </div>
    <button>登录</button>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>