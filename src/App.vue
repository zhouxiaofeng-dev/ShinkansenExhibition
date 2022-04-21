<template>
  <div id="app">
    <Context/>
    <BackgroundMap/> 
  </div>
</template>

<script>
import Context from './components/context.vue'
import BackgroundMap from './pages/backgroundmap.vue'
  export default {
    name: "App",
    components:{Context,BackgroundMap}
  };
</script>

<style>
*{
  padding: 0;
  margin: 0 auto;

}
#app {
  width: 100%;
  height: 100%;
}
/*引用字体图标*/
@font-face {
  font-family: "iconfont"; /* Project id 3342768 */
  src: url('//at.alicdn.com/t/font_3342768_2onuh8ey8p8.woff2?t=1650422962319') format('woff2'),
       url('//at.alicdn.com/t/font_3342768_2onuh8ey8p8.woff?t=1650422962319') format('woff'),
       url('//at.alicdn.com/t/font_3342768_2onuh8ey8p8.ttf?t=1650422962319') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e699";
}

.icon-shoppingcart:before {
  content: "\e881";
}

.icon-forwardo:before {
  content: "\e736";
}

.icon-youjiantou_huaban:before {
  content: "\e63e";
}
/* 路由通用样式 */
.main{
        width: 1180px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        
}
.right{
  width: 798px;
  height: 100%;
  padding: 50px 60px ;
    
}
.content{
  width: 677px;
}
/* 一级标题样式 */
.h1{
  margin-top: 30px;
  width: 100%;
  color:black;
  margin-bottom: 100px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
/* 二级标题样式 */
.h2{
  margin-top: 30px;
  width: 100%;
  color:black;
  margin-bottom: 30px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.introduce{
  width: 737px;
  margin-top: 30px;
  background-color: #F2F2F2;
  padding: 20px;
  color: #000;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* 段落样式 */
.p{
  width: 777px;
  margin-top: 20px;
  font-weight: 400!important;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #000000;
  word-wrap: break-word;
  overflow-wrap:break-word;
  font-size: 20px;
}
.left{
  width: 380px;
  height: 100%;
}
/* 图片样式 */
.image{
   width: 98%;
   height: 200px;
   margin: 0 5px 0 5px;
}
/* 表格样式 */
table{
  color: #000;
  width: 777px;
  border-collapse: collapse;
  border-spacing: 0;
  border:1px solid #ccc
}
tr{
  width: 100%;
  border:1px solid #ccc
}
td{
  padding: 10px;
  border:1px solid rgb(63, 59, 59)

}
tr td:nth-child(1){
  width:75px;
  background-color:grey ;
  color: #fff;
  text-align: center;
  
}
</style>
