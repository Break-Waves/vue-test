<template>
  <div>
    <button @click="getRef">获取Header组件上的ref</button>
    <MyHeader ref="HeaderComp" />
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
  methods: {
    getRef() {
      /* 
        如果把ref属性写在一个组件上,那么$refs对象上保存的是组件实例
      */
      console.log(this.$refs);
      console.log(this.$refs.HeaderComp);
    },
  },
};
</script>

<style scoped>
</style>