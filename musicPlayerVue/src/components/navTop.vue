<template>
  <div class="navTop">
    <div class="nav-top">
      <span @click="comeBack">
        <i class="el-icon-back"></i>
      </span>
      <div>{{title}}</div>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "navTop",
  props:{
      title:String
  },
  data(){
      return{
          
      }
  },
  methods:{
    comeBack(){
       this.$router.back(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.nav-top {
  z-index: 1;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 16px;
  color: #fff;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: rgb(49, 195, 124);
  i {
    font-size: 20px;
  }
  span{
      width: 20px;
  }
}
</style>
