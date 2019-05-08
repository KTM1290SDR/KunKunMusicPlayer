<template>
  <div class="menuSettings" v-show="isShowMS">
    <div class="masking" @click="changeisShowMS"></div>
    <div class="menu-l" @click.stop>
      <div class="uers-info">
        <div class="headPortrait">
          <img src="@/assets/adem/timg.png" alt>
        </div>
        <div>
          <span>许宇轩</span>
        </div>
      </div>
      <div class="menu-list">
        <ul>
          <li>
            <img src="@/assets/icon/评论 (1).png" alt>
            <span>我的评论</span>
          </li>
          <li>
            <img src="@/assets/icon/设置-实色.png" alt>
            <span>设置</span>
          </li>
          <li>
            <img src="@/assets/icon/关于.png" alt>
            <span>关于XX音乐</span>
          </li>
        </ul>
        <div class="meun-btm">
          <img src="@/assets/icon/退出登录.png" alt>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuSettings",
  computed:{
      isShowMS() {
      return this.$store.state.onOff.isShowMS;
    }
  },
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
<style lang="less" >
.menuSettings {
  color: #515151;
  font-size: 14px;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
}
.masking {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.menu-l {
  .meun-btm {
    background-color: #fff;
    box-sizing: border-box;
    position: absolute;
    justify-content: flex-end;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    img {
      padding: 0 5px;
      width: 20px;
      height: 20px;
    }
  }
  .uers-info {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    .headPortrait {
      height: 70px;
      width: 70px;
      padding: 0 20px 0 0;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  .menu-list {
    li {
      display: flex;
      align-items: center;
      padding: 15px 0;
      list-style: none;
    }
    ul {
      background-color: #fff;
      list-style: none;
      margin: 0;
      padding: 0;
      img {
        padding: 0 10px;
        width: 20px;
        height: 20px;
      }
    }
  }
  width: 80%;
  height: 100%;
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
}
</style>
