<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
*{
  padding: 0;
  margin: 0 auto;
  max-width: 2000px;
  box-sizing: border-box;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
}
/*引用字体图标*/

/* 路由通用样式 */
.main{
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;        
}
.right{
  width: 55%;
  height: 100%;
  padding: 30px 30px ;
    
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
  width: 100%;
  margin-top: 30px;
  background-color: #F2F2F2;
  padding: 20px;
  color: #000;
  font-size: 16px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
/* 段落样式 */
.p{
  width: 100%;
  margin-top: 20px;
  font-weight: 400!important;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #000000;
  word-wrap:break-word;
  overflow-wrap:break-word;
  font-size: 20px;
}
.left{
  width: 25%;
  height: 100%;
}
/* 图片样式 */
.image{
   width:100%;
   height: 200px;
   margin: 0 5px 0 5px;
}
/* 表格样式 */
table{
  color: #000;
  width: 100%;
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
