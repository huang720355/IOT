<template>
  <div id="app">
    <router-view v-slot="{component}">
      <keep-alive >
        <component :is="component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      message: ''
    };
  },
  mounted(){
    console.log(this,"$props")
  }
};

</script>
<style>

</style>
