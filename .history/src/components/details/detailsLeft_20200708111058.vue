<template>
  <div>
    <div class="left">
      <div class="left-center">
        <div v-for="(item,index) in arrs" :key="index">
          <div v-if="id===item.id">
            <div v-html="item.content" ></div>
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
 /deep/ img{
   width: 100%;
 }
 
}
.left-center{
  width: 1022px;
  padding: 20px;
  
}


</style>