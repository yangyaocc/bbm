<template>
    <div class="contentModel wid285">
      <layTitle :titleList="tName" :more="urlName" />
      <div>
    6666666
      </div>
    </div>
</template>

<script>
import layTitle from "../publicVue/layTitle"
export default {
    name:'rxhfb',
    data() {
        return {
            tName:"热心回复榜",
            urlName:""
        }
    },
    components:{
        layTitle
    }
}
</script>
<style>
    
</style>