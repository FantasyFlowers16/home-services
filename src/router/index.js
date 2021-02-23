import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from '../views/FreeRoom.vue'
import Photo from '../views/PhotoPage.vue'
import Chat from '../views/Chat.vue'
import Layout from '../layout/MainLayout'
import ADS from '../views/ads'
import About from '../views/About'
import Admin from '../views/Admin'
import Counter from "@/views/Counter";


Vue.use(VueRouter);

const routes = [
  {path: "", name: "Layout", component: Layout,
    children: [
      {path: '/ads', name: 'ADS', component: ADS},
      {path: '/news', name: 'News', component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')},
      {path: '/room', name: 'Room', component: Room},
      {path: '/photo', name: 'Photo', component:Photo},
      {path: '/chat', name: 'Chat', component:Chat},
      {path: '/counter', name: 'Counter', component:Counter},
      {path: '/about', name: 'About', component:About},
      {path: '/admin', name: 'Admin', component: Admin},
      {path: '/', name: 'Home', component: Home}
         ]
  }
  // {path: "", name: "EmptyLayout", component: EmptyLayout,
  //   children: [
  //     {path: '', name: 'Home', component: Home}
  //   ]
  // },

];

const router = new VueRouter({
  mode: 'history',
  routes,

});

export default router;
