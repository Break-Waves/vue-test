<template>
  <div class="count">
    <!-- 
      如果想要获取某个真实DOM 我们需要使用ref属性,值是一个名字,未来通过这个名字获取DOM
     -->
    <h1 ref="countEle">{{ count }}</h1>
    <button @click="add">累加</button>
    <button @click="getEle">点击获取h1</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    getEle() {
      /* 
        在组件实例上有一个$ref属性,是一个对象,对象保存的是模板中书写了ref属性的元素
        可以通过this.$refs.xxx获取,得到是一个真实DOM
      */
      console.log(this);
      console.log(this.$refs.countEle);
    },
  },
};
</script>

<style>
.count {
  background-color: yellowgreen;
  height: 200px;
}
</style>