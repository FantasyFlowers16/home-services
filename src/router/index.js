import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from '../views/FreeRoom.vue'
import Photo from '../views/PhotoPage.vue'
import Chat from '../views/Chat.vue'
import Layout from '../layout/MainLayout'
import ADS from '../views/ads'
import Counter from "@/views/Counter";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/ads',
        name: 'ADS',
        component: ADS
      },
      {
        path: '/news',
        name: 'News',
        component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
      },
      {
        path: '/room',
        name: 'Room',
        component: Room
      },
      {
        path: '/photo',
        name: 'Photo',
        component:Photo
      },
      {
        path: '/chat',
        name: 'Chat',
        component:Chat
      },
      {
        path: '/counter',
        name: 'Counter',
        component:Counter
      }
         ]
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
