<template>
     <div class="negative">
         <div class="main">
           <div class="right">
               <div class="content">
                   <h1 class="h1">The negative effects of the construction of the Shinkansen on the country's economy.</h1>
                   <p class="p">The JNR (Japan National Railways) was "a success and a failure". In 1964, the Tokaido Shinkansen was opened to traffic, and in the same year, JNR began to run a deficit. The immediate cause of this was the large amount of money invested in the construction of the Shinkansen and the fact that the initial operation of the line did not cover its costs. Although the Shinkansen soon turned a loss into a profit, the construction of the Sanyo, Joetsu and Tohoku lines, based on the Tokaido line, led to a sharp increase in construction costs and little capacity, resulting in a total loss. After the 1980s, with the Japanese government paying huge annual subsidies, the annual deficit of National Railways continued to grow, peaking at ¥1.85 trillion in 1985, with a cumulative deficit of more than ¥10 trillion. In order to eliminate the deficit, National Railways repeatedly raised freight rates and by 1986, Shinkansen fares had increased by 38% compared to 1980. However, during the same period, the long-term debt of National Railways still amounted to 37.1 trillion yen, which amounted to 4.9% of Japan's total fiscal budget and 0.9% of GDP. Therefore, the Shinkansen as a whole had been losing money for many years and had not improved despite huge government subsidies (at that time the losses reached 37 trillion yen and the total amount of subsidies had reached 7.4 trillion yen), which led directly to the dissolution of the Japan National Railways in 1987 and the change to six private JR companies (privatisation of the national railways) and the establishment of the Japan National Railways Liquidation Corporation.</p>
                   <p class="p">The biggest purpose of the split privatization was to pay off debts. At the time, the total accumulated debt of National Railways was 37.1 trillion (31.5 trillion in long-term debt and 5.7 trillion in future costs such as annuities), and after the split privatization, 11.6 trillion was covered by the JR Honshu Sanshu, JR Cargo, and Shinkansen railway tenure agencies. The Honshu Sanshu (JR East, JR Tokai, and JR West), which covers the three major metropolitan areas (the metropolitan area, the Kinki area, and the Chukyo area), also known as Tomeihan, completed its IPO in the early 1990s and repaid its debts relatively smoothly. The Mishima companies (JR Kyushu, JR Hokkaido and JR Shikoku), on the other hand, had the face of a money-losing company to begin with, so they were not allowed to inherit the debt at all. The remaining 25.5 trillion (19.9 trillion in long-term debt and 5.7 trillion in future costs) was set up specifically to cover Japan's state-owned railway liquidation business group</p>
                   <Relevant/>
               </div>
           </div>
           <div class="left"></div>
       </div>
     </div>
</template>

<script>
import Relevant from '../components/relevant.vue'
export default {
    name:'negative',
    components:{Relevant}
}
</script>

<style>
    .negative{
        position: absolute;
        top: 121px;
        left: 0;
        width: 1215px;
        background-color: #efefef;
        border-top: 1px solid #fff;
        z-index: 199;
        padding-left: 160px;
        padding-right: 160px;
        min-height: 598px;
    }
</style>