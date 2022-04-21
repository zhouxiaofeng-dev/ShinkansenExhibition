<template>
    <div class="about">
        <div class="main">
             <div class="right">
                 <div class="content">
                    <h1 class="h1">ABOUT SHINKANSEN</h1>
                    <p class="p">The Shinkansen (Japanese: Shinkansen; Japanese kana: しんかんせん; Japanese romanization: Shinkansen) is Japan's high-speed railway system, and the world's first high-speed railway system to be put into commercial operation, using a standard 1435mm gauge, with all lines being purely passenger services.</p>
                    <p class="p">The first Shinkansen line was the Tokaido Shinkansen, which opened on 1 October 1964, linking Tokyo and Osaka. By 2020 there will be nine lines, including two shorter mini-shinkansen lines, linking most of Japan's major cities. Originally developed and operated by Japan National Railways, the line was taken over by Japan Railways after the privatisation of the national railways, and is served by five of its member companies, including JR Hokkaido, JR East, JR Tokai, JR West and JR Kyushu.</p>
                 </div>
                 <!-- 相关报道 -->
                 <Relevant/>
             </div>
             <div class="left"></div>
        </div>
    </div>
</template>

<script>
import Relevant from "../components/relevant.vue"
export default {
     name:'about',
     components:{Relevant}
}
</script>

<style>
    .about {
        position: absolute;
        top: 121px;
        left: 0;
        width: 1215px;
        background-color: #efefef;
        border-top: 1px solid #fff;
        z-index: 199;
        padding-left: 160px;
        padding-right: 160px;
        min-height: 550px;
    }
</style>