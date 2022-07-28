<template>
  <div>
    <!-- 在使用v-bind的时候,直接赋值一个对象,则v-bind会把对象的键值对依次拿出来,设置给当前的模板作为属性 -->
    <div v-bind="{ a: 1, b: 2 }">div</div>
    <!-- 上边的v-bind最终解析出来就是下边的格式 -->
    <div :a="1" :b="2">div</div>

    <!-- 批量传递props -->
    <MyHeader v-bind="person" />
    <hr />
    <h2>这个count每次加2</h2>
    <Count :num="2" />
    <hr />
    <h2>这个count每次加3</h2>
    <Count :num="3" />

    <hr />

    <Update :person="person" :count="0" />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import Count from "./components/Count";
import Update from "./components/Update";
export default {
  name: "App",
  data() {
    return {
      person: {
        name: "laowang",
        age: 18,
        sex: "nan",
      },
    };
  },
  components: {
    MyHeader,
    Count,
    Update,
  },
};
</script>

<style scoped>
</style>