<template>
  <div>
    <div class="one">头部</div>
    <div class="j-flex">
      <div>
        <router-view></router-view>
      </div>
      <div>侧边</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
  width: 200px;
  padding: 5px 0;
  border:1px solid #ccc;
}
</style>