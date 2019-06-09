<template>
  <div class="rinkList">
    <navTop title="排行榜"></navTop>
    <div>
      <div class="total-list">
        <div class="rink-title">巅峰榜</div>
        <router-link :to="{path:'/rinkPage',query:{rinkType:0}}" class="rink-mian">
          <div class="rink-list">
            <ul>
              <li class="item" v-for="(music,index) in RinkArr" :key="index">
                <span>{{index+1}}. </span>
                <span>{{music.musicName}}</span>-
                <span>{{music.singerName}}</span>
              </li>
            </ul>
          </div>
          <div class="rink-img">
            <img :src="RinkArr[0].ademImgSrc" alt>
          </div>
        </router-link>
      </div>
      <div class="place-list">
        <div class="rink-title">地区榜</div>
        <div class="rink-mian">
          <router-link :to="{path:'/rinkPage',query:{rinkType:rinkType.id}}" class="rink-item" v-for="(rinkType,index) in placeRinkTypeArr" :key="index">
            <div class="rink-img">
              <img :src="rinkType.imgSrc" alt>
              <div class="black"></div>
              <span>{{rinkType.name}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navTop from "@/components/navTop";
export default {
  name: "rinkList",
  components: {
    navTop
  },
  data() {
    return {   
      placeRinkTypeArr: [
        { id: 1, name: "中国榜" ,imgSrc:''},
        { id: 2, name: "日韩榜" ,imgSrc:''},
        { id: 3, name: "欧美榜" ,imgSrc:''},
      ],
     RinkArr:[
       {ademImgSrc:''}
     ]
    };
  },
  created(){
        this.getRinkData()
  },
  methods:{
      getRinkData(){
          // this.axios.get('/api/myMusic/rinkData').then(res=>{
              //  console.log(res.data)
              this.axios.get('https://192.168.43.79:777/myMusic/rinkData').then(res=>{
               this.RinkArr=res.data.rink1;
               this.placeRinkTypeArr[0].imgSrc=res.data.rink2.ademImgSrc;
               this.placeRinkTypeArr[1].imgSrc=res.data.rink3.ademImgSrc;
               this.placeRinkTypeArr[2].imgSrc=res.data.rink4.ademImgSrc;
          })
      }
  }
};
</script>
<style lang="less" scoped>
.rinkList {
  width: 100%;
  height: 100%;
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.rink-title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
}
.place-list {
  box-sizing: border-box;
  padding: 0 3vw;
  .rink-mian {
    display: flex;
    justify-content: space-between;
  }
  .rink-item {
    height: 30vw;
    width: 30vw;
    border-radius: 5px;
    overflow: hidden;
    .rink-img {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f4f4f5;
      font-size: 18px;
      font-weight: 700;
      .black {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.6);
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -2;
      }
    }
  }
}
.total-list {
  padding: 0 3vw;
  box-sizing: border-box;
  .rink-mian {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #f4f4f5;
    border-radius: 5px;
    overflow: hidden;
    .rink-list {
      height: 30vw;
      flex-grow: 1;
      ul {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        height: 30vw;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 12px;
        .item {
          span:nth-child(3) {
            color: #909399;
          }
        }
      }
    }
    .rink-img {
      height: 30vw;
      width: 30vw;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
