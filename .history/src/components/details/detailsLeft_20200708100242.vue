<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {},
  mounted() {
    console.log(this.$route);
    this.id = this.$route.query.id;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>