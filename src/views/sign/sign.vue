<template>
  <div class="sign-container">
    <div class="sign-form">
      <el-form
        :label-position="'right'"
        label-width="40px"
        :model="formLabelAlign"
        class="i-el-form"
      >
        <div class="normal-title">
          <!-- <router-link to="/sign_in">登录</router-link> -->
          <!-- <router-link :to="{path:'/sign_in'}">登录</router-link> -->
          <!-- <router-link :to="{path:'/sign_in',params:{id:1}}">登录</router-link> -->
          <span @click="handleClick('sign_in')">登录</span>
          <!-- <router-link to="/sign_in"></router-link> -->
          <span class="spot">·</span>
          <span @click="handleClick('sign_up')">注册</span>
        </div>
        <signIn v-if="isShowView"></signIn>
        <signUp v-if="!isShowView"></signUp>
        <el-button type="success" round>{{buttonText}}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import signIn from "./sign-in.vue";
import signUp from "./sign-up.vue";

export default {
  data() {
    return {
      thisRouter: this.$route.path,
      isShowView: true,
      buttonText: "登录",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  components: {
    signIn,
    signUp
  },
  created() {
    if (this.thisRouter === "/sign-in") {
      this.isShowView = true;
    }
    console.log(this.thisRouter);
  },
  methods: {
    handleClick(path) {
      if (path === "sign_in") {
        this.isShowView = true;
        this.buttonText = "登录";
        this.$router.push(`/${path}`);
      } else {
        this.isShowView = false;
        this.buttonText = "注册";
        this.$router.push(`/${path}`);
      }
    }
  }
};
</script>

<style lang="less">
.sign-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  .sign-form {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 400px;
    background-color: #fff;
  }
  .el-form-item {
    margin-bottom: 15px;
  }
  .normal-title {
    text-align: center;
    margin: 40px auto 30px;
    padding: 10px;
    font-size: 18px;
    color: #969696;
    .spot {
      font-weight: 800;
    }
    span {
      padding: 8px;
      font-weight: 400;
    }
  }
  .el-form {
    width: 300px;
  }
  .el-button {
    width: 100%;
    margin: 10px 0 60px 0;
  }
}
</style>


