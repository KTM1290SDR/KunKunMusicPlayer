<template>
  <div class="singer">
    <navTop title="歌手作品"></navTop>
    <div class="sing-cover">
      <div class="black-1"></div>
      <img :src="singerInfo.singer.singImgSrc" alt>
      <div class="singer-main">
        <img :src="singerInfo.singer.singImgSrc" alt>
        <span>{{singerInfo.singer.singerName}}</span>
      </div>
    </div>
    <div class="sing-adem-MV-particulars">
      <div @click="optionSelect(0)" :class="this.option==0?'option-active option':' option'">
        <span>单曲</span>
        <span>{{singerInfo.musicList.length}}</span>
      </div>
      <div @click="optionSelect(1)" :class="this.option==1?'option-active option':' option'">
        <span>专辑</span>
        <span>{{singerInfo.ademList.length}}</span>
      </div>
      <div @click="optionSelect(2)" :class="this.option==2?'option-active option':' option'">
        <span>视频</span>
        <span>30</span>
      </div>
      <div @click="optionSelect(3)" :class="this.option==3?'option-active option':' option'">详情</div>
    </div>
    <div>
      <div v-if="this.option==0">
        <musicList :musicListArr="singerInfo.musicList"></musicList>
      </div>
      <div v-else-if="this.option==1">
        <adem :ademList="singerInfo.ademList"></adem>
      </div>
      <div v-else-if="this.option==2">3</div>
      <div v-else>4</div>
    </div>
  </div>
</template>
<script>
import navTop from "@/components/navTop";
import adem from "@/components/adem";
import musicList from "@/components/musicList";
export default {
  name: "singer",
  components: {
    navTop,
    adem,
    musicList
  },
  data() {
    return {
      option: 0,
      singerInfo: {
        singer: {
          singImgSrc: ""
        },
        ademList:[],
        musicList:[]
      } 
    };
  },
  created() {
    this.getSingerInfo();
  },
  methods: {
    optionSelect(flag) {
      this.option = flag;
    },
    getSingerInfo() {
      let singerId = this.$route.query.singerId;
      this.axios
        // .post("/api/myMusic/singlesinger", { singerId: singerId })
        .post("https://192.168.43.79:777/myMusic/singlesinger", { singerId: singerId })
        .then(res => {
          this.singerInfo = res.data;
          console.log(this.singerInfo);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.sing-cover {
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;
  .singer-main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > img {
      object-fit: cover;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 3px solid #666;
    }
    span {
      color: #e4e4e4;
      margin-top: 20px;
    }
  }
  .black-1 {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: -1;
  }
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    filter: blur(30px);
  }
}
.sing-adem-MV-particulars {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid #e4e4e4;
  box-sizing: border-box;
  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #666;
    font-size: 14px;
    height: 100%;
    box-sizing: border-box;
    > span {
      padding: 0 5px;
    }
  }
  .option-active {
    border-bottom: 3px solid #31c37c;
    color: #31c37c;
  }
}
</style>
