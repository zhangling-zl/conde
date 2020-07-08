<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    getData1(){
      axios.get('https://cnodejs.org/api/v1/topic/:id').then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })

    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.$route);
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>