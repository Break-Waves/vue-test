<template>
  <div class="count">
    <h1>{{ count }}</h1>
    <button @click="add">累加</button>
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
  },
};
</script>

<style>
.count {
  background-color: yellowgreen;
  height: 200px;
}
</style>