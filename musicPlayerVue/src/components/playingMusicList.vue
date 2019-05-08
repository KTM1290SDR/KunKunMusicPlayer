<template>
  <div class="playingMusicList" v-show="isShowPlayingMusicList">
    <div class="p-main">
      <div class="p-top">
        <span>
          <span v-if="cycleWay==0">
            <img @click="changeCycleWay" src="@/assets/icon/循环.png" alt>
            <span>顺序循环</span>
          </span>
          <span v-else-if="cycleWay==1">
            <img @click="changeCycleWay" src="@/assets/icon/单曲循环.png" alt>
            <span>单曲循环</span>
          </span>
          <span>({{playingMusicListArr.length}})</span>
        </span>
        <span @click="emptyList">
          <span>清空列表</span>
          <img src="@/assets/icon/垃圾桶.png" alt>
        </span>
      </div>
      <div class="p-list">
        <ul>
          <li
            @click="playThismusic(music,index)"
            class="music-item"
            v-for="(music,index) in playingMusicListArr"
            :key="index"
          >
            <div :class="playingMusic.music.musicId==music.musicId?'item-l playMusic': 'item-l'">
              <span>{{music.musicName}}</span>-
              <span>{{music.singerName}}</span>
            </div>
            <span @click.stop="deleteListMusic(music)">
              <img src="@/assets/icon/垃圾桶.png" alt>
            </span>
          </li>
        </ul>
      </div>
      <div @click="ShowPlayingMusicList" class="p-close">
        <span>关闭</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "playingMusicList",
  computed: {
    playingMusicListArr() {
      return this.$store.state.playingMusicListArr;
    },
    isShowPlayingMusicList() {
      return this.$store.state.onOff.isShowPlayingMusicList;
    },
    playingMusic() {
      return this.$store.state.playingMusic;
    },
    cycleWay() {
      return this.$store.state.cycleWay;
    },
    isPlay(){
         return this.$store.state.onOff.isPlay;
    }
   
  },
  methods: {
    //清空列表
    emptyList(){
      // console.log(this.playingMusic)
      this.$store.state.playingMusicListArr=[this.playingMusic.music]
    },
    //删除列表歌曲 
    deleteListMusic(music){
      if(music.musicId!=this.playingMusic.music.musicId){
      let newPlayArr=[]
      this.playingMusicListArr.forEach(item => {
        if(item.musicId==music.musicId){
          return;
        }else{
          newPlayArr.push(item)
        }
        this.$store.state.playingMusicListArr=newPlayArr
      });
      }
    },
     playThismusic(music, index) {
      this.$store.state.playingMusic = {
        music: music,
        index: index
      };
      if (this.isPlay == false) {
        this.$store.state.onOff.isPlay = true;
      }
      console.log(this.$store.state.playingMusic);
      //  this.$store.commit("playMusic");
      // console.log(this.$store.state.onOff.isPlay);
      console.log(this.$store.state.playingMusicListArr);
    },
    ShowPlayingMusicList() {
      this.$store.commit("ShowPlayingMusicList");
    },
    changeCycleWay() {
      this.$store.commit("changeCycleWay");
    }
  }
};
</script>
<style lang="less" scoped>
.playingMusicList {
  color: rgb(228, 228, 228);
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4;
  .p-main {
    background-color: rgba(29, 36, 48, 0.9);
    position: absolute;
    bottom: 0;
    width: 100%;
    .p-top {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #606266;
      font-size: 14px;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 20px;
          padding: 0 10px;
        }
      }
    }
    .p-list {
      max-height: 50vh;
      width: 100%;
      overflow: auto;
      box-sizing: border-box;
      ul {
        padding: 0;
        margin: 0;
      }
      li.music-item {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
        border-bottom: 1px solid #606266;
        .item-l {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > span:nth-child(2) {
            font-size: 12px;
          }
        }
        img {
          width: 20px;
        }
      }
    }
    .p-close {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
  .playMusic {
    color: #31c27c;
  }
}
</style>
