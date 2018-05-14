<template>
  <div class="bottom">
    <p>
      Copyright © 2017  版权所有：大尾猿  赣ICP 0000000号
    </p>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$wra-width:1200px;
$bottom-height:50px;
.bottom {
  background-color:#606060;
  p {
    width:$wra-width;
    margin:auto;
    color:#fff;
    text-align:center;
    height:$bottom-height;
    line-height:$bottom-height;
  }
}
</style>
