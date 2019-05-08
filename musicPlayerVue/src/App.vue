<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
a {
  // -webkit-tap-highlight-color: transparent;
  // outline: none;
  text-decoration: none;
  color: inherit;
}
*{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-progress-bar__outer{
      height: 2px!important;
 }
  .musicPlaying .el-progress-bar__outer{
    background-color:#c3c3c391!important;
    }
 html,body{
   height: 100%;
   width: 100%;
 }
 #app{
   height: 100%;
   width: 100%;
 }
</style>
