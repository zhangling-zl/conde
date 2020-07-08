<template>
  <div>
    <div class="left">
      <div class="left-center">
        <div v-for="(item,index) in arrs" :key="index">
          <div v-if="id===item.id">
            <div v-html="item.content" class="l-c-text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    arrs: {
      type: Array
    },
    id: {
      type: String
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
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.left-center{

  padding: 20px;
}
.l-c-text{
  width: 80%;
}
img{
  width: 150px;
}
</style>