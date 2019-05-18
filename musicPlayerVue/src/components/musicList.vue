<template>
  <div class="musicList">
    <div class="list-main">
      <div>
        <ul>
          <li
            class="single-music"
            @click="playThismusic(music,index)"
            v-for="(music,index) in musicListArr"
            :key="index"
          >
            <div :class="playingMusic.music.musicId==music.musicId?'single-music-left playMusic':' single-music-left'">
              <div class="music-name">{{music.musicName}}</div>
              <div :class="playingMusic.music.musicId==music.musicId?'s-m-bottom playMusic':' s-m-bottom'" >
                <div class="songer-name">{{music.singerName}}</div>
                <span>-</span>
                <div class="album-name">{{music.ademName}}</div>
              </div>
            </div>
            <div class="single-music-right">
              <div class="MV-btn">
                <img src="@/assets/视频.png" alt>
              </div>
              <div @click.stop="ShowOption(music)" class="mune-btn">
                <img src="@/assets/更多.png" alt>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicList",
  props:{
    musicListArr:Array,    
  },
  computed: {
    isPlay() {
      return this.$store.state.onOff.isPlay;
    },
     playingMusic(){
      return this.$store.state.playingMusic;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    playThismusic(music,index) {
      this.$store.state.playingMusic ={
        music:music,
        index:index
      } ;
      if (this.isPlay == false) {
        this.$store.state.onOff.isPlay = true;
      }
      console.log(this.$store.state.playingMusic)
      this.$store.state.playingMusicListArr = this.musicListArr;
      //  this.$store.commit("playMusic");
      // console.log(this.$store.state.onOff.isPlay);
      //  console.log(this.$store.state.playingMusicListArr)
    },
    ShowOption(music){
       this.$store.state.onOff.isShowOption=true;
       this.$store.state.thisSelectMusic=music;
    }
  }
};
</script>
<style lang="less" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.single-music {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(240, 240, 240);
  .music-name {
    font-size: 14px;
  }
  .s-m-bottom {
    display: flex;
    padding-top: 5px;
    font-size: 10px;
    color: #666;
  }
  .single-music-right {
    display: flex;
    align-items: center;
    img {
      width: 15px;
      margin-left: 10px;
    }
    .mune-btn img {
      width: 25px;
    }
  }
}

  .playMusic{
    color: #31c27c !important;
  }
</style>
