<template>
  <div>
    <h2>我是home组件</h2>
   <!-- {{sun}}----{{num}}-->
    {{id}}---{{str}}
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      str: null,
      sun: "",
      num: null
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route);
    // this.sun = this.$route.query.sun;
    // this.num = this.$route.query.num;

    this.id = this.$route.params.id;
    this.str = this.$route.params.str;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
