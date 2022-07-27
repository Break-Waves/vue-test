<template>
  <div>
    <MyHeader />
    <hr />
    <Count />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import Count from "./components/Count";
export default {
  name: "App",
  components: {
    MyHeader,
    Count,
  },
};
</script>

<style scoped>
</style>