<template>
  <div>
  <div style="background: orange;">小可爱</div>
  <div style=" background: orangered;">小仙女</div>
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
       sun:'我是小仙女',
       num:250
      // obj: { name: "小可爱", strr: 123456 }
    };
  },
  methods: {
    logo() {
      //  this.$router.push('/about')//可以做回退操作
      //  this.$router.replace('/about')//不可以做回退操作


      this.$router.push({path:'/about',query:{sun:this.sun,num:this.num}}) //query传参（可以传path，也可以传name）
      // this.$router.push({name:'About',query:{id:this.id,str:this.str}})
      // this.$router.push({name:'About',params:{id:this.id,str:this.str}})//params传参（只能传name，不能传path）
      // this.$router.push({
      //   path: "/about",
      //   query: { obj: JSON.stringify(this.obj) }
      // });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>