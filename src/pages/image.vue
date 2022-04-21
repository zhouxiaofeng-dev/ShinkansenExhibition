<template>
    <div class="Img">
        <div class="main">
                    <ul id="jpg">
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/1.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/2.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/3.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/4.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/5.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/6.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/7.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/8.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/11.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/10.webp" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/12.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/13.jpg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/14.jpeg" alt="图片"></li>
                        <li class="jpg_li"><img class="jpg_image" src="../assets/image/15.jpeg" alt="图片"></li>
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
        left: 50%;
        transform: translateX(-50%);
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