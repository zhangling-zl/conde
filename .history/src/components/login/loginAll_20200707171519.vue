<template>
  <div>
    <div class="login j-c a-c flex">
      <el-card class="box-card">
        <h3>欢迎来到cNode社区</h3>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop='email'>
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
           <el-button type="primary">立即登录</el-button>
        </el-form>
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
      ruleForm: {
        username: "",
        password: "",
        email:''
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email:[
           { required: true, message: "请输入活动名称", trigger: "blur" },
        ]

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
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