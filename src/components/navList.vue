<template>
  <div class="navList">
    <ul>
      <li v-for="(list,index) in navList">
        <router-link :to="list.url" exact>{{ list.name }}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'navList',
  data () {
    return {
      navList:[
        { name:"首页",url:"/"},
        { name:"问答",url:"/wd" },
        { name:"服务",url:"/fw" },
        { name:"专家",url:"/zj" },
        { name:"文库",url:"/wk" },
        { name:"充值",url:"/cz" }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$wra-width:1200px;
$nav-height:60px;
$nav-color:#fff;
.navList {
  height:$nav-height;
  background-color:#55626c;
  ul {
    height:100%;
    width:$wra-width;
    margin:auto;
    li {
      float:left;
      height:100%;
      width:150px;
      text-align:center;
      a {
        display:block;
        line-height:$nav-height;
        color:$nav-color;
        font-size:18px;
        font-weight:bold; 
      }
      .on {background-color:#ff594f;}
    }
  }
}

</style>
