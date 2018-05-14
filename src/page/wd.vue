<template>
  <div class="wk">
    <p>
      问答页面
      <selectList :seldata="seldata" />
    </p>
  </div>
</template>

<script>
import selectList from "./publicVue/selectList"
export default {
  name: 'wd',
  data () {
    return {
      seldata:["aaa","sss","ddd"]
    }
  },
  components: {
    selectList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$wra-width:1200px;

</style>
