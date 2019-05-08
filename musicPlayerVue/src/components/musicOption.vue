<template>
  <div class="musicOption" v-show="isShowOption">
    <div class="black-option">
      <div class="option-mian">
        <div class="option-top">
          <span>{{thisSelectMusic.musicName}}</span>
        </div>
        <div class="option-centre">
          <div class="op-item">
            <div>
              <img src="@/assets/用户.png" alt>
            </div>
            <span>查看歌手</span>
          </div>
            <div class="op-item">
            <div>
              <img src="@/assets/唱片.png" alt>
            </div>
            <span>查看专辑</span>
          </div>
            <div class="op-item">
            <div>
              <img src="@/assets/删除.png" alt>
            </div>
            <span>删除</span>
          </div>
            <div class="op-item" @click="pushIn()">
            <div>
              <img src="@/assets/添加.png" alt>
            </div>
            <span>添加</span>
          </div>
        </div>
        <div class="option-volume"></div>
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
  computed:{
      isShowOption(){
          return this.$store.state.onOff.isShowOption
      },
      thisSelectMusic(){
        return this.$store.state.thisSelectMusic
      }
  },
  methods:{
      ShowOption(){
          this.$store.state.onOff.isShowOption=false;
      },
      pushIn(){
        let playingMusicListArr=this.$store.state.playingMusicListArr
        let flag=false;
        playingMusicListArr.forEach(music => {
          if(music.musicId==this.thisSelectMusic.musicId){
            flag=false;
            return;
          }else{         
             flag=true;
          }
        });
        if (flag) {
          this.$store.state.playingMusicListArr.push(this.thisSelectMusic)
        } 
        this.$store.state.onOff.isShowOption=false;
      }
  }
};
</script>

<style lang="less" scoped>
.musicOption {
    // display: none;
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
        border:1px solid #303133;
        border-left: none;
        border-right: none;
        .op-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
          > div {
            padding: 20px;
            background-color: #282a29;
            border-radius: 20px;
            img {
              width: 30px;
              height: 30px;
            }
          }
          span{
              padding: 10px 0;
          }
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
