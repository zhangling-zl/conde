<template>
  <div>
     <layoutTop></layoutTop>
     <div><router-view></router-view></div>
     <layoutBnt></layoutBnt>
  </div>
</template>

<script>
import layoutTop from '../../components/layoutAll/layoutTop'
import layoutBnt from '../../components/layoutAll/layoutBnt'
export default {
  name: "",
  props: {},
  components: {
    layoutTop,
    layoutBnt
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.one {
  width: 202px;
  padding: 5px 0;
  border: 1px solid #ccc;
}
.tow {
  width: 150px;
  padding: 5px 0;
  border: 1px solid #ccc;
}
.there {
  width: 50px;
  padding: 5px 0;
  border: 1px solid #ccc;
}
.four {
  width: 202px;
  padding: 5px 0;
  border: 1px solid #ccc;
}
</style>