<template>
 <div>
  <h2>我是home组件</h2>
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
       id:'',
       str:null
     }
   },
   methods: {

   },
   mounted() {
     console.log(this.$route);
     this.id=this.$route.params.id

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
