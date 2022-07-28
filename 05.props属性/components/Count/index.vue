<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <h2>id:{{ id }}</h2>
    <button @click="add(num)">累加</button>
    <button @click="showThis">打印组件实例</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  /* 
    在组件的配置项中,声明要接受的props的属性
    在当前的组件实例上有一个_props的对象,保存着当前的接收的prop
    并且把prop的值在组件实例上也放了一份,我们可以直接获取
  */
  // props: ["num"],

  /* props配置向在接收prop的时候,可以做一些类型限制 */
  /* props: {
    num: Number,
  }, */

  /* props还可以做更多的限制 */
  props: {
    num: {
      type: Number,
    },
    id: {
      type: String,
      required: true,
      default: Date.now(),
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(num) {
      this.count += num;
    },
    showThis() {
      console.log(this);
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