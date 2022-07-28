<template>
  <div>
    <h1 class="header">Header</h1>
    <p>{{ name }},{{ age }},{{ sex }}</p>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props: ["name", "age", "sex"],
};
</script>

<style scoped>
.header {
  background: red;
  height: 100px;
}
</style>