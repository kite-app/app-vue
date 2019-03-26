<template src='./home.template.html'></template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/header.vue";
export default {
  name: "home",
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    HeaderComponent
  },
  created() {}
};
</script>
<style lang="less" scoped>
@import "./home.template.less";
</style>
