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
    this.id = this.$route.query.id;
    console.log(111);
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>