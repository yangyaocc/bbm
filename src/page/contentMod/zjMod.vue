<template>
    <div class="contentModel floatLeft wid895">
      <layTitle :titleList="tName" :more="urlName" />
      <zhuanjia />
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
import zhuanjia from "./indexmodel/zhuanjia"
export default {
    name:'zjMod',
    data() {
        return {
            tName:"专家",
            urlName:"更多可信赖的专家"
        }
    },
    components:{
        layTitle,
        zhuanjia
    }
}
</script>
<style>
    
</style>