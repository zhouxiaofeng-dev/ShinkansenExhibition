<template>
    <div class="history">
        <div class="main">
             <div class="right">
                 <div class="content">
                    <h1 class="h1">History of the Shinkansen</h1>
                    <p class="introduce">The Tokaido Shinkansen opened on October 1, 1964, and was known as the "Dream Super Express", operating at a speed of 210km/h, the highest in the world at the time. This year it is celebrating its 50th anniversary of operation. Its history goes back to before the Second World War.</p>
                    <h2 class="h2">From the fantastic pre-war "bullet train" to the Shinkansen</h2>
                    <p class="p">In 1872, the first railway in Japan was opened between Shinbashi and Yokohama in Tokyo. The line was built on a narrow gauge (1067mm). It is said that this was because when the Japanese government imported railway technology from Britain at the time, British technicians advised that the narrow gauge was more suitable for Japan, where there was a lot of treacherous terrain. Since then, Japan's national railway (now JR) has used narrow gauge. Later, in order to standardise and speed up the railways operating in the Korean peninsula and Manchuria (now Northeast China), several plans were made to switch to standard track (wide gauge, 1435mm) from the end of the Meiji era onwards, but each time this became an instrument of political struggle and was abandoned.</p>
                    <p class="p">In 1939 (Showa 41), Japan planned to build a new broad gauge line on the Tokaido Main Line and Sanyo Main Line, which had a tight capacity, to run high-speed trains, and started land acquisition and construction of some tunnels. The war in the Pacific was so bad that Japan was forced to abandon the project, known as the 'bullet train', and the land acquisition and tunnels that had already been constructed were used for the Tokaido Shinkansen project after the war.</p>
                    <p class="p">Shinji Toka, who was known as the "father of the Shinkansen" and was the president of the National Railways at the beginning of the construction of the Tokaido Shinkansen, was involved in the pre-war re-tracking project as an official of the Railway Institute. Hideo Shima, the chief engineer appointed by Toka to build the Shinkansen, was also involved in the bullet train project. His father, Yasujiro Shima, a former technical officer of the Railway Institute, was also deeply involved in the re-tracking project and the bullet train project. Hisao's eldest son, Takashi Shima, was also involved in the development of Shinkansen trains as a technician for the National Railways. It can be said that all three generations of the Shimada family have played an important role in the history of the Shinkansen.</p>
                    <p class="p">As mentioned above, the Shinkansen was also closely associated with the pre-war programme of re-tracking and bullet trains in terms of personnel strength. However, prior to the opening of the Tokaido Shinkansen, Toka was forced to resign due to construction costs exceeding the budget, and together with Shimada, he resigned as Chief Engineer, neither of whom were invited to attend the opening ceremony. However, a relief statue of Toka has now been erected on the platform of Tokyo Station on the Tokaido Shinkansen to commemorate his achievements.</p>
                    <h2 class="h2">The success of the Shinkansen has stimulated the development of high-speed rail worldwide</h2>
                    <p class="p">After the war, the Tokaido Main Line was once again strained for capacity, and when the idea of the Tokaido Shinkansen began to be put into action in 1957, there was considerable opposition, citing the decline of the American railway business. However, after the opening of the Tokaido Shinkansen in 1964, a steady increase in passenger numbers was achieved. In 1972, the Sanyo Shinkansen opened the Shin-Osaka to Okayama section, and in 1975, the entire line was extended to Hakata. On the eve of the opening of the Hakata section, a dining car was added to the train and the service was further improved.</p>
                    <p class="p">On the other hand, in the 1970s, the Tokaido Shinkansen began to experience problems such as the ageing of the tracks and noise and vibration along the line. In response to the ageing of the tracks, the operator often stopped operations for half a day or so between 1974 and 1982 to carry out comprehensive inspections and renovation work. In response to noise and vibration problems, a lawsuit was filed with the residents along the line and a settlement was reached (1986), and measures were taken to install soundproof walls and improve the vehicles.</p>
                    <p class="p">Although the Shinkansen had its share of problems, it achieved the safe transport of passengers and was an overall success, including its operation. The success of the Shinkansen, centred on European countries, stimulated the development of high-speed railways around the world, with the introduction of the TGV in France (which opened in 1981) and the ICE in Germany (which opened in 1991). The TGV, in particular, ran at speeds of up to 270km/h, surpassing the Shinkansen's maximum speed of 210km/h at the time, giving the impression that France, which had led the world in high-speed rail development before the birth of the Shinkansen, had regained its position as the leader. Since then, Japan has also worked to increase the speed of the Shinkansen, with the Tohoku Shinkansen now achieving a maximum speed of 320km/h that rivals that of the TGV.</p>
                    <p class="p">In response to international competition for high-speed railway development, Japan has been promoting the development of superconducting maglev trains since 1962, which reached a maximum speed of 531km/h with passengers on an experimental line in 1997. The plan is to operate at 505km/h.</p>
                    <h2 class="h2">Can the export of Shinkansen system succeed?</h2>
                    <p class="p">In recent years, Jr railway companies operating Shinkansen have begun to actively try to export Shinkansen system with the safety embodied in high-frequency on-time operation, passenger fatalities caused by derailment and rear end collision as their selling point. The characteristics of Shinkansen system in Japan are that it has a special track different from the existing ordinary narrow gauge route, unified operation management implemented by the comprehensive command center, automatic train control system (ATC) for controlling train speed, etc. Shinkansen technology has also been applied overseas.</p>
                    <p class="p">Taiwan's high-speed railway, which was put into operation in 2007, was initially constructed using European technology. However, after the derailment accident of ice (Intercity Express train) and the earthquake, Japanese technology was introduced in vehicle and ATC, also known as "Taiwan Shinkansen". Some vehicles of China's high-speed railway, which was also put into operation in 2007, are also made based on Shinkansen vehicles in Japan. However, there is no overseas example of introducing a complete set of Japanese Shinkansen system. With the increasing number of countries interested in introducing Shinkansen technology, such as the United States and India, can Shinkansen be successfully exported overseas in the form of a system as a whole? We will wait and see.</p>
                    <!-- 表格信息 -->
                    <Form/>
                    <!-- 相关报道 -->
                    <Relevant/>
                 </div>
             </div>
             <div class="left">
                <img src="../assets/image/1.jpg" alt="" class="image">
                <img src="../assets/image/2.jpg" alt="" class="image" style="margin-top:300px">
                <img src="../assets/image/3.jpg" alt="" class="image" style="margin-top:300px">
             </div>
        </div>
    </div>
</template>

<script>
import Relevant from '../components/relevant.vue'
import Form from "../components/form.vue"
export default {
     name:'history',   
     components:{Form,Relevant},
     data(){
         return {
             msg:true
         }
     }
}
</script>

<style  scoped>
    .history{
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