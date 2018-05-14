<template>
    <div class="contentModel floatLeft wid285 marLeft20">
      <layTitle :titleList="tName" :more="urlName" />
      <div>
    222222222222222222
      </div>
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
export default {
    name:'xjb',
    data() {
        return {
            tName:"悬赏榜",
            urlName:"更多"
        }
    },
    components:{
        layTitle
    }
}
</script>
<style>

</style>