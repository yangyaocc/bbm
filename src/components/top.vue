<template>
  <div class="top">
    <div class="topWra">
      <img src="../assets/logo.png" class="logoImg">
      <div class="topRight">
        <div class="search">
          <input type="text" name="" placeholder="问题/服务/专家">
          <a href=""><i class="fa fa-search"></i></a>
        </div>
        <div class="topBtn">
          <a href="">登录</a>
          <a href="">注册</a>
          <a href="">申请专家</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$wra-width:1200px;
$wra-height:90px;
$search-height:40px;
$border-color-btn:#eee;
$border-btn-height:38px;
.top {
  .topWra {
    width:$wra-width;
    margin:auto;
    height:$wra-height;
    .logoImg {margin:20px 0;float:left;}
    .topRight {
      float:right;
      margin:25px 0;
      .search {
        position:relative;
        float:left;
        input {
          width:280px;
          height:$search-height;
          line-height:$search-height;
          background-color:#f0f0f1;
          border:none;
          padding:0 10px;
          font:15px"微软雅黑";
        }
        a {
          position:absolute;
          top:4px;
          right:6px;
          font-size:20px;
          color:#ff594f;
        }
      }
    }
    .topBtn {
      float:right;
      a {
        height:38px;
        border:1px solid $border-color-btn;
        float:left;
        line-height:$border-btn-height;
        text-align:center;
        margin-left:10px;
        border-radius:10px;
        padding:0 12px;
      }
    }
  }
}
</style>
