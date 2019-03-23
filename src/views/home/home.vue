<template src='./home.template.html'></template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    HelloWorld
  },
  created() {}
};
</script>
<style lang="less" scoped>
@import "./home.template.less";
</style>
