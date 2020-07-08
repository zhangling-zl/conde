<template>
  <div>
    <div class="left">
      <div v-for="(item,index) in arrs" :key="index">
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    arrs: {
      type: Array
    }
  },
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
.left {
  width: 1052px;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
}
</style>