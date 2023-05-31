<template>
  <div class="pageMain">
    <div class="content">
      <div class="tips">
        <p class="tipsTitle">确认医保电子凭证信息</p>
        <!-- <p class='showTips'>如图所示,请扫描医保电子凭证!</p> -->
        <div class="userInformation">
          <div>
            <p><span>姓名</span> : 段天龙</p>
            <p><span>性别</span> : 男</p>
          </div>
          <div>
            <p><span>出生日期</span> : 1995-07-14</p>
            <p><span>身份证号</span> : 143647199507148874</p>
          </div>
          <div>
            <p><span>就诊卡号</span> : 1137538930</p>
          </div>
        </div>
        <p class="bottomTips">核实信息无误后,请按确认！</p>
        <div class="confirmBtn" @click="confirmBtn">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDetail",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query.cardType); //卡类型
  },
  methods:{
    confirmBtn(){
        this.$router.push({
        name:"ExpenseDetails",
        query:{}
      })
    }
  }
};
</script>

<style scoped>
.pageMain {
  width: 736px;
  height: 1088px;
  box-shadow: 0px -2px 30px 0px rgba(46, 49, 57, 0.12);
  border-radius: 8px;
  margin: 20px 32px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content {
  width: 100%;
  height: 460px;
  background: #ffffff;
  box-shadow: 0px -2px 30px 0px rgba(46, 49, 57, 0.12);
  border-radius: 8px;
}
.tips {
  width: 688px;
  margin: 0 auto;
}
.tipsTitle {
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #2f5eff;
  border-bottom: 1px solid #e7ecf0;
  padding-bottom: 24px;
  margin-bottom: 0;
}
.tips .showTips {
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  color: #ff6e30;
  margin: 0;
}
.userInformation {
  width: 100%;
  height: auto;
}
.userInformation div {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #e7ecf0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #1e1f20;
}
.userInformation div p:first-child {
  width: 42%;
}
.userInformation div p span {
  display: inline-block;
  width: 100px;
  text-align-last: justify;
}
.bottomTips {
  display: inline-block;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #ff6e30;
  text-align: center;
  margin: 0;
  padding: 14px 0 12px 0;
}
.confirmBtn {
  width: 436px;
  height: 78px;
  background: #eeb504;
  border-radius: 8px;
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  line-height: 78px;
  margin: 0 auto;
}
</style>