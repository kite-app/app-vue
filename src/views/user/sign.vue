<template>
  <div class="sign-container">
    <div class="sign-form">
      <el-form
        :label-position="labelPosition"
        label-width="60px"
        :model="formLabelAlign"
        class="i-el-form"
      >
        <el-form-item label="昵称">
          <el-input v-model="formLabelAlign.name" placeholder="您的昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="formLabelAlign.region" placeholder="您的手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.type" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-button type="success" round>注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
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
}
.sign-form {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 400px;
  height: 500px;
  background-color: #fff;
}
.el-form {
  width: 300px;
}
.el-button {
  width: 100%;
}
</style>


