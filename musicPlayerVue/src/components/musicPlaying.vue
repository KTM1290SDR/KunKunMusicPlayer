<template>
  <!-- <div class="musicPlaying" :style="{backgroundImage: `url(${coverImgUrl})`}"> -->
  <div class="musicPlaying" v-show="ishidden">
    <!-- <iframe :src="playingMusic.url"  frameborder="0"></iframe> -->
    <!-- <audio ref="audio" @canplay="getDuration" @timeupdate="updateTime" id="music" :src="img.url3"></audio> -->
    <audio
      autoplay="false"
      ref="audio"
      @canplay="getDuration"
      @timeupdate="updateTime"
      id="music"
      :src="playingMusic.music.musicSrc"
    ></audio>
    <img class="bg" :src="playingMusic.music.ademImgSrc">
    <div class="bbg"></div>
    <div class="masking"></div>
    <div class="play-top">
      <span class="come-back" >
        <i @click="showPlaying" class="el-icon-arrow-down"></i>
      </span>
      <div class="music-info-play">
        <div>{{playingMusic.music.musicName}}</div>
        <div>{{playingMusic.music.singerName}}</div>
        <div>MV</div>
      </div>
      <span class="more-option">
        <i @click="ShowOption" class="el-icon-more"></i>
      </span>
    </div>
    <div class="play-album">
      <!-- <img :class="isPlay?'play-album':'play-album  is-play'" src="@/assets/adem/timg.png" alt> -->
      <img
        :class="isPlay?'play-album':'play-album  is-play'"
        :src="playingMusic.music.ademImgSrc"
        alt
      >
    </div>
    <div class="play-bottom">
      <div  class="progress">
        <span class="time-this">{{elapsedTime|filterTime}}</span>
        <div ref="progressbar" style="width: 100%;  margin: 0 5vw;" @click="changeProgress">
        <el-progress  :percentage="proBarLen" :show-text="false" color="#fff"></el-progress>
        </div>
        <span class="time-all">{{durationTime|filterTime}}</span>
      </div>
      <div class="console-btn">
        <span>
          <img @click="changeCycleWay" v-if="cycleWay==0" src="@/assets/icon/循环.png" alt>
          <img @click="changeCycleWay" v-else-if="cycleWay==1" src="@/assets/icon/单曲循环.png" alt>
        </span>
        <div class="main-btn">
          <span @click="switchMusic(false)">
            <img src="@/assets/icon/上一曲.png" alt>
          </span>
          <span>
            <img v-if="isPlay" src="@/assets/icon/播放.png" @click="playMusic()" alt>
            <img v-else src="@/assets/icon/暂停.png" @click="playMusic()" alt>
          </span>
          <span @click="switchMusic(true)">
            <img src="@/assets/icon/下一曲.png" alt>
          </span>
        </div>
        <span @click="ShowPlayingMusicList">
          <img src="@/assets/icon/列表.png" alt>
        </span>
      </div>
      <div class="mucis-operation">
        <span>
          <img v-if="!isLike" src="@/assets/icon/喜欢-填充.png" alt>
          <img v-else src="@/assets/icon/喜欢-填充 (1).png" alt>
        </span>
        <span>
          <img src="@/assets/icon/下载.png" alt>
        </span>
        <span>
          <img src="@/assets/icon/评论.png" alt>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { fstat } from "fs";
import { request } from "http";
export default {
  name: "musicPlaying",
  watch: {
    isPlay: "playMusicing",
    playingMusic: "playMusic",
    proBarLen: "cycle",
    Vol:"changeVoll",
    playingMusicId:"musicPopUp"
  },
  computed: {
    //改变正在播放的音乐
    playingMusicListArr() {
      return this.$store.state.playingMusicListArr;
    },
    playingMusic() {
      return this.$store.state.playingMusic;
    },
     playingMusicId() {
      return this.$store.state.playingMusic.music.musicId;
    },
    ishidden() {
      return this.$store.state.onOff.ishidden;
    },
    isPlay() {
      return this.$store.state.onOff.isPlay;
    },
    proBarLen() {
      return this.$store.state.proBarLen;
    },
    cycleWay() {
      return this.$store.state.cycleWay;
    },
    Vol(){
      return this.$store.state.Vol;
    },
  },
  data() {
    return {
      durationTime: 0,
      elapsedTime: 0,
      circulationType: true,
      isLike: false,
      coverImgUrl:
        "//y.gtimg.cn/music/photo_new/T001R150x150M000002nXp292LIOGV.jpg?max_age=2592000"
    };
  },
  filters: {
    //时间过滤器
    filterTime(value) {
      let minute = parseInt(value / 60);
      let second = Math.round(value % 60);
      if (minute < 10) {
        minute = `0${minute}`;
      }
      if (second < 10) {
        second = `0${second}`;
      }
      return `${minute}:${second}`;
    }
  },
  methods: {
    changeVoll(){
      let vol=((this.Vol)/100).toFixed(1)
       
         this.$refs.audio.volume=vol
        
        // console.log(this.$refs.audio.volume)
    },
    //播放结束切换歌曲
    cycle() {
      if (this.proBarLen >= 100) {
        if (this.cycleWay == 1 || this.playingMusicListArr.length <= 1) {
          this.$refs.audio.load();
          this.musicPopUp()
        } else {
          this.switchMusic(true);
        }
      }
    },
    ShowOption(){
      this.$store.state.onOff.isShowOption=true;
      console.log(this.$store.state.playingMusic)
       this.$store.state.thisSelectMusic=this.$store.state.playingMusic.music;
    console.log(this.$store.state.thisSelectMusic)
    },
    ShowPlayingMusicList(){
       this.$store.commit("ShowPlayingMusicList");
    },
    //使用进度条改变歌曲进度
    changeProgress($event){
      // console.log($event.clientX)
      // console.log( this.$refs.progressbar.offsetWidth)
      // console.log( document.body.clientWidth)
      //窗口总长度
      let Xa=document.body.clientWidth;
      //进度条长度
      let Xb=this.$refs.progressbar.offsetWidth
      //点击位置x坐标
      let Xc=$event.clientX
      let X =Xc-(Xa -Xb)/2
      let playX=X/Xb*this.durationTime;
      this.$refs.audio.currentTime=playX
      if (this.isPlay) {
         this.$store.commit("playMusic");
      }
    },
    //手动切换歌曲
    switchMusic(flag) {
      // console.log(this.playingMusic);
      // console.log(this.playingMusicListArr);
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
    //设置歌曲总时长
    getDuration() {
      this.durationTime = this.$refs.audio.duration;
    },
    //更新歌曲当前播放时间
    updateTime(el) {
      this.elapsedTime = el.target.currentTime;
      this.$store.state.proBarLen =
        (this.elapsedTime / this.durationTime) * 100;
    },
    showPlaying() {
      this.$store.commit("changeMPShow");
    },
    //播放音乐
    playMusic() {
      this.$store.commit("playMusic");
    },
    changeCycleWay() {
      this.$store.commit("changeCycleWay");
    },
    musicPopUp(){
      this.axios.post("/api/myMusic/musicPopUp",{musicId:this.playingMusicId,singerId:this.playingMusic.music.singerId})
    },
    playMusicing() {
      if (!this.isPlay) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    }
  }
};
</script>
<style lang="less" scoped>
.musicPlaying {
  position: fixed;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  z-index: 3;
  .mucis-operation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 15px;
  }
  .console-btn {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span > img {
      width: 25px;
    }
    > span:nth-child(3) > img {
      width: 25px;
      padding-left: 5px;
    }
    .main-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(2) {
        width: 60px;
        height: 60px;
        margin: 0 40px;
        img {
          width: 30px;
        }
      }
      span {
        width: 40px;
        height: 40px;
        display: block;
        border: 2px solid #e7e7e7;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        img {
          width: 25px;
        }
      }
    }
  }
  * {
    box-sizing: border-box;
  }
  padding: 0 20px;
  color: #c3c3c3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .play-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    font-size: 18px;
    .music-info-play > div:nth-child(2) {
      padding: 10px 0;
      font-size: 12px;
    }
    .music-info-play > div:nth-child(3) {
      font-size: 12px;
      border: 1px solid #c3c3c3;
      border-radius: 3px;
      display: inline;
      padding: 0 3px;
    }
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

  .play-album {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      position: fixed;
      animation: rotate 15s linear infinite;
      animation-play-state: paused;
      border-radius: 50%;
      width: 80vw;
      height: 80vw;
      border: 5px solid rgba(0, 0, 0, 0.4);
    }
  }
  .bbg {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
  }
  .bg {
    background: url(../assets/adem/timg.png) center center no-repeat;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    filter: blur(50px);
  }
  .masking {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: -1;
  }
  .play-bottom {
    width: 100%;
    .progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-progress {
        flex-grow: 1;
       
      }
      span {
        font-size: 10px;
      }
    }
  }
}
.is-play {
  animation: rotate 15s linear infinite;
  animation-play-state: running !important;
  //  animation-fill-mode: forwards;
}
</style>
