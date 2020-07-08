<template>
  <div>
    <div class="rigth">
      <div class="rigth-one p10 mb20">
        <div class="r-one-text1">CNode：Node.js专业中文社区</div>
        <div class="flex a-c mb5 mt20">
          <div class="r-one-text1 f14">您可以</div>
          <div class="r-one-text2 f14 mlr5" @click="login">登录</div>
          <div class="r-one-text1 f14">或</div>
          <div class="r-one-text2 f14 mlr5" @click="login">注册</div>
          <div class="r-one-text1 f14">, 也可以</div>
        </div>
        <el-button type="primary" @click="login">通过 GitHub 登录</el-button>
      </div>
      <div class="personal mb20">
        <div class="personal-top p10">个人资料</div>
        <div class="personal-bnt p10">
          <div class="f14 mb10">ip</div>
          <div class="f14 mb10">积分0</div>
          <div class="f14">"这个人很懒，什么都没有留下"</div>
        </div>
      </div>
      <div class="rigth-tow mb20">
        <div class="p10">
          <img src="../../assets/imgs/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_.png" class="img1 mb5" />
          <img src="../../assets/imgs/FlajCCXkxZaOsuWp3k0iaiqfrJaS.png" class="img1 mb5" />
          <img src="../../assets/imgs/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq.png" class="img1" />
        </div>
      </div>
      <div class="rigth-there mb20">
        <div class="rigth-there-top f14 p10">无人回复的话题</div>
        <div class="rigth-there-bnt plr10 pt20 pb20">
          <div class="r-there-bnt-text mb10 text-hidden">Vue 项目推荐，Github 过万 Star</div>
          <div class="r-there-bnt-text mb10 text-hidden">支持markdown语法的思维导图和大纲工具</div>
          <div class="r-there-bnt-text mb10 text-hidden">CNodejs每日新闻(2020-07-06)</div>
          <div class="r-there-bnt-text mb10 text-hidden">独立开发者专属的javascript前后端访问框架</div>
          <div class="r-there-bnt-text text-hidden">找一个能用的 mac rdp lib 库</div>
        </div>
      </div>
      <div class="rigth-four mb20">
        <div class="rigth-four-top flex a-c p10">
          <div class="rigth-four-text1 f14 mr10">积分榜</div>
          <div class="rigth-four-text2">TOP 100 >></div>
        </div>
        <div class="rigth-four-bnt p10">
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">22305</div>
            <div class="rigth-four-bnt-text2 f14">i5ting</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">15815</div>
            <div class="rigth-four-bnt-text2 f14">alsotang</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">9745</div>
            <div class="rigth-four-bnt-text2 f14">atian25</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">9350</div>
            <div class="rigth-four-bnt-text2 f14">leapon</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">8780</div>
            <div class="rigth-four-bnt-text2 f14">jiyinyiyong</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">7480</div>
            <div class="rigth-four-bnt-text2 f14">7480</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">6855</div>
            <div class="rigth-four-bnt-text2 f14">im-here</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">6115</div>
            <div class="rigth-four-bnt-text2 f14">DevinXian</div>
          </div>
          <div class="flex mb10">
            <div class="rigth-four-bnt-text1 f14 mr10">5815</div>
            <div class="rigth-four-bnt-text2 f14">chapgaga</div>
          </div>
          <div class="flex">
            <div class="rigth-four-bnt-text1 f14 mr10">5375</div>
            <div class="rigth-four-bnt-text2 f14">magicdawn</div>
          </div>
        </div>
      </div>
      <div class="rigth-five mb20">
        <div class="rigth-five-top p10">友情社区</div>
        <div class="rigth-five-bnt p20 bf">
          <img src="../../assets/imgs/ruby-china-20150529.png" class="img2" />
          <img src="../../assets/imgs/phphub-logo.png" class="img2" />
        </div>
      </div>
      <div class="rigth-fixe">
        <div class="rigth-fix-top p10">客户端二维码</div>
        <div class="rigth-fix-bnt j-c a-c column flex">
          <img src="../../assets/imgs/FtG0YVgQ6iginiLpf9W4_ShjiLfU.png" class="img3 mt10" />
          <div class="rigth-fix-bnt-text mb10 mt5">客户端源码地址</div>
        </div>
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
    return {
      user:{}
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user")); //获取本地数据
    console.log(user);
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rigth {
  width: 290px;
}
.rigth-one {
  background-color: #fff;
}
.r-one-text1 {
  color: rgb(51, 51, 51);
}
.r-one-text2 {
  color: rgb(119, 128, 135);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.rigth-tow {
  background-color: #fff;
}
.img1 {
  width: 100%;
  height: 100%;
}

.rigth-there-top {
  background-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
  border-radius: 5px 5px 0 0;
}
.rigth-there-bnt {
  background-color: #fff;
}
.r-there-bnt-text {
  color: rgb(119, 128, 135);
  &:hover {
    cursor: pointer;
  }
}
.rigth-four-text2 {
  color: rgb(102, 102, 102);
  &:hover {
    color: rgb(56, 95, 138);
    cursor: pointer;
  }
}
.rigth-four-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.rigth-four-bnt-text1 {
  width: 50px;
  color: rgb(128, 128, 128);
}
.rigth-four-bnt-text2 {
  color: rgb(128, 128, 128);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.rigth-four-bnt {
  background-color: #fff;
}
.rigth-five-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.img2 {
  width: 150px;
  height: 50px;
}
.rigth-fix-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.rigth-fix-bnt {
  background-color: #fff;
  width: 100%;
}
.img3 {
  width: 200px;
  height: 200px;
}
.rigth-fix-bnt-text {
  color: rgb(119, 128, 135);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.personal-top {
  background-color: rgb(246, 246, 246);
  border-radius: 5px 5px 0 0;
}
.personal-bnt {
  background-color: #fff;
}
</style>