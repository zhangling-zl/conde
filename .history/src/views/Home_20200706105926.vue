<template>
 <div>
   <h1>我是首页</h1>
   <button @click="golo">点击跳转到about页面</button>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       id:'我是小可爱',
       str:200,
       sun:'我是小仙女',
       num:250

     }
   },
   methods: {
     golo(){
      //  this.$router.push('/about')//可以做回退操作
      //  this.$router.replace('/about')//不可以做回退操作
      // this.$router.push({path:'/about',query:{sun:this.sun,num:this.num}}) //query传参（可以传path，也可以传name）
      // this.$router.push({name:'About',query:{id:this.id,str:this.str}})
      this.$router.push({name:'About',params:{id:this.id,str:this.str}})//params传参（只能传name，不能传path）
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>