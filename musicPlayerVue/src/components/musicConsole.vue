<template>
  <div class="musicConsole">
    <el-progress class="music-porg" :percentage="proBarLen" :show-text="false" color="#31c37c"></el-progress>
    <div class="con-main">
      <div class="music-img" @click="showPlaying">
        <img :class="isPlay?'':'is-play'" :src="playingMusic.music.ademImgSrc" alt>
      </div>
      <div @touchstart="getXa($event)" @touchend="getXc($event)" class="console-center">
        <div style="font-size: 16px;">{{playingMusic.music.musicName}}</div>
        <div>
          <span>{{playingMusic.music.singerName}}</span>-
          <span>{{playingMusic.music.ademName}}</span>
        </div>
      </div>
      <div class="control-btn">
        <img v-if="isPlay" src="@/assets/icon/播放 (1).png" @click="playMusic()" alt>
        <img v-else src="@/assets/icon/暂停 (1).png" @click="playMusic()" alt>
      </div>
      <div class="control-list" @click="ShowPlayingMusicList">
        <i class="el-icon-tickets"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicConsole",
  computed: {
    isPlay() {
      return this.$store.state.onOff.isPlay;
    },
    proBarLen() {
      return this.$store.state.proBarLen;
    },
    playingMusic() {
      return this.$store.state.playingMusic;
    },
    playingMusicListArr() {
      return this.$store.state.playingMusicListArr;
    }
  },
  watch: {
    Xc: "touchMoveSwitchMusic"
  },
  data() {
    return {
      Xa: 0,
      Xb: 0,
      Xc: 0
    };
  },
  methods: {
    //切换正在播放歌曲列表是否展示
    ShowPlayingMusicList() {
      this.$store.commit("ShowPlayingMusicList");
    },
    switchMusic(flag) {
      let index = this.playingMusic.index;
      this.$store.state.onOff.isPlay = false;
      if (flag) {
        index++;
        if (index >= this.playingMusicListArr.length) {
          index = 0;
        }
      } else {
        index--;
        if (index < 0) {
          index = this.playingMusicListArr.length - 1;
        }
      }
      this.$store.state.playingMusic.music = this.playingMusicListArr[index];
      this.$store.state.playingMusic.index = index;
    },
    showPlaying() {
      this.$store.commit("changeMPShow");
    },
    playMusic() {
      this.$store.commit("playMusic");
    },
    getXc($event) {
      // console.log($event);
      this.Xb = $event.changedTouches[0].clientX;
      this.Xc = this.Xb - this.Xa;
    },
    getXa($event) {
      this.Xa = $event.changedTouches[0].clientX;
    },
    touchMoveSwitchMusic() {
      if (this.Xc < -20) {
        // console.log('左')
        this.switchMusic(false);
      } else if (this.Xc > 20) {
        // console.log('右')
        this.switchMusic(true);
      } else {
        return;
      }
      this.Xc = 0;
    }
  }
};
</script>
<style lang="less" scoped>
@color: #31c37c;
.musicConsole {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  .music-porg {
    height: 2px;
  }
  .con-main {
    height: 70px;
    display: flex;
    align-items: center;
    .console-center {
      div:nth-child(1) {
        margin-bottom: 5px;
        white-space: nowrap;
        overflow: hidden;
        max-width: 80%;
        text-overflow: ellipsis;
      }
      div:nth-child(2) {
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        max-width: 80%;
        text-overflow: ellipsis;
      }
      width: 30vw;
      overflow: hidden;
      flex-grow: 1;
      font-size: 12px;
    }
    .control-btn {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid @color;
      display: flex;
      justify-content: center;
      align-items: center;
      color: @color;
      margin-right: 25px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .control-list {
      > div:nth-child(1) {
        margin-bottom: 10px;
      }
      font-size: 25px;
      color: @color;
      margin-right: 25px;
    }
    .music-img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 10px;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        animation: rotate 15s linear infinite;
        animation-play-state: paused;
      }
    }
  }
}
.is-play {
  animation: rotate 15s linear infinite;
  animation-play-state: running !important;
  // animation-fill-mode: forwards;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.el-progress-bar__outer {
  height: 2px !important;
}
</style>
