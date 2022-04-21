<template>
  <div class="optionbox">
      <transition name="Comment">
        <div class="whitebox" @mouseleave="close" @click="GoClick">
            <div class="WhiteBoxDiv">
                <!-- @click="GoClick(index)" @mouseenter="ShowOption(index)" @mouseleave="LeaveOption(index)" -->
             <li class="options" id="0">
                <span class="mainContext">About</span>
                <i class="iconfont icon-youjiantou_huaban optionIconFont"></i>
            </li>
            <li class="options" id="1">
                <span class="mainContext">Famous model 22-141</span>
                <i class="iconfont icon-youjiantou_huaban optionIconFont"></i>
            </li>
            <li class="options" id="2">
                <span class="mainContext">History</span>
                <i class="iconfont icon-youjiantou_huaban optionIconFont"></i>
            </li>
            <li class="options" @mouseenter="showoption=true" @mouseleave="showoption=false" id="3">
                <span class="mainContext">Comments</span>
                <i class="iconfont icon-youjiantou_huaban optionIconFont"></i>
                <transition name="Comment">
                    <div class="CommentsOption" v-if="showoption">
                        <div class="Positive" @click="GoPositive">Positive</div>
                        <div class="Negative" @click="GoNegative">Negative</div>
                    </div>
                </transition>
             </li>
             <li class="options" id="4">
                 <span class="mainContext">Images</span>
                 <i class="iconfont icon-youjiantou_huaban optionIconFont"></i>
             </li>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
      name:'optionbox',
      data(){
          return{
              msg:['About','Famous model 22-141','History','Comments','Images'],
              showoption:false
          }
      },
      props:['change'],
      methods:{
          close(){
              this.$parent.change();
          },
          GoClick(e){
               this.$parent.GoOthers(e.target.parentNode.id);
          },
          GoPositive(){
              this.$router.push({
                name:'positive'
            })
          },
          GoNegative(){
              this.$router.push({
                name:'negative'
            })
          },
      },
}
</script>

<style>
      .optionbox{
          position: absolute;
          top:120px;
          left: 0;
          width: 100%;
          height: 600px;
          background-color: #fff;
          z-index: 200;
          background: rgba(0,0,0,.6);
      }
      .whitebox{
          width: 100%;
          background-color: black;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgb(92, 84, 84);
          padding-bottom: 10px;
      }
      .WhiteBoxDiv{
          width: 80%;
          height: 100%;
         
      }
      .WhiteBoxDiv .options{
          position: relative;
          display: inline-block;
          margin-right: 30px;
          width: 30%;
          height: 50px;
          list-style: none;
          margin-top: 10px;
          line-height: 50px;
          border-bottom: 1px solid rgb(37, 32, 32);
          cursor: pointer;
      }
      .mainContext{
        position: relative;
        height: 30px;
      }
      .mainContext::after{
        content:'';
        position: absolute;
        top: 23px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: .3s linear;
      }
      .mainContext:hover::after {
          width: 100%;
      }
      .options:nth-child(1){
          margin-left: 30px;
      }
      .options:nth-child(4){
          margin-left: 30px;
      }
      .options:nth-child(7){
          margin-left: 30px;
      }
      .options .optionIconFont{
        position: absolute;
        right: 0;
        width: 20px;
        height: 20px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
      }
      .CommentsOption{
          position: absolute;
          left:220px;
          top: 51px;
          z-index: 201;
          width:150px;
          height: 100px;
      }
      .Negative,.Positive{
          width: 100%;
          height: 49px;
          color: #fff;
          text-align: center;
          line-height: 49px;
          font-size: 20px;
          border: 1px solid #fff;
          border-radius: 5px;
          cursor: pointer;
          background-color: #000;
      }
      .Negative:hover,.Positive:hover{
          background-color: #fff;
          color: #000;
          border-color: #000;
      }
    .Comment-enter-active{
            animation: show 0.5s linear;
    }
    .Comment-leave-active{
            animation: show 0.5s linear reverse;
    }
    @keyframes show {
        from{
           opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
</style>