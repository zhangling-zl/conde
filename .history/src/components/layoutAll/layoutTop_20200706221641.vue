<template>
  <div>
    <div class="top flex j-c">
      <div class="top-center">
       <img src="../../assets/imgs/cnodejs_light.svg" class="img1">
       <input type="text" class="input">
      </div>
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
.top {
  width: 100%;
  height: 50px;
  background-color: rgb(68, 68, 68);
  .top-center{
    width: 1360px;
    height: 100%;
  }
}
.img1{
  width: 150px;
}
.input{
  width: 233px;
  height: 36px;
  background-color: rgb(136,136,136);
}
</style>