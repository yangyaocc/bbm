<template>
  <div id="app">
    <top></top>
    <navList></navList>
     
    <router-view v-wechat-title="$route.meta.title"></router-view> 
    <bottom></bottom>
  </div>
</template>

<script>
import top from "./components/top"
import navList from "./components/navList"
import bottom from "./components/bottom"
import contentList from "./components/contentList"

export default {
  name: 'App',
  components:{
    top,
    navList,
    bottom,
    contentList
  }
}
</script>

<style>
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
body{font:14px"微软雅黑";background:#fff;-webkit-text-size-adjust:100%;} 
a{color:#2d374b;text-decoration:none} 
a:hover{color:#cd0200;text-decoration:underline} 
em{font-style:normal} 
li{list-style:none} 
img{border:0;vertical-align:middle} 
table{border-collapse:collapse;border-spacing:0} 
p{word-wrap:break-word}
input,button,div {outline:none;}
input[type='text'],input[type='password'] {font:14px"微软雅黑";padding:0 10px;}
button {font:14px"微软雅黑";font-weight:bold;color:#555;}
</style>
