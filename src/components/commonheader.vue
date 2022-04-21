<template>
  <div class="header" ref="header">
      <div class="title" @click="Goback">
          <div class="FirstTitle">
              Shinkansen
          </div>
          <div class="SecondTitle">
              Exhibition
          </div>
      </div>
      <div class="otherfunctions">
          <div class="ExceptNavigation">
                <a class="ExceptNavigation_First" href="https://shop.sciencemuseum.org.uk/collections/national-railway-museum" target="_blank">
                    <i class="iconfont icon-shoppingcart ShopIconFont"></i>
                    <span>Shop</span>
                </a>
                <a class="ExceptNavigation_First last" href="https://www.railwaymuseum.org.uk/search" target="_blank">
                    <i class="iconfont icon-search ShopIconFont"></i>
                    <span>Search</span>
                </a>
          </div>
          <div class="navigation"  ref="navigation" @mouseenter="OnOver" @mouseleave="Onleave" >
                    <li class="navigationLi" v-for="(item,index) in msg" :key="index" @click="GoOthers(index)">
                      <a href="javascript:;" id="NavigationA">{{item}}</a>
                    </li>
                    <transition name="Comment">
                        <OptionBox class="option-box" v-if="OptionBoxShow"/>
                    </transition>
          </div>
          <router-view></router-view>
      </div> 
  </div>
</template>

<script>
import OptionBox from './optionbox.vue'
export default {
    name:'commonheader',
    components:{OptionBox},
    data(){
        return {
            OptionBoxShow:false,
            msg:['About','Famous model 22-141','History','Comments','Images'],
            router:['about','famous','history','*','image']
        }
    },
    methods:{
        OnOver(){
            if(this.OptionBoxShow==false){
                    this.OptionBoxShow = true;
            }else {
                this.OptionBoxShow = false;
            }
        },
        Onleave(){
            if(this.OptionBoxShow==true){
                    this.OptionBoxShow = false;
            }else {
                this.OptionBoxShow = true;
            }
        },
        GoOthers(index){
            if(index!=3){
                this.$router.push({
                name:this.router[index],
            })
            }
            //关闭背景和入口说明
            this.$store.state.PageAbout.isClose = false

        },
        change(){
            this.OptionBoxShow=false
        },
        Goback(){
           this.$router.push({
                name:'main'
            })
        }
    },
}
</script>

<style  scoped>

    .Comment-enter-active{
            animation: show 0.2s linear;
    }
    .Comment-leave-active{
            animation: show 0.2s linear reverse;
    }
    @keyframes show {
        from{
           opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
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
   .header{
       width: 100%;
       height: 120px;
       background-color: black;
       color: #fff;
       display: flex;
       justify-content: space-around;
       align-items: center;
   }
   .title{
       position: relative;
       width: 350px;
       height: 100%;
       align-items: center;
       font-family:'Times New Roman', Times, serif;
       cursor: pointer;

   }
   .FirstTitle{
       position: absolute;
       top: 30px;
       left: 20px;
       height: 35px;
       line-height: 35px;
       font-size: 50px;
       
   }
   .SecondTitle{
       position: absolute;
       top: 60px;
       left: 159px;
       height: 35px;
       font-size: 35px;
    }
   .otherfunctions{
       width:750px;
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;

   }
   .navigation{
       height: 61px;
       display: flex;
       justify-content:right;
       align-items: center;
       margin-right: 80px;
       
   }
   .navigation .navigationLi{
       list-style: none;
       height: 60px;
       margin-left: 30px;
       font-size: 16px;
       font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
       border-bottom: 3px solid transparent;
       cursor: pointer;
   }
   .navigationLi:hover {
       border-bottom: 3px solid #fff;
   }
   .navigationLi a{
       text-decoration: none;
       color:#fff;
       width: 100%;
       height: 100%;
   }
   .ExceptNavigation{
         height: 30px;
         color: black;
         margin: 19px 0 10px 0;
         display: flex;
         justify-content: right;
         align-items:flex-start;
   }
   .ExceptNavigation_First{
       width: 55px;
       height: 30px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin: 0;
       margin-right: 30px;
       cursor: pointer;
       text-decoration: none;
   }
   .ExceptNavigation_First span {
       font-size: 12px;
       color: rgb(203, 187, 187);
       font-weight: 200;
   }
   .ExceptNavigation_First .ShopIconFont{
       width: 14px;
       height: 14px;
       font-size: 14px;
       color: rgb(203, 187, 187);
       margin-top: 2px;
   }
   .last{
       margin-right: 80px;
   }
</style>