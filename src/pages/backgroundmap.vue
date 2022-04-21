<template>
  <div class="backgroundmap">
    <div class="EntryDiv">
      <div class="EntryDescribe">
        Welcome to check the new trunk road related information!
      </div>
      <div class="EntryGuide">
        For more information, please click the button below
      </div>
      <a
        @click="
          () => {
            this.$router.push('about');
          }
        "
        class="EntryButton"
        ref="Detail"
        @mousemove="move"
        @mouseleave="leave"
        >Plan your visit
        <i
          class="iconfont icon-youjiantou_huaban EntryIcon"
          @click="GoDetails"
          ref="iconfont"
        ></i>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "backgroundmap",
  methods: {
    GoDetails() {
      //给字体图标绑定点击跳转事件
      this.$refs.Detail.click();
    },
    move() {
      this.$refs.Detail.style.backgroundColor = "#fff";
      this.$refs.Detail.style.color = "black";
      this.$refs.iconfont.style.color = "black";
    },
    leave() {
      this.$refs.Detail.style.backgroundColor = "black";
      this.$refs.Detail.style.color = "#fff";
      this.$refs.iconfont.style.color = "#fff";
    },
  },
};
</script>
 
<style  scoped>
.backgroundmap {
  background-image: url(../assets/image/13.jpg);
  background-size: 100% 100%;
  width: 100%;
  /* background-attachment: fixed; */
  height: 750px;
  border-top: 1px solid #fff;
  padding-left: 160px;
  padding-right: 160px;
  min-height: 600px;
}

.EntryDiv {
  position: absolute;
  padding: 0 10px;
  top: 41%;
  left: 15%;
  width: 350px;
  height: 250px;
  background-color: rgb(231, 213, 213);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.9);
  font-family: Georgia, "Times New Roman", Times, serif;
  cursor: default;
  color: #000;
}
.EntryDescribe {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 700;
  word-wrap: break-word;
  word-break: normal;
  margin-left: 10px;
}
.EntryGuide {
  text-align: left;
  word-wrap: break-word;
  word-break: normal;
  font-size: 10px;
  margin-top: 60px;
  font-weight: 300;
  color: rgb(40, 37, 37);
}
.EntryButton {
  width: 220px;
  height: 40px;
  background-color: black;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  text-indent: 25px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.9);
  cursor: pointer;
}
.EntryDiv .EntryIcon {
  position: absolute;
  top: 65%;
  left: 60%;
  width: 20px;
  height: 20px;
  font-size: 30px;
  margin-top: 1px;
  color: #fff;
  cursor: pointer;
  background-color: transparent;
}
</style>