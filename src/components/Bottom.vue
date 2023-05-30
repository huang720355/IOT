<template>
  <div class="bottomMsg">
   技术支持 | 北京维思陆科技有限公司
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: ""
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomMsg {
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #BEC4C9;
    font-size: 16px;
  }
</style>
