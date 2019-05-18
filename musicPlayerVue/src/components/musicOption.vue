<template>
  <div class="musicOption" v-show="isShowOption">
    <div class="black-option">
      <div class="option-mian">
        <div class="option-top">
          <span>{{thisSelectMusic.musicName}}</span>
        </div>
        <div class="option-centre">
          <div @click="toSinger" class="op-item" v-if="optionOnffo[0]">
            <div>
              <img src="@/assets/用户.png" alt>
            </div>
            <span>查看歌手</span>
          </div>
          <div @click="toAdem" class="op-item" v-if="optionOnffo[1]">
            <div>
              <img src="@/assets/唱片.png" alt>
            </div>
            <span>查看专辑</span>
          </div>
          <div class="op-item" v-if="optionOnffo[2]">
            <div>
              <img src="@/assets/删除.png" alt>
            </div>
            <span>删除</span>
          </div>
          <div class="op-item" v-if="optionOnffo[3]" @click="pushIn()">
            <div>
              <img src="@/assets/添加.png" alt>
            </div>
            <span>添加</span>
          </div>
          <div class="op-item" v-if="optionOnffo[4]">
            <div>
              <img src="@/assets/icon/下载 (1).png" alt>
            </div>
            <span>下载</span>
          </div>
          <div class="op-item" v-if="optionOnffo[5]">
            <div>
              <img src="@/assets/icon/评论 (2).png" alt>
            </div>
            <span>评论</span>
          </div>
          <div class="op-item" v-if="optionOnffo[6]">
            <div>
              <img src="@/assets/icon/视频 (3).png" alt>
            </div>
            <span>播放MV</span>
          </div>
        </div>
        <div class="option-volume">
          <div class="vol-img" @click="isMute">
            <img v-if="Vol!=0" src="@/assets/icon/shengyin.png" alt>
            <img v-else src="@/assets/icon/jingyin.png" alt>
          </div>
          <div class="val-percentage" @touchmove="changeVol($event)" ref="percentage">
            <el-progress color="#fff" :show-text="false" :percentage="Vol"></el-progress>
          </div>
        </div>
        <div @click="ShowOption" class="option-bottom">
          <span>取消</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicOption",
  watch: {
    ishidden: "OptionTpye",
    path: "isShowOptionTpye"
  },
  computed: {
    isShowOption() {
      return this.$store.state.onOff.isShowOption;
    },
    path() {
      return this.$route.path;
    },
    thisSelectMusic() {
      return this.$store.state.thisSelectMusic;
    },
    Vol() {
      return this.$store.state.Vol;
    },
    ishidden() {
      return this.$store.state.onOff.ishidden;
    }
  },
  data() {
    return {
      optionOnffo: [true, true, true, true, true, true, true]
    };
  },

  methods: {
    isMute(){
      if (this.Vol==0) {
         this.$store.state.Vol = 50;
      }else{
         this.$store.state.Vol = 0;
      }
    },
    changeVol($event) {
      // console.log(1,$event.touches[0].clientX)
      let clientX = $event.touches[0].clientX;
      let percentageX = this.$refs.percentage.offsetWidth;
      //  console.log(2,percentageX)
      let x = (clientX - 65) / percentageX;
      if (clientX < 65 || x * 100 < 10) {
        this.$store.state.Vol = 0;
      } else if (clientX > 65 + percentageX) {
        this.$store.state.Vol = 100;
      } else {
        this.$store.state.Vol = Math.ceil(x * 100);
      }
      //  console.log(this.$store.state.Vol)
    },
    toSinger() {
      this.$store.state.onOff.isShowOption = false;
      this.$store.state.onOff.ishidden = false;
      this.$router.push({
        path: "/singer",
        query: { singerId: this.thisSelectMusic.musicSingerId }
      });
    },
    toAdem() {
      this.$store.state.onOff.isShowOption = false;
      this.$store.state.onOff.ishidden = false;
      this.$router.push({
        path: "/ademSong",
        query: { ademId: this.thisSelectMusic.musicAdemId }
      });
    },
    ShowOption() {
      this.$store.state.onOff.isShowOption = false;
    },
    //添加歌曲到播放列表或歌单
    pushIn() {
      let playingMusicListArr = this.$store.state.playingMusicListArr;
      let flag = false;
      playingMusicListArr.forEach(music => {
        if (music.musicId == this.thisSelectMusic.musicId) {
          flag = false;
          return;
        } else {
          flag = true;
        }
      });
      if (flag) {
        this.$store.state.playingMusicListArr.push(this.thisSelectMusic);
      }
      this.$store.state.onOff.isShowOption = false;
    },
    //根据页面类型控制按钮的显隐
    isShowOptionTpye() {
      if (this.$route.path == "/singer") {
        this.optionOnffo = [false, true, false, true, true, true, true];
      } else if (this.$route.path == "/ademSong") {
        this.optionOnffo = [true, false, false, true, true, true, true];
      } else if (this.$route.path == "/todayMusic") {
        this.optionOnffo = [true, true, false, true, true, true, true];
      }
    },
    OptionTpye() {
      if (this.ishidden == true) {
        this.optionOnffo = [true, true, false, false, true, true, true];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.musicOption {
  font-size: 14px;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 4;
  color: #dbdbdb;
  .black-option {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    .option-mian {
      .option-top {
        padding: 20px;
      }
      position: absolute;
      bottom: 0;
      background-color: #181a17;
      width: 100%;
      .option-centre {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid #303133;
        border-left: none;
        border-right: none;
        .op-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
          a {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          > div {
            padding: 20px;
            background-color: #282a29;
            border-radius: 20px;
            img {
              width: 30px;
              height: 30px;
            }
          }
          span {
            padding: 10px 0;
          }
        }
      }
      .option-volume /deep/ .el-progress-bar__outer {
        background-color: #c3c3c391 !important;
      }
      .option-volume /deep/ .el-progress-bar__inner {
        transition: width 0.2s ease;
      }

      .option-volume {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 40px 20px 20px;
        border-bottom: 1px solid #303133;
        .vol-img {
          padding-right: 20px;
          img {
            width: 25px;
          }
        }
        .val-percentage {
          flex-grow: 1;
        }
      }
      .option-bottom {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
