<template>
   <div class="context">
       <CommonHeader/>
       <Transparentlayer/>
   </div>
</template>

<script>
import CommonHeader from "./commonheader.vue"
import Transparentlayer from "./transparentlayer.vue"
export default {
    components: {CommonHeader,Transparentlayer},
}
</script>

<style>
    .context{
        width: 100%;
        background-color: transparent;
    }
</style>