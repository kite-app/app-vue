<template>
  <el-header>
    <div class="nav">
      <div class="nav-left">
        <div class="nav-logo">
          <img src="../assets//img/logo.png" alt>
        </div>
        <div class="nav-item nav-item-text">
          <router-link to="/">首页</router-link>
        </div>
        <div class="nav-item nav-item-text">下载App</div>
      </div>
      <div class="nav-right">
        <div class="nav-item nav-item-text">
          <router-link to="/sign_in">登录</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/user">
            <el-button round>注册</el-button>
          </router-link>
        </div>
        <div class="nav-item">
          <el-button type="danger" round>写文章</el-button>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "headerComponent"
};
</script>

<style scoped lang="less">
.el-header {
  padding: 0 20px 0 0;
  background-color: #fff !important;
  border: 1px solid #efefef;
  min-width: 600px;
  max-height: 60px;
}

.nav {
  display: flex;
  justify-content: space-between;
  // max-height: 60px;
}

.nav-left,
.nav-right {
  display: flex;
}

.nav-logo {
  img {
    width: 100px;
    height: 56px;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-color: red;
}

.nav-item-text {
  padding: 0 15px;
  &:hover {
    background-color: #efefef;
  }
}
</style>
