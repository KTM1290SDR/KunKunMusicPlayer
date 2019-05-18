<template>
  <div class="todayMusic">
    <navTop title="今日推荐"></navTop>
    <div class="today-top">
      <div class="today-img">
          <img :src="todayMusicList[0].ademImgSrc" alt="">
        <div class="black">
          <div class="today-date">
              <span><strong>{{month}}</strong></span>
              <span>{{day}}</span>
          </div>
        </div>
      </div>
    </div>
    <musicList :musicListArr="todayMusicList"></musicList>
  </div>
</template>
<script>
import musicList from "@/components/musicList";
import navTop from "@/components/navTop";
export default {
  name: "todayMusic",
  components: {
    musicList,
    navTop
  },
  data(){
      return {
          month:'',
          day:'',
          todayMusicList:[{ademImgSrc:""}]
      }
  },
  created(){
    let myDate=new Date;
     this.month= myDate.toDateString().split(" ")[1].toUpperCase();
     this.day=myDate.getDate();
     this.getTodayMusicList();
  },
  methods:{
      getTodayMusicList(){
          this.axios.get("/api/MyMusic/todayMusic").then(res=>{
              this.todayMusicList=res.data
              console.log(res.data)
          })
      }
  }
};
</script>
<style lang="less" scoped>
.today-top {
  height: 200px;
  overflow: hidden;
  .today-img{
    height: 100%;
    width: 100%;
    position: relative;
    img{
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
        z-index: -1;
        filter: blur(20px)
    }
    .black{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        .today-date{
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 140px;
            width: 140px;
            border: 3px solid  #fff;
            span:nth-child(1){
                margin-top: 10px;
            }
            span:nth-child(2){
                font-size: 100px;
            }
        }
    }
}
}

</style>
