<template>
    <div class="backgroundmap" >
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'backgroundmap',
    computed:{
        ...mapState('PageAbout',['isClose'])
    }
}
</script>
 
<style  scoped>
    .backgroundmap{
        background-image: url(../assets/13.jpg) ;
        background-size: 100% 720px ;
        width: 100%;
        height: 600px;
        max-height: 720px;
        background-attachment: fixed;
    }
</style>