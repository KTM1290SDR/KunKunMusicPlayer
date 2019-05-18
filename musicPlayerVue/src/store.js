/* eslint-disable global-require */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onOff: {
      isShowPlayingMusicList: false,
      ishidden: false,
      isShowMS: false,
      isPlay: false,
      isShowOption:false
    },
    playingMusicListArr: [{
      musicId: 19999,
        musicName: '绅士',
        singerName: '薛之谦',
        ademName: '绅士',
        // eslint-disable-next-line import/no-unresolved
        musicSrc: require('@/assets/music/薛之谦 - 绅士.mp3'),
        // url: '@/assets/music/薛之谦 - 绅士.mp3',
        // eslint-disable-next-line import/no-unresolved
        ademImgSrc: require('@/assets/adem/绅士.jpg')
        // cover: '@/assets/adem/绅士.jpg',  
      },
      {
        musicId: 10005,
        musicName: '刚刚好',
        singerName: '薛之谦',
        ademName: '初学者',
        // eslint-disable-next-line import/no-unresolved
        musicSrc: require('@/assets/music/薛之谦 - 刚刚好.mp3'),
        // url: '@/assets/music/薛之谦 - 绅士.mp3',
        // eslint-disable-next-line import/no-unresolved
        ademImgSrc: require('@/assets/adem/刚刚好.jpg')
        // cover: '@/assets/adem/绅士.jpg',  
      }, {
        musicId: 10001,
        musicName: '有何不可',
        singerName: '许嵩',
        ademName: '自定义',
        // eslint-disable-next-line import/no-unresolved
        musicSrc: require('@/assets/music/许嵩 - 有何不可.mp3'),
        // url: '@/assets/music/薛之谦 - 绅士.mp3',
        // eslint-disable-next-line import/no-unresolved
        ademImgSrc: require('@/assets/adem/有何不可.jpg')
        // cover: '@/assets/adem/绅士.jpg',  
      }, {
        musicId: 10002,
        musicName: '幻听',
        singerName: '许嵩',
        ademName: '梦游计',
        // eslint-disable-next-line import/no-unresolved
        musicSrc: require('@/assets/music/许嵩 - 幻听.mp3'),
        // url: '@/assets/music/薛之谦 - 绅士.mp3',
        // eslint-disable-next-line import/no-unresolved
        ademImgSrc: require('@/assets/adem/幻听.jpg')
        // cover: '@/assets/adem/绅士.jpg',  
      },
    ],
    cycleWay: 0,
    thisSelectMusic: {},
    musicListArr: [],
    playingMusic: {
      index: 0,
      music: {
        musicId: 19999,
        musicName: '绅士',
        singerName: '薛之谦',
        ademName: '绅士',
        // eslint-disable-next-line import/no-unresolved
        musicSrc: require('@/assets/music/薛之谦 - 绅士.mp3'),
        // url: '@/assets/music/薛之谦 - 绅士.mp3',
        // eslint-disable-next-line import/no-unresolved
        ademImgSrc: require('@/assets/adem/绅士.jpg')
      } // cover: '@/assets/adem/绅士.jpg',  
    },
    proBarLen: 0,
    Vol:50
  },
  getters: {},
  mutations: {
    ShowPlayingMusicList: (state) => {
      state.onOff.isShowPlayingMusicList = !(state.onOff.isShowPlayingMusicList)
    },
    changeMPShow: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.onOff.ishidden = !(state.onOff.ishidden);
    },
    changeCycleWay: (state) => {
      if (state.cycleWay < 1) {
        state.cycleWay++
      } else {
        state.cycleWay = 0
      }
    },
    changeisShowMS: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.onOff.isShowMS = !(state.onOff.isShowMS);
    },
    playMusic(state) {
      if (state.onOff.isPlay) {
        // eslint-disable-next-line no-param-reassign
        state.onOff.isPlay = !(state.onOff.isPlay);
      } else {
        // eslint-disable-next-line no-param-reassign
        state.onOff.isPlay = !(state.onOff.isPlay);
      }
    },
  },
  actions: {

  },
});
