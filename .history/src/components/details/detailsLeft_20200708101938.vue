<template>
  <div >
    <div v-if="id===item.id">
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
</style>