<template>
  <div class="songerList">
    <navTop title="歌手列表"></navTop>
    <div class="songerType">
      <div class="place">
        <el-radio-group v-model="place">
          <el-radio-button v-for="place in placeArr" :key="place" :label="place"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="gender">
        <el-radio-group v-model="gender">
          <el-radio-button :label="gender" v-for="gender in genderArr" :key="gender"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="singerList">
      <ul>
        <li   
          v-for="(singer, index) in singerList"
          :key="index"       
        >
          <router-link :to="{path:'/singer',query:{singerId:singer.singerId}}" class="singer-item">
            <img class="singer-img" :src="singer.singImgSrc" alt>
            <div class="singer-name">
              <span>{{singer.singerName}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import navTop from "@/components/navTop";
export default {
  name: "songerList",
  components: {
    navTop
  },
  watch: {
    place: "classify",
    gender: "classify"
  },
  data() {
    return {
      place: "全部",
      gender: "全部",
      singerList: [],
      placeArr: ["全部", "内地", "港台", "韩国", "欧美", "日本", "其他"],
      genderArr: ["全部", "男", "女", "组合"]
    };
  },
  created() {
    this.getSingerInfo();
  },
  methods: {
    classify() {
      this.axios
        .post("/api/myMusic/singerScreen", {
          place: this.place,
          gender: this.gender
        })
        .then(res => {
          console.log(res.data);
          this.singerList = res.data;
        });
    },
    //跳转到歌手详情页并且传递歌手id
    // goSingerpage(singer) {
    //   console.log(singer);
    //   this.$router.push({
    //     name: "singer",
    //     params: {
    //       singer: singer
    //     }
    //   });
    // },
    //获取歌手列表
    getSingerInfo() {
      this.axios.get("/api/myMusic/singer").then(res => {
        // console.log(res.data);
        this.singerList = res.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.singerList {
  border-top: 1px solid #e4e7ed;
  ul {
    padding: 0;
    margin: 0;
  }
  .singer-item {
    list-style: none;
    height: 60px;
    display: flex;
    align-items: center;
    .singer-img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin: 0 10px 0 10px;
    }
    .singer-name {
      padding-left: 10px;
      display: flex;
      align-items: center;
      flex: 1;
      border-bottom: 1px solid #ebeef5;
      height: 100%;
    }
  }
}
.songerType /deep/ .el-radio-button__inner {
  border: none;
  background-color: transparent;
}
.songerType
  /deep/
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  background-color: transparent;
  color: rgb(49, 195, 124);
  box-shadow: none;
}
.songerType /deep/ .el-radio-group {
  display: flex;
  width: 100vw;
  overflow: auto;
}
.songerType::-webkit-scrollbar {
  display: none;
}
.gender {
  border-top: 1px solid#e4e7ed;
}
.songerType {
  background-color: #f5f7fa;
}
</style>