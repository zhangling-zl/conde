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
       str:200

     }
   },
   methods: {
     golo(){
      //  this.$router.push('/about')//可以做回退操作
      //  this.$router.replace('/about')//不可以做回退操作
      // this.$router.push({path:'/about',query:{id:this.id,str:this.str}})
      this.$router.push({name:'About',query:{id:this.id,str:this.str}})
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