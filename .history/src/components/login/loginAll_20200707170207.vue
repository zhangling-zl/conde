<template>
  <div>
    <div class="login j-c a-c flex">
      <el-card class="box-card">
          <h3>欢迎来到cNode社区</h3>
          <el-from :model="from" :rules='rules' label-width='80px'>
            <el-from-item label='请输入用户名' prop='username'>
             <el-input v-model="from.username" placeholder="请输入用户名"></el-input>
            </el-from-item>
            <el-from-item label='请输入密码' prop='password'>
             <el-input v-model="from.password" placeholder="请输入密码"></el-input>
            </el-from-item>
            <el-from-item label='请确认密码' prop='passwordAll'>
             <el-input v-model="from.passwordAll" placeholder="请输入密码"></el-input>
            </el-from-item>
             <el-button type="primary" style="width:'100%'">立即登录</el-button>
          </el-from>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      from:{
        username:'',
        password:'',
        passwordAll:''
      },
      
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.login {
  width: 100wh;
  height: 100vh;
  background-color: #eee;
}
.text {
  font-size: 14px;
}

.item {
  padding: 15px 0;
}

.box-card {
  width: 400px;
}
</style>