<template>
  <div class="about">
    <h1>我在这里写了页面</h1>
    <button @click="goTest2">跳转</button>
  </div>
</template>
<script>
export default {
  name: 'Test',
  methods:{
    goTest2(){
      this.$router.push({
        name:'Test2',
        query:{
          id:123,
          name:"rink"
        }
      })
    }
  }
 
}

</script>