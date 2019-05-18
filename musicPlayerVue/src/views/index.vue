<template>
  <div class="index">
    <div class="slide-show">
      <el-carousel arrow="nerver" trigger="click" height="200px">
        <el-carousel-item>
          <div>
            <img src="@/assets/1249536.jpg" alt>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div>
            <img src="@/assets/1249708.jpg" alt>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div>
            <img src="@/assets/1249820.jpg" alt>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div>
            <img src="@/assets/1250119.jpg" alt>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="menu">
      <router-link to="/songerList">
        <div class="item">
          <img src="@/assets/用户-实色.png" alt>
          <span>歌手</span>
        </div>
      </router-link>
      <router-link to='/rinkList'>
        <div class="item">
          <img src="@/assets/排行榜.png" alt>
          <span>排行</span>
        </div>
      </router-link>
      <router-link to>
        <div class="item">
          <img src="@/assets/分类.png" alt>
          <span>分类</span>
        </div>
      </router-link>
      <router-link to>
        <div class="item">
          <img src="@/assets/耳机，音乐，听歌.png" alt>
          <span>一起听</span>
        </div>
      </router-link>
      <router-link to="/todayMusic">
        <div class="item">
          <img src="@/assets/推荐.png" alt>
          <span>今日推荐</span>
        </div>
      </router-link>
      <router-link to>
        <div class="item">
          <img src="@/assets/分享.png" alt>
          <span>歌单分享</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { request } from "http";
export default {
  name: "index",
  data() {
    return {
      ShowNav:true
    };
  },
};
</script>
<style lang="less" scoped>
.slide-show {
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 1;
  // position: relative;
  div {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @lang: 30vw;
    width: @lang;
    height: @lang;
    font-size: 14px;
    color: #555;
    img {
      width: 25px;
      margin-bottom: 10px;
    }
    i,
    span {
      display: block;
    }
  }
}
.option-list {
  height: 70px;
  margin: 10px;
  background-color: green;
}
</style>
