<template>
  <div class="indexContent">
    <swiper />
    <leftNavList />
    <login />
<!--     <cs />
    <selectList :seldata="seldata" /> -->
    <indexContent />
    <div class="layout">
      <div class="conLine">
        <zjMod />
        <xjb />
      </div>
      <div class="conLine marTop40">
        <fw />
      </div>
      <div class="conLine marTop40">
        <wdMod />
        <div class="floatLeft marLeft20">
          <zjwk />
          <rxhfb />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import swiper from "./publicVue/swiper"
import leftNavList from "./publicVue/leftNavList"
import login from "./publicVue/login"
import selectList from "./publicVue/selectList"
import cs from "./publicVue/cs"
import indexContent from "./publicVue/indexContent"
import layTitle from "./publicVue/layTitle"
import zjMod from "./contentMod/zjMod"
import xjb from "./contentMod/xjb"
import fw from "./contentMod/fw"
import wdMod from "./contentMod/wdMod"
import zjwk from "./contentMod/zjwk"
import rxhfb from "./contentMod/rxhfb"

export default {
  name: 'index',
  data () {
    return {
      seldata:["haha","xixi","heihei"]
    }
  },
  components:{
    swiper,
    leftNavList,
    login,
    selectList,
    cs,
    indexContent,
    layTitle,
    zjMod,
    xjb,
    fw,
    wdMod,
    zjwk,
    rxhfb
  },
  created() {
    // https://dc.3.cn/category/get?&callback=getCategoryCallback
    var url = this.HOST +"/get";
    this.$axios.get(url,{
      params:{
        
      }
    })
      .then(res => {
        // console.log(res.data);
      })
      .catch(error => {
        // console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.floatLeft {float:left;}
.wid895 {width:895px;}
.wid285 {width:285px;}
.marLeft20 {margin-left:20px;}
.marTop40 {margin-top:40px;}
$wra-width:1200px;
.indexContent {
  position:relative;
  .layout {
    width:$wra-width;
    margin:auto;
    margin-top:60px;
    .conLine {
      display:inline-block;
      width:100%;
    }
  }
}
</style>
