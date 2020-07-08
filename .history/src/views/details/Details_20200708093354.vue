<template>
  <div>
    <div class="Details flex j-c ptb20">
      <div class="Details-center flex j-b">
        <detailsLeft></detailsLeft>
        <detailsRigth></detailsRigth>
      </div>
    </div>
  </div>
</template>

<script>
import detailsLeft from "../../components/details/detailsLeft";
import detailsRigth from "../../components/details/detailsRigth";
export default {
  name: "",
  props: {},
  components: {
    detailsLeft,
    detailsRigth
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
.Details{
  background-color: rgb(225, 225, 225);
}
.Details-center {
  width: 1360px;

}
</style>