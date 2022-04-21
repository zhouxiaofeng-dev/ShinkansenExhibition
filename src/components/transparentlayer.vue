<template>
  <div class="Transparentlayer" >
      <div class="EntryDiv">
          <div class="EntryDescribe">欢迎查看新干路的相关信息!</div>
          <div class="EntryGuide">如果想查看更多信息，请点击下方按钮</div>
          <a href="https://baike.baidu.com/item/%E6%96%B0%E5%B9%B2%E7%BA%BF/856920" target="_blank" class="EntryButton" ref="Detail" @mousemove="move" @mouseleave="leave" >查看更多信息
          <i class="iconfont icon-youjiantou_huaban EntryIcon" @click="GoDetails" ref="iconfont" ></i>
          </a>
          <!-- 字体图标 -->
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
     name:'Transparentlayer',
     methods:{
          GoDetails(){
              //给字体图标绑定点击跳转事件
             this.$refs.Detail.click();
          },
          move(){
              this.$refs.Detail.style.backgroundColor= "#fff";
              this.$refs.Detail.style.color = "black";
              this.$refs.iconfont.style.color = "black"

          },
          leave(){
              this.$refs.Detail.style.backgroundColor= "black";
              this.$refs.Detail.style.color = "#fff";
              this.$refs.iconfont.style.color = "#fff"
          }
     },
     computed:{
         ...mapState('PageAbout',['isClose'])
     },
}
</script>

<style>
    

    .Transparentlayer{
        position: absolute;
        width: 100%;
        height: 500px;
        background-color: transparent;
    }
    .EntryDiv{
        position: absolute;
        top: 41%;
        left: 15%;
        width: 250px;
        height: 250px;
        background-color: rgb(231, 213, 213);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 10px 5px rgba(0,0,0,.9);
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .EntryDescribe{
        width: 100%;
        height: 50px;
        margin-top: 20px;
        font-size: 30px;
        font-weight: 700;
        word-wrap: break-word;
        word-break: normal;
        margin-left: 10px;
    }
    .EntryGuide{
        text-align: left;
        word-wrap: break-word;
        word-break: normal;
        font-size: 10px;
        margin-top: 60px;
        font-weight: 300;
        color: rgb(40, 37, 37);
    }
    .EntryButton{
        width: 200px;
        height: 40px;
        background-color: black;
        line-height: 40px;
        color: #fff;
        text-decoration: none;
        text-indent: 25px;
        margin-top: 20px;
        box-shadow: 10px 10px 5px rgba(0,0,0,.9);
    }
    .EntryDiv .EntryIcon{
        position: absolute;
        top: 65%;
        left: 65%;
        width: 20px;
        height: 20px;
        font-size: 30px;
        margin-top: 1px;
        color: #fff;
        cursor: pointer;
        background-color: transparent;
    }
    
</style>