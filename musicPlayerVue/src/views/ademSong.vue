<template>
  <div class="ademSong">
    <navTop title="大小说家"></navTop>
    <div class="adem-box">
      <div class="black"></div>
      <img :src="ademInfo.adem.ademImgSrc" alt>
      <div class="adem-main">
        <div class="adem-img">
          <img :src="ademInfo.adem.ademImgSrc" alt>
        </div>
        <div class="adem-info">
          <div>专辑名：{{ademInfo.adem.ademName}}</div>
          <div>歌手：{{ademInfo.adem.singerName}}</div>
          <div>发布日期：2018-07-12</div>
        </div>
      </div>
    </div>
   <musicList :musicListArr="ademInfo.ademMusic"></musicList>
  </div>
</template>
<script>
import navTop from "@/components/navTop";
import musicList from "@/components/musicList";
export default {
  name: "ademSong",
  components: {
    navTop,
    musicList
  },
  data(){
    return{
      ademInfo:{
        adem:{
          ademImgSrc:''
        },
        ademMusic:[]
      }
    }
  },
  created(){
    this.getAdemMusic()
  },
  methods:{
    getAdemMusic(){
      let ademId=this.$route.query.ademId;
      this.axios.post("/api/myMusic/ademSong",{ademId:ademId}).then(res=>{
        console.log(res.data)
        this.ademInfo=res.data
        this.ademInfo.ademMusic=JSON.parse(JSON.stringify(this.ademInfo.ademMusic))
        console.log(JSON.parse(JSON.stringify(this.ademInfo.ademMusic)))
        
      })
    }
  }
};
</script>
<style lang="less" scoped>
.adem-box {
  width: 100%;
  height: 230px;
  position: relative;
  overflow: hidden;
  .adem-main {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .adem-info {
      height: 150px;
      color: rgba(255, 255, 255, 0.774);
      > div:nth-child(1) {
        font-size: 16px;
        padding: 10px 0;
      }
      > div:nth-child(2) {
        font-size: 12px;
        padding: 10px 0;
      }
      > div:nth-child(3) {
        font-size: 12px;
      }
    }
    .adem-img {
      height: 150px;
      width: 150px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .black {
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
</style>
