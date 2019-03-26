<template>
  <div>
    <el-form-item label="账号">
      <el-input v-model="formLabelAlign.name" placeholder="手机号或邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.region" placeholder="密码"></el-input>
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