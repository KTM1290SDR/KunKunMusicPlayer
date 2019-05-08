<template>
  <div class="adem">
    <div class="my-list">
      <ul>
        <li class="list-item" v-for="(adem,index) in ademList" :key="index">
          <router-link :to="{path:'/ademSong',query:{ademId:adem.ademId}}">
            <div class="my-list-img">
              <img :src="adem.ademImgSrc" alt>
            </div>
            <div class="my-list-info">
              <div class="info-in">
                <div>{{adem.ademName}}</div>
                <div></div>
              </div>
              <span>
                <i class="el-icon-arrow-right"></i>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "adem",
  props: {
    ademList: Array
  }
};
</script>
<style lang="less" scoped>
.my-list-img {
  height: 60px;
  width: 60px;
  margin-bottom: 1px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  display: flex;
  .my-list-info {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #ebeef5;
    .info-in > div:last-child {
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
}
</style>