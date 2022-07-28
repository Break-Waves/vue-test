<template>
  <div>
    <button @click="updateProps">修改props</button>
    <br />
    {{ count }}
    <br />
    {{ person }}
  </div>
</template>

<script>
export default {
  name: "Update",
  props: ["count", "person"],
  methods: {
    updateProps() {
      //vue不建议直接修改props 首先eslint就会报错，然后vue也会报警告
      // this.count++;

      /* 
        如果props是一个对象,我们修改这个对象内的值,不会报错,但是不推荐这种不安全的做法
      */
      this.person.name = "wangzhongwang";
    },
  },
};
</script>

<style>
</style>