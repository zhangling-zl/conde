<template>
  <div>
    <!-- <h1>我是首页</h1>
    <button @click="golo">点击跳转到about页面</button>-->
    <!-- <input type="text" /> -->
    <button @click="logo">跳转到About页面</button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  components: {},
  data() {
    return {
      //  id:'我是小可爱',
      //  str:200,
      sun: "我是小仙女",
      num: 250
      // obj: { name: "小可爱", strr: 123456 }
    };
  },
  methods: {
  
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>