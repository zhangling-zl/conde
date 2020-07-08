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
  methods: {
    getData1() {
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          console.log(res.data);
          if (res.data.success === true) {
            this.arrs = res.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData1();
    this.id = this.$route.query.id;
    console.log(this.$route);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Details {
  background-color: rgb(225, 225, 225);
}
.Details-center {
  width: 1360px;
}
</style>