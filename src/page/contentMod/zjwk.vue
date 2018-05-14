<template>
    <div class="contentModel wid285">
      <layTitle :titleList="tName" :more="urlName" />
      <div>
    555555555555555555555
      </div>
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
export default {
    name:'zjwk',
    data() {
        return {
            tName:"专家文库动态",
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