<template>
  <div class="home">
    <!-- 头部 -->
    <HeaderVue/>
    <!-- body -->
    <router-view/>
    <!-- 尾部 -->
    <BottomVue/>
  </div>
</template>

<script>
import BottomVue from '../components/Bottom.vue';
import HeaderVue from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    HeaderVue,
    BottomVue
  }
}
</script>
