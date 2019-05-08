import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      // 主页
      path: '/',
      name: 'home',
      // eslint-disable-next-line import/no-unresolved
      component: () => import('@/views/Home.vue'),
      redirect: 'index',
      children: [
        {
          // 音乐馆
          path: 'index',
          name: 'index',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/index.vue'),
        },
        {
          // 我的音乐
          path: 'myMusic',
          name: 'myMusic',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/myMusic.vue'),
        },
        {
          // 发现
          path: 'discover',
          name: 'discover',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/discover.vue'),
        },
        {
          // 歌手列表
          path: 'songerList',
          name: 'songerList',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/songerList.vue'),

        },
        {
          // 专辑歌曲列表
          path: 'ademSong',
          name: 'ademSong',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/ademSong.vue'),
        },
        {
          // 歌手页
          path: 'singer',
          name: 'singer',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/singer.vue'),
        },
        {
          // 今日推荐
          path: 'todayMusic',
          name: 'todayMusic',
          // eslint-disable-next-line import/no-unresolved
          component: () => import('@/views/todayMusic.vue'),
        },
      ],
    },
  ],
});
