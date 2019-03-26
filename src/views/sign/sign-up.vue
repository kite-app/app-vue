<template>
  <div>
    <el-form-item label="昵称">
      <el-input v-model="formLabelAlign.name" placeholder="您的昵称"></el-input>
    </el-form-item>
    <el-form-item label="手机">
      <el-input v-model="formLabelAlign.region" placeholder="您的手机号"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.type" placeholder="设置密码"></el-input>
    </el-form-item>
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