<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      arrs: []
    };
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
.left {
  width: 1052px;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
}
</style>