<template>
  <div>
    <div class="menu">
      <div class="main-background"></div>

      <div class="menu__item-container">
        <transition><router-link to="/news"  class="menu__item">Новости</router-link></transition>
        <router-link to="/photo" class="menu__item">Фото дома</router-link>
      </div>
      <div class="menu__item-container">
        <router-link to="/ads" class="menu__item">Объявления</router-link>
        <router-link to="/room" class="menu__item"> Квартиры в продаже</router-link>
      </div>
<!--      <div class="menu__item-container">-->
<!--        <router-link to="/ads" class="menu__item">Объявления</router-link>-->
<!--        <router-link to="/counter" class="menu__item"> Показания счетчиков</router-link>-->
<!--      </div>-->
      <div class="menu__item-container">
        <router-link to="/counter" class="menu__item"> Показания счетчиков</router-link>
      </div>

    </div>
</div>

</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="sass">

.profile
  padding-top: 20px
  z-index: 10
  display: flex
  align-items: center
  &__photo
    width: 40px
    height: 40px
    border-radius: 40px
    background-image: url('../assets/avatar.jpg')
    padding: 10px
    background-size: cover
    background-position: 50% 70%
    background-color: white
  &__name
    margin: 20px
    color: #d3d8e0
    font-weight: bold
.main-background
  opacity: 0.85
  background-size: cover
  //background: url('../assets/news.jpg') no-repeat 55% 20%
  min-width: 320px
  position: absolute
  height: 100%
.menu
  margin-top: 20px
  //background: url('../assets/news.jpg') no-repeat 55% 20%
  display: flex
  flex-wrap: wrap
  &__item-container
    width: 100%
    display: flex
    box-sizing: border-box
    margin: 0 16px
  &__item
    text-align: center
    text-decoration: none
    background: #c0cdd6
    opacity: 0.7
    width: 100%
    color: black
    display: flex
    align-items: center
    justify-content: center
    min-height: 100px
    border-radius: 10px
    margin-top: 10px
    padding: 20px
    box-shadow: 3px 4px 4px rgba(1, 0, 44, 0.55)
    cursor: pointer
    font-weight: bold
    transition: all .2s ease-in
    position: relative

    &:nth-child(2n)
      margin-left: 10px

    &:hover
      text-decoration:  none
      color: black
      background: white
      font-size: 17px
@media screen and (min-width: 768px)
  .profile
    padding: 20px
  .menu
    &__item-container
      justify-content: space-around
      padding: 0 20px
    &__item
      font-size: 24px
      min-height: 130px
      &:hover
        font-size: 25px
      &.big
        max-width: 100%
@media screen and (min-width: 1025px)
  .menu
    &__item
      margin-top: 36px
      &:nth-child(2n)
        margin-left: 36px
@media screen and (min-width: 1440px)

  .menu
    max-width: 1920px
    margin: 0 auto
    &__item
      font-size: 29px
      min-height: 200px
      &:hover
        font-size: 30px
      &:nth-child(2n)
        margin-left: 60px
    &__item-container
      margin: 25px 50px
</style>
