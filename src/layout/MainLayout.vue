<template>
  <div>
    <header>
      <div class="b-header-container">
        <div  class="b-header-container__wrapper">
          <div class="b-header__menu" :class="{ open: menuOpen }">
            <div class="left-menu__close" @click="closeMenu"></div>
            <ul class="left-menu__item-container">
              <router-link to="/" ><li class="left-menu__item" @click="closeMenu">Главная</li></router-link>
              <router-link to="/news" > <li class="left-menu__item" @click="closeMenu">Новости</li></router-link>
              <router-link to="/photo" > <li class="left-menu__item" @click="closeMenu">Фото дома</li></router-link>
              <router-link to="/ads" > <li class="left-menu__item" @click="closeMenu">Объявления</li></router-link>
              <router-link to="/room" > <li class="left-menu__item" @click="closeMenu">Квартиры в продаже</li></router-link>
              <router-link to="/counter" > <li class="left-menu__item" @click="closeMenu">Показания счетчиков</li></router-link>
            </ul>
          </div>

          <div class="b-header__menu-img" @click="openMenu">

          </div>
          <div class="b-header__menu-desktop desktop-menu">
            <router-link to="/" ><div class="desktop-menu__item">Главная</div></router-link>
            <router-link to="/news" ><div class="desktop-menu__item">Новости</div></router-link>
            <router-link to="/photo" ><div class="desktop-menu__item">Фото дома</div></router-link>
            <router-link to="/ads" ><div class="desktop-menu__item">Объявления</div></router-link>
            <router-link to="/room" ><div class="desktop-menu__item">Квартиры в продаже</div></router-link>
            <router-link to="/counter" ><div class="desktop-menu__item">Показания счетчиков</div></router-link>
          </div>
        </div>
      </div>

    </header>
    <router-view />
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>

  </div>




</template>

<script>
import Loader from "@/components/loader";
export default {
  name: "MainLayout",
  components: {
    Loader
  },
  data () {
    return {
      loader:true,
      menuOpen:false
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
    openMenu() {
      this.menuOpen=true
    },
    closeMenu(){
      this.menuOpen=false
    }
  },
  mounted () {
    this.loader = setInterval(this.closeLoader, 1500)

  },
};
</script>

<style lang="sass">

@import '../assets/styles/mixin'
body
  +loader
  background-image: url("../assets/main.png")
.router-link-active
  &:hover
    text-decoration: none
.router-link-exact-active
  font-weight: bold
.b-header-container
  position: relative
  width: 100%
  height: 55px
  background-color: #9dc5d6
  border-radius: 0 0 5px 5px
  box-shadow: 3px 2px 9px rgba(1, 0, 44, 0.55)
  &__wrapper
    max-width: 1920px
    margin: 0 auto
  &:before
    content: ''
    width: 116px
    height: 37px
    position: absolute
    background-size: cover
    background-repeat: no-repeat
    background-image: url("../assets/logo.png")
    right: 18px
    top: calc(50% - 18px)
  a
    &:nth-child(2n)
      .left-menu__item
        background-color: #e6fdfb

.left-menu
  &__close
    &:before
    content: ''
    position: absolute
    width: 15px
    height: 15px
    background-size: cover
    background-repeat: no-repeat
    top: 15px
    left: 290px
    background-image: url('../assets/svg/close-cross.svg')
  &__item-container
    padding-top: 10px
    padding-left: 00px
    text-decoration: none
    list-style-type: none
  &__item
    padding-left: 20px
    padding: 10px
    text-decoration: none
    color: black


.b-header
  &__menu
    position: absolute
    width: 320px
    height: 100vh
    background-color: #9dc5d6
    left: -320px
    transition: left .3s ease
    z-index: 100
    &.open
      left: 0
      transition: left .3s ease

  &__menu-img
    background-image: url('../assets/svg/menu.svg')
    position: absolute
    width: 19px
    height: 14px
    background-size: cover
    background-repeat: no-repeat
    margin-top: 20px
    margin-left: 15px
.desktop-menu
  display: none
  align-items: center
  height: 100%
  margin-left: 25px
  a
    &:hover
      text-decoration: none
  &__item
    color: #012d5f
    cursor: pointer
    padding: 15px 20px
    font-weight: bold
    transition: background-color .4s ease,color .4s ease
    &:hover
      transition: background-color .2s ease,color .2s ease
      background-color: #4285af
      color: white
@media screen and (min-width: 1024px)
  .desktop-menu
    display: flex
  .b-header__menu, .b-header__menu-img
    display: none
</style>