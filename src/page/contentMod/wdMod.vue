<template>
    <div class="contentModel floatLeft wid895">
      <layTitle :titleList="tName" :more="urlName" />
      <div>
    444444444444444444
      </div>
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
export default {
    name:'wdMod',
    data() {
        return {
            tName:"问答",
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