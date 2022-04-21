<template>
    <div class="famousModel">
        <div class="main">
             <div class="right">
                 <div class="content">
                    <h1 class="h1">Famous Model22-141</h1>
                    <p class="introduce">West Japan Railways Shinkansen 'Bullet Train', 1976 | Science Museum Group Collection</p>
                    <h2 class="h2">Location: Great Hall</h2>
                    <p class="p">Power car, Shinkansen Leading Car 22-141, ‘bullet train’, built by West Japan Railways, 1976, withdrawn from service in October 2000. Length 82'; width 11' 8"; height 14' 6 1/2".</p>
                    <p class="p">The Shinkansen power car 22.141 is the last to be withdrawn of the first series of cars in service. It is the first rail vehicle built and operated outside of Britain to enter the National Collection, telling the story of a railway which shaped the future for railways around the world.</p>
                    <p class="p">With the 1964 launch of the Shinkansen - which translates as new main line - Japan reinvented passenger railways. This was the first route dedicated to moving large numbers of people in comfort and at high speed. At the time Japan was experiencing an economic boom and cities were growing, making fast mainline travel between urban centres a sensible decision. The project, which was very expensive and involved a major loan from the World Bank, ran over budget and led to the resignation of both the railway’s chairman and the key engineer. The 1964 opening, though, was a great success, timed to coincide with the 1964 Tokyo Olympics – a major showcase opportunity for Japan on a global stage. </p>
                    <p class="p">It ran at speeds of up to 130mph and took little over three hours to travel the 320 mile line between Tokyo and Osaka. When new the 22-141 power car travelled this route as part of a sixteen car formation. From 1997 until its withdrawal 22.141 travelled between Hiroshima and Hakata as part of a four car formation. The service was efficient and reliable, on average bullet trains arrive within twenty-four seconds of their scheduled time.</p>
                    <p class="p">Unlike previous Japanese trains, the Tōkaidō Shinkansen and all subsequent Shinkansen lines have been standard gauge.</p>
                    <p class="p">After it was withdrawn from service in 2000, the Shinkansen was generously donated to the National Collection by JR West. Before arriving in the UK, it was fully restored to its present condition by over one hundred JR West workers.</p>
                    <p class="p">The Shinkansen in the National Collection is the only bullet train outside of Japan.</p>
                 </div>
                 <!-- 相关报道 -->
                 <Relevant/>
             </div>
             <div class="left"></div>
        </div>
    </div>
</template>

<script>
import Relevant from '../components/relevant.vue'
export default {
      name:'famousModel',
      components:{Relevant}
}
</script>

<style  scoped>
    .famousModel{
        position: absolute;
        top: 121px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        background-color: #efefef;
        border-top: 1px solid #fff;
        z-index: 199;
        padding-left: 160px;
        padding-right: 160px;
        min-height: 550px;
    }
</style>