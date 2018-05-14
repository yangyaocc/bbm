<template>
    <div class="contentModel">
      <layTitle :titleList="tName" :more="urlName" />
      <div>
    3333333333333333333
      </div>
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
export default {
    name:'fw',
    data() {
        return {
            tName:"服务",
            urlName:"更多优质服务"
        }
    },
    components:{
        layTitle
    }
}
</script>
<style>
    
</style>