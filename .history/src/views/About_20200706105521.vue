<template>
  <div>
    <h2>我是home组件</h2>
    {{id}}----{{str}}
    {{id1}}----{{str1}}
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
      id1: "",
      str1: null
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    this.str = this.$route.params.str;
    this.id1 = this.$route.params.id1;
    this.str1 = this.$route.params.str1;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
