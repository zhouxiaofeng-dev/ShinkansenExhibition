<template>
    <div class="Img">
        <div class="main">
                    <ul id="jpg">
                        <li class="jpg_li"><img class="jpg_image" src="../assets/1.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/2.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/3.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/4.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/5.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/6.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/7.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/8.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/11.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/10.webp" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/12.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/13.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/14.jpeg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/15.jpeg" alt="图片"></li>
                    </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .Img{
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
    #jpg{
        display: flex;
        width: 100%;
        outline: hidden;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .jpg_li{
        width: 300px;
        height: 300px;
        margin-top: 30px;
        cursor: pointer;
        
    }
    .jpg_image{
        width: 300px;
        height: 300px;
    }
</style>