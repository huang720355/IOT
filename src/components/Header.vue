<template>
  <div>
    <div class="headerMain">
      <div class="timeBar">
        <div class="time">10:42</div>
        <div class="week">
          <span>9.28</span>
          <span>周三</span>
        </div>
      </div>
      <div class="hosLogo">
        <img src="../assets/hosLogo.png" alt="" />
      </div>
      <div class="deviceNum">设备编号: G001</div>
    </div>
    <div class="jumpBar" v-show="isHomePage">
      <div class="back" @click="back">
        <img src="../assets/back.png" alt="" />
        <span>返回</span>
      </div>
      <div class="home" @click="home">
        <span>首页</span>
        <img src="../assets/home.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store';
export default {
  naem: "Header",
  data() {
    return {
     
    };
  },
  methods: {
    home() {
      this.$router.push({
        name: "IndexMain",
      });
    },
    back() {
      this.$router.go(-1);
    },
  },
 //计算属性监听isHomePage变化改变头部状态
 computed:{
  isHomePage:()=>store.state.isHomePage
 },
  props: {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.headerMain {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: #2f5eff;
  box-shadow: 0px 2px 30px 0px rgba(46, 49, 57, 0.12);
}
.timeBar {
  width: 160px;
  height: 66px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgba(255, 255, 255, 0.34);
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.time {
  font-size: 32px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
}
.week {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.hosLogo {
  height: 100px;
  display: flex;
  align-items: center;
}
.deviceNum {
  width: 20%;
  color: white;
  opacity: 0.6;
  font-size: 20px;
  padding-top: 12px;
}
/* 跳转*/
.jumpBar {
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
  background: white;
  box-shadow: 0px -2px 30px 0px rgba(46, 49, 57, 0.12);
  position: fixed;
  top: 100px;
  display: flex;
  justify-content: space-between;
}
.back {
  width: 160px;
  height: 52px;
  background: rgba(47, 94, 255, 0.16);
  border-radius: 0px 4px 4px 70px;
  margin: 14px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #2f5eff;
}
.home {
  width: 160px;
  height: 52px;
  background: rgba(47, 94, 255, 0.16);
  border-radius: 0px 4px 70px 4px;
  margin: 14px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #2f5eff;
}
</style>