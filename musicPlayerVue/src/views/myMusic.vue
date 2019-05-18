<template>
  <div class="myMusic">
    <div class="user-top">
      <div class="head-portrait">
        <img src="/api/assets/timg.jpg" alt>
      </div>
      <div class="user-name">许宇轩</div>
    </div>
    <div class="my-favorite">
      <div class="top-like" @click="showFList = !showFList">
        <div>
          <div class="like-icn">
            <img src="@/assets/喜欢.png" alt>
          </div>
          <div class="like-des">我的音乐</div>
        </div>
        <span :class="showFList?'i-rotate i-def':'i-def'">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="favorite-list">
        <el-collapse-transition>
          <ul v-show="showFList">
            <li class="single-music"  @click="playThismusic(music)" v-for="(music,index) in musicListArr" :key="index">
              <div class="single-music-left">
                <div class="music-name">{{music.name}}</div>
                <div class="s-m-bottom">
                  <div class="songer-name">{{music.singer}}</div>
                  <span>-</span>
                  <div class="album-name">{{music.album}}</div>
                </div>
              </div>
              <div class="single-music-right">
                <div class="MV-btn">
                  <img src="@/assets/视频.png" alt>
                </div>
                <div class="mune-btn">
                  <img src="@/assets/更多.png" alt>
                </div>
              </div>
            </li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
    <div class="history-listen">
      <div class="history-top" @click="showHList = !showHList">
        <div>
          <div class="history-icn">
            <img src="@/assets/历史.png" alt>
          </div>
          <div class="history-des">历史播放</div>
        </div>
        <span :class="showHList?'i-rotate i-def':'i-def'">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="history-list">
        <el-collapse-transition>
          <ul v-show="showHList">
            <li class="single-music" @click="playThismusic(music)"  v-for="(music,index) in musicListArr" :key="index">
              <div class="single-music-left">
                <div class="music-name">{{music.name}}</div>
                <div class="s-m-bottom">
                  <div class="songer-name">{{music.singer}}</div>
                  <span>-</span>
                  <div class="album-name">{{music.album}}</div>
                </div>
              </div>
              <div class="single-music-right">
                <div class="MV-btn">
                  <img src="@/assets/视频.png" alt>
                </div>
                <div class="mune-btn">
                  <img src="@/assets/更多.png" alt>
                </div>
              </div>
            </li>            
          </ul>
        </el-collapse-transition>
      </div>
    </div>
    <div class="my-play-list">
      <div class="my-play-top" @click="showMMList = !showMMList">
        <div>
          <div class="my-play-icn">
            <img src="@/assets/推荐歌单 (1).png" alt>
          </div>
          <div class="my-play-des">我的歌单</div>
        </div>
        <span :class="showMMList?'i-rotate i-def':'i-def'">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="my-list">
        <el-collapse-transition>
          <ul v-show="showMMList">
            <li class="list-item">
              <router-link to>
                <div class="my-list-img">
                  <img src="@/assets/adem/timg.png" alt>
                </div>
                <div class="my-list-info">
                  <div class="info-in">
                    <div>林宥嘉金曲</div>
                    <div>12首</div>
                  </div>
                  <span>
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { fstat } from "fs";
// import json from "http://localhost:8080/public/static/data/music.json"
export default {
  name: "myMusic",
  mounted(){
    this.loadData()
  },
  data() {
    return {
      musicListArr: [],
      showFList: false,
      showHList: false,
      showMMList: true
    };
  },
  methods: {
    playThismusic(music){
      this.$store.state.playingMusic = music;
      console.log(this.$store.state.playingMusic)
    },
    loadData() {
      this.axios.get("https://wd2101952448cmmwro.wilddogio.com/music.json").then(res => {
        // this.musicListArr = res.data
        	for(let key in res.data){
              res.data[key].ids=key;//把key值赋值到res的id属性中
              this.musicListArr.unshift(res.data[key])//把遍历的对象添加到数组中
              this.musicListArr = this.musicListArr[0].slice(0,4)
            }	
            // this.musicListArr.forEach(music => {
            //   console.log(music);
            //   music.url=require(music.url);
            //   music.cover=require(music.cover)
            // });
        console.log(this.musicListArr);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.list-item {
  padding: 5px 10px;
  a {
    display: flex;
    .my-list-info {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
      padding: 0 10px;
      .info-in > div:last-child {
        font-size: 12px;
        margin-top: 3px;
        color: #666;
      }
    }
    .my-list-img {
      height: 60px;
      width: 60px;
      box-shadow: 2px 2px 1px 1px #c0c4cc;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.user-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: rgb(250, 250, 250);
  .head-portrait {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.single-music {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(240, 240, 240);
  .music-name {
    font-size: 14px;
  }
  .s-m-bottom {
    display: flex;
    padding-top: 5px;
    font-size: 10px;
    color: #666;
  }
  .single-music-right {
    display: flex;
    align-items: center;
    img {
      width: 15px;
      margin-left: 10px;
    }
    .mune-btn img {
      width: 25px;
    }
  }
}
.single-music:last-child {
  border-bottom: none;
}

.top-like,
.history-top,
.my-play-top {
  padding: 0 20px 0 10px;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    span {
      transition: 1s;
    }
  }
  .like-icn,
  .history-icn,
  .my-play-icn {
    margin-right: 10px;
    display: flex;
    img {
      width: 22px;
      height: 22px;
    }
  }
}
.favorite-list,
.history-list,
.my-list {
  background-color: rgb(250, 250, 250);
}
.i-rotate {
  transform: rotate(90deg);
}
span.i-def {
  transition: 0.3s;
}
</style>