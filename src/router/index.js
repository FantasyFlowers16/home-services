import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from '../views/FreeRoom.vue'
import Photo from '../views/PhotoPage.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  }
  

];

const router = new VueRouter({
  routes
});

export default router;
