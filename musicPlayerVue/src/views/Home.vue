<template>
  <div class="home">
    <musicOption></musicOption>
    <playingMusicList></playingMusicList>
    <menuSettings></menuSettings>
    <musicPlaying></musicPlaying>
    <navigationBar v-if="showNav"></navigationBar>
    <div  :class="showNav?'stance-top':'stance-top2'"></div>
    <router-view></router-view>
    <div class="stance-bottom"></div>
    <musicConsole></musicConsole>
  </div>
</template>

<script>
import musicPlaying from "@/components/musicPlaying";
import navigationBar from "@/components/navigationBar";
import musicConsole from "@/components/musicConsole";
import menuSettings from "@/components/menuSettings";
import navTop from "@/components/navTop";
import playingMusicList from "@/components/playingMusicList";
import musicOption from "@/components/musicOption";
export default {
  name: "home",
  components: {
    navigationBar,
    musicConsole,
    menuSettings,
    musicPlaying,
    navTop,
    playingMusicList,
    musicOption
  },
  watch: {
    $route: "isShowNav"
  },
  created(){
    this.isShowNav()
    let myDate=new Date()
    console.log(myDate)
  },
  data() {
    return {
      showNav:true
    };
  },
  methods: {
    isShowNav() {
      // console.log(this.$route.path);
      if(this.$route.path=='/myMusic'||this.$route.path=='/discover'||this.$route.path=='/index'){
        this.showNav=true;
      }else{
        this.showNav=false;
      }
      // console.log(this.showNav);
    }
  }
};
</script>
<style lang="less" scoped>
.stance-top {
  height: 90px;
}
.stance-top2 {
  height: 50px;
}
.stance-bottom {
  height: 70px;
}
</style>

