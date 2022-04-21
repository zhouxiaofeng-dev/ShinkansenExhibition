<template>
    <div class="relevant">
        <div class="Relevant_title">Series of related reports</div>
        <div class="Relevant_context">
           <li class="Relevant_Li">
               <img src="../assets/image/1.1.png" alt="" class="Relevant_image">
               <div class="Relevant_Word">The cumulative number of infections in Tokyo has exceeded 1 million: looking back, the first and second waves of the epidemic are only "ripples"</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">Health and medical treatment</div>
                   <div class="Relevant_time">2022.04.19</div>
               </div>
            </li>
           <li class="Relevant_Li">
               <img src="../assets/image/1.2.png" alt="" class="Relevant_image">
               <div class="Relevant_Word">Pay more attention to cleaning up "data heritage" before death than "cleaning up property"</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">Health and medical treatment</div>
                   <div class="Relevant_time">2022.04.18</div>
               </div>
            </li>
           <li class="Relevant_Li">
               <img src="../assets/image/1.3.png" alt="" class="Relevant_image">
               <div class="Relevant_Word">A survey of money awareness among young people aged 20 to 29 in Japan</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">Finance and Economics</div>
                   <div class="Relevant_time">2022.04.12</div>
               </div>
            </li>
           <li class="Relevant_Li">
               <img src="../assets/image/1.4.png" alt="" class="Relevant_image">
               <div class="Relevant_Word">Japan's personal financial assets approach 2000 trillion yen</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">Finance and Economics</div>
                   <div class="Relevant_time">2022.04.11</div>
               </div>
            </li>
           <li class="Relevant_Li">
               <img src="../assets/image/1.5.png" alt="" class="Relevant_image">
               <div class="Relevant_Word">In the century of life, health and wealth are the most important, but they lack confidence in financial knowledge</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">Finance and Economics</div>
                   <div class="Relevant_time">2022.04.08</div>
               </div>
            </li>
           <li class="Relevant_Li">
               <img src="../assets/image/1.6.jpg" alt="" class="Relevant_image">
               <div class="Relevant_Word">"Driving my car" won the best International Film Award: an inventory of Oscar winning Japanese works over the years</div>
               <div class="Relevant_imf">
                   <div class="Relevant_Tip">entertainment</div>
                   <div class="Relevant_time">2022.03.30</div>
               </div>
              </li>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .relevant{
        width: 748px;
    }
    .Relevant_title{
        margin-top: 100px;
        width: 100%;
        height: 40px;
        color: #000;
        font-size: 28px;
        border-left: 5px solid #000;
        padding-left: 50px;
    }
    .Relevant_context{
        margin-top: 30px;
        cursor: pointer;
        width: 100%;
        color: #000;
        padding: 10px 10px 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .Relevant_Li{
        width: 200px;
        list-style: none;
        margin-bottom: 30px;
    }
    .Relevant_Word{
       width: 100%;
       margin-top: 5px;
    }
    .Relevant_image{
        width: 100%;
        height: 200px;
        
    }
    .Relevant_imf{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-left: 3px solid #000;
        
    }
    .Relevant_Tip{
        width: 100px;
       text-align: center;
       margin-right: 10px;
    }
    .Relevant_time{
        width: 82px;
    }
</style>