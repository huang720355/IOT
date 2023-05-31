<template>

  <div>
    <div class="faceId">人脸登陆</div>
    <div class="cardMain">
      <img @click="choseCard(item.cardType)" v-for="(item,index) in cardList" :src="item.img" :key="index" alt="">
      <!-- 从外面拿 -->
      <!-- <img v-show="item.show" v-for="(item,index) in cardImgList" :src="item.imgUrl" :key="index+'img'" alt=""> -->
    </div>
  </div>

</template>


<script>
import {cardImgList} from "../../other/mapping"
export default {
  name: "GetInformation",
  data(){
    return{
        cardList:[
          { 
            cardType:"idCard",
            img: require("../../assets/selfPayment/idCard.png"),
          },
          { 
            cardType:"ssCard",
            img:require("../../assets/selfPayment/ssCard.png"),
          },
          { 
            cardType:"card",
            img:require("../../assets/selfPayment/card.png"),
          },
          { 
            cardType:"barCode",
            img:require("../../assets/selfPayment/barCode.png"),
          },
          { 
            cardType:"electronCard",
            img:require("../../assets/selfPayment/electronCard.png"),
          },
        ],
        // cardImgList
    }
  },
  methods:{
    choseCard(type){
      this.$router.push({
        name:"CardDetail",
        query:{
          cardType:type
        }
      })
    }
  }
};
</script>
<style scoped>
.faceId{
    width: 708px;
    height: 140px;
    background: url(../../assets/selfPayment/faceLoginBg.png);
    margin: 246px 46px 120px 46px;
    text-align: center;
    line-height: 140px;
    font-size: 36px;
    color: #FFFFFF;
}
.cardMain {
  width: 708px;
  display: flex;
  justify-content: center; /* 子元素均匀分布 */
  align-items: center; /* 子元素垂直居中 */
  flex-wrap:wrap;
  margin:0 46px ;

}
.cardMain img {
  width: 230px;
  height: 228px;
}

</style>