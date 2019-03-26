<template>
  <div class="user-container">
    <HeaderComponent></HeaderComponent>
    <el-main>
      <el-row>
        <el-col class="i-col-left" :span="8">
          <ul class="aside">
            <li>
              <i class="el-icon-setting"></i>&emsp;基础设置
            </li>
            <li>
              <i class="el-icon-document"></i>&emsp;个人资料
            </li>
            <li>
              <i class="el-icon-tickets"></i>&emsp;&emsp;黑名单
            </li>
            <li>
              <i class="el-icon-setting"></i>&emsp;账号管理
            </li>
          </ul>
        </el-col>
        <el-col :span="14">
          <div class="i-user-heade-img">
            <img src="../../assets/img/logo.png" alt>
            <el-button round>圆角按钮</el-button>
          </div>
          <el-form ref="form" :label-position="'left'" :model="form" label-width="110px">
            <el-form-item label="昵称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮件提醒通知">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="常用编辑器">
              <el-radio-group v-model="form.resource">
                <el-radio label="富文本"></el-radio>
                <el-radio label="MarkDown"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <el-button type="success">保存</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  components: {
    HeaderComponent
  },
  created() {},
  methods: {}
};
</script>

<style lang="less">
.user-container {
  .aside {
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      padding: 15px 0;
      text-align: center;
      &:hover {
        background: #efefef;
      }
    }
  }

  .el-input {
    width: 200px;
  }
  .el-radio-group {
    margin-top: 10px;
  }
  .el-form-item {
    &:after {
      content: "";
      width: 100%;
      margin-top: 5px;
      border-bottom: 1px solid #f0f0f0;
    }
    &:last-child:after {
      content: "";
      width: 100%;
      margin-top: 5px;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>


