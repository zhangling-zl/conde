<template>
 <div>
  <div class="home">
    <hLeft></hLeft>
    <hRigth></hRigth>
  </div>
 </div>
</template>

<script>
import hLeft from '../../components/home/hLeft'
import hRigth from '../../components/home/hRigth'
 export default {
   name: '',
   props: {
   },
   components: {
     hLeft,
     hRigth

   },
   data () {
     return {

     }
   },
   methods: {

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
.home{
  height: 500px;
  background-color: rgb(225,225,225);
}

</style>