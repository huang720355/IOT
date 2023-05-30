<template>
  <div class="about">
    <div class="page">
      <div class="content">
        <div class="register">
          <span class="title">挂号业务</span>
          <img src="../assets/registerIcon.png" alt="" />
        </div>
        <div class="contentRight" @click="goPage">
          <div class="selfPayment">
            <img src="../assets/selfPaymentIcon.png" alt="" />
            <span>自助缴费</span>
          </div>
          <div class="inpatientRecharge">
            <img src="../assets/inpatientRechargeIcon.png" alt="" />
            <span>住院充值</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="goTest2">跳转</button> -->
  </div>
</template>
<script>
export default {
  name: "IndexMain",
  methods: {
    goPage() {
      this.$router.push({
        name: "GetInformation",
      });
    },
  },
};
</script>
<style scoped>
.page {
  background: #0092fe;
  width: 100%;
  height: 1180px;
}
.content {
  width: 100%;
  height: 670px;
  background: url(../assets/wightBg.png) no-repeat;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 140px 75px 180px 75px;
  box-sizing: border-box;
}
/* 挂号 */
.register {
  background: url(../assets/registerBg.png) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 288px;
  height: 422px;
}
.title {
  margin-top: 10px;
  text-align: center;
  color: #ffffff;
  padding: 104px 0 44px 0;
  font-weight: bold;
  font-size: 32px;
}
/* 自助缴费 */
.selfPayment {
  width: 328px;
  height: 211px;
  display: flex;
  align-items: center;
  background: url(../assets/selfPaymentBg.png) no-repeat;
}
.selfPayment span {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}
.selfPayment img {
  padding: 0 8px 0 40px;
}
/* 住院充值 */
.inpatientRecharge {
  width: 328px;
  height: 211px;
  display: flex;
  align-items: center;
  background: url(../assets/inpatientRechargeBg.png) no-repeat;
}
.inpatientRecharge span {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}
.inpatientRecharge img {
  padding: 0 8px 0 40px;
}
</style>