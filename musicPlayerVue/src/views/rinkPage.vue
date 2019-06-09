<template>
  <div class="rinkPage">
    <navTop title="排行榜"></navTop>
    <div class="rink-img">
      <img :src="musicListArr[0].ademImgSrc" alt>
      <div class="black"></div>
      <span>{{rinkType}}</span>
    </div>
    <musicList :musicListArr="musicListArr"></musicList>
  </div>
</template>
<script>
import navTop from "@/components/navTop";
import musicList from "@/components/musicList";
export default {
  name: "rinkPage",
  components: {
    navTop,
    musicList
  },
  data() {
    return {
    rinkType:"",
      musicListArr: [{ademImgSrc:''}]
    };
  },
  created() {
    // console.log(this.$route.query.rinkType);
    if(this.$route.query.rinkType==0){
        this.rinkType="巅峰榜"
    }else if(this.$route.query.rinkType==1){
        this.rinkType="中国榜"
    }else if(this.$route.query.rinkType==2){
        this.rinkType="日韩榜"
    }else if(this.$route.query.rinkType==3){
        this.rinkType="欧美榜"
    }
    this.getRinkList();
  },
  methods: {
    getRinkList() {
      this.axios
        // .post("/api/myMusic/rinkList", { rinkType: this.$route.query.rinkType })
        .post("https://192.168.43.79:777/myMusic/rinkList", { rinkType: this.$route.query.rinkType })
        .then(res => {
        //   console.log(res.data);
          this.musicListArr = res.data;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.rink-img {
  height: 30vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .black {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
  img {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -2;
  }
  span {
    color: #fff;
    font-size: 50px;
  }
}
</style>
