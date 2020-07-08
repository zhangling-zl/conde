<template>
  <div>
    <h2>我是home组件</h2>
    {{id}}----{{str}}
    {{sun}}----{{num}}
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
    this.id = this.$route.params.id;
    this.str = this.$route.params.str;
    this.sun = this.$route.query.sun;
    this.num = this.$route.query.num;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
