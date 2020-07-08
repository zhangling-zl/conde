<template>
  <div>
   <!-- <h2>我是home组件</h2>
    {{sun}}----{{num}}
    {{id}}---{{str}}-->
    <input type="text" >
    {{this.obj}}
    
  </div>
</template>

<script>
export default {
  name: "about",
  props: {},
  components: {},
  data() {
    return {
      // id: "",
      // str: null,
      sun: "",
      num: null,
      obj:{}
    };
  },
  methods: {},
  mounted() {
    // this.sun = this.$route.query.sun;
    // this.num = this.$route.query.num;
    this.obj = JSON.parse(this.$route.query.obj)
    console.log(this.$route);
    // this.id = this.$route.params.id;
    // this.str = this.$route.params.str;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
