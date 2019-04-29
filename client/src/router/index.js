import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/Ping';
import Channels from '@/components/Channels';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Channels',
      component: Channels,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
  ],
  mode: 'hash',
});