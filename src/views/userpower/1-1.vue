<template>
  <div>
    <h1>1-1</h1>
    <el-button @click="gonext" v-power="['1','2']">按钮权限0</el-button>
    <el-button @click="gonext" v-power="['1']">按钮权限1</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    gonext() {
      this.$router.push("/userpower1/1-2");
    }
  },
  computed: {
  },
};
</script>

<style>
</style>
