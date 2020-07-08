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
       this.$router.push('/about')
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