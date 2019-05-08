<template>
  <div class="navigationBar">
    <div class="nav-top">
      <div class="menu-top-left" @click="changeisShowMS">
        <i class="el-icon-menu" ></i>
      </div>
      <div class="top-page-option">
        <router-link exact to="/myMusic">我的</router-link>
        <router-link exact to="/index">音乐馆</router-link>
        <router-link exact to="/discover">发现</router-link>
      </div>
      <div class="top-more">
        <i class="el-icon-plus"></i>
      </div>
    </div>
    <div class="nav-search">
      <div>
        <span>
          <i class="el-icon-search"></i>
        </span>
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "navigationBar",
  data() {
    return {
    };
  },
  methods:{
    changeisShowMS(){
      this.$store.commit("changeisShowMS");
    }
  }
};
</script>
<style lang="less" scoped>
.navigationBar {
  height: 90px;
  color: #fff;
  background-color: rgb(49, 195, 124);
    position: fixed;
  width: 100%;
  z-index: 1;
  .nav-top {
    .menu-top-left,
    .top-more {
      margin: 0 10px;
      .masking {
        z-index: 999;
         position: fixed;
         height: 100%;
         width: 100%;
         top: 0;
        left: 0;
        background-color:rgba(0,0,0,0.4);
      .menu-main {
        transition: all 0.5s ease 0.5s;
        height: 100%;
        width: 80%;
        background-color: #fff;
        top: 0;
        left: 0;
      }
      .menu-main-hidden{
        width: 0;
      }
      }

    }
    .router-link-active {
      font-size: 18px;
      font-weight: bolder;
    }
    a {
      color: #fff;
      text-decoration: none;
      padding: 10px;
    }
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
  }
  .nav-search {
    font-size: 14px;
    box-sizing: border-box;
    background-color: rgb(45, 175, 113);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin: 10px;
    > div > span:nth-child(1) {
      margin: 0 5px;
    }
  }
}
</style>
