<template>
  <div class="b-admin__wrapper">
    <div v-if="auth">
      <form class="b-auth-container" @submit.prevent="LoginAdmin">
        <h3>Авторизация</h3>
        <input class="input" name="login" type="email" v-model.trim="email"><label for="login" class="label">Логин</label>
        <input class="input" type="password" name="password" v-model="password"><label for="password" class="label">Пароль</label>

        <button class="b-auth__but  button" type="submit">Войти</button>
      </form>
    </div>
    <div v-else>
      <div class="b-admin__container">
        <div class=" b-admin__menu">
          <div :data="this.adsListItem" class=" b-admin__menu-item " :class="{open:this.menuAds}" @click="menuAds=true;menuRooms=false;menuCounter=false; menuNews=false">Объявления</div>
          <div class=" b-admin__menu-item"  :class="{open:this.menuRooms}" @click="menuAds=false;menuRooms=true;menuCounter=false; menuNews=false">Квартиры в продаже</div>
          <div class=" b-admin__menu-item"  :class="{open:this.menuCounter}" @click="menuAds=false;menuRooms=false;menuCounter=true; menuNews=false">Данные счетчиков</div>
          <div class=" b-admin__menu-item"  :class="{open:this.menuNews}" @click="menuAds=false;menuRooms=false;menuCounter=false;menuNews=true">Новости</div>
        </div>
        <ads v-if="menuAds"></ads>
        <rooms v-if="menuRooms" ></rooms>
        <counter v-if="menuCounter" class="b-admin__counter"></counter>
        <news v-if="menuNews"></news>
      </div>
      <div class="b-admin__container mobile">
        <h5>Данная версия страницы поддеривается с устройства большего разрешения</h5>
        <div class="b-admin__bad"></div>
      </div>
    </div>
  </div>
</template>

<script>

import ads from "../components/ads-admin"
import rooms from "../components/rooms-admin"
import counter from "../components/counter-admin"
import news from "../components/news-admin"


export default {
  components: {
    ads,rooms, counter,news
  },
  data() {
    return {
      menuAds:true,
      menuRooms:false,
      menuCounter:false,
      menuNews:false,
      auth: true,
      email:'',
      password:'',
      adsLists:[],
      adsListItem:[],
    };
  },
  name: "admin",
  methods:{
    async LoginAdmin(){
      const FormData = {
        email:this.email,
        password:this.password
      }
      try{
        await this.$store.dispatch('login', FormData)
        this.auth=false
        console.log("notfail")
      }
      catch (e){
        console.log("fail")
        this.auth=true
      }
    },
  },


};
</script>

<style lang="sass">

.b-auth
  &-container
    background: white
    margin: 150px 20px 20px 20px
    padding: 20px
    display: flex
    flex-direction: column
    box-shadow: 2px 2px 20px 1px

  &__input
    margin-bottom: 40px
    border: none
    font-size: 20px
.b-admin
  &__wrapper
    max-width: 1920px
    margin: 0 auto
  &__bad
    background-image: url('../assets/bad.png')
    background-size: cover
    width: 100px
    height: 100px
    margin: 50px auto
  &__container
    background: #e4ebf3
    padding-bottom: 30px
    margin: 60px 20px 0 20px
    border-radius: 20px
    box-shadow: 0px 10px 24px 0 rgb(0 0 0 / 18%)
    min-height: 400px
    display: none!important
    &.mobile
      padding: 20px
      text-align: center
      display: block!important
  &__counter
    padding: 10px 30px
  &__menu
    display: flex
    background: #9dc5d6
    border-radius:   10px 10px 0 0
  &__menu-item
    padding: 10px
    color: #012d5f
    &:first-child
      border-radius: 10px 0 0 0
    &.open
      background:  #e4ebf3

.b-ads
  display: flex
  &__but-container
    display: flex
  &-moderate
    width: 50%
  &-no-moderate
    width: 50%
  &__container
    margin: 10px
    padding: 15px
    border: 1px solid grey
    border-radius: 10px

  &__container2
    background: #f99797
    border: 1px solid grey
    border-radius: 10px
    padding: 0px 15px  10px 15px
    margin: 10px
.button
  box-sizing: border-box
  &.green
    color: white
    background: green
    min-width: 40%
    margin: 10px
  &.red
    color: white
    background: darkred
    min-width: 40%
    margin: 10px
@media screen and (min-width: 768px)
  .b-admin
    &__container
      display: block!important
      &.mobile
        display: none!important
  .b-auth
    &-container
      max-width: 500px
      margin: 100px auto
</style>