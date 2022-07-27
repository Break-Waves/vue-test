<template>
  <div>
    <MyHeader />
    <hr />
    <MyCount />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyCount from "./components/MyCount";
export default {
  name: "App",
  components: {
    MyHeader,
    MyCount,
  },
};
</script>

<style scoped>
</style>