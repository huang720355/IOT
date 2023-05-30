<template>
  <div class="about">
    <h1>我在这里写了页面2</h1>
    <button @click="goTest1">跳转</button>
    <button @click="clickM">打印</button>
  </div>
</template>
<script>
export default {
  name: "Test2",
  data() {
    return {
      person:{}
    };
  },
  methods: {
    goTest1() {
      this.$router.push({
        name: "IndexMain",
      });
    },
    clickM() {
      console.log(this.person);
    },
  },
  mounted() {
    this.person = this.$route.query
  },
};
</script>