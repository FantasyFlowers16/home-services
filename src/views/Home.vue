<template>
  <div class="main-container">
    <div class="main-banner">
      <div class="main-banner__background"></div>
      <div class="main-banner__title">Все для ВАШЕГО дома</div>
    </div>
    <div class="menu">
      <div class="main-background"></div>

<!--      <div class="menu__item-container">-->
<!--       <router-link to="/news"  class="menu__item">-->
<!--         <div>Новости</div>-->
<!--        <div></div>-->

<!--       </router-link>-->
<!--        <router-link to="/photo" class="menu__item">Фото дома</router-link>-->
<!--      </div>-->
<!--      <div class="menu__item-container">-->
<!--        <router-link to="/ads" class="menu__item">Объявления</router-link>-->
<!--        <router-link to="/room" class="menu__item"> Квартиры в продаже</router-link>-->
<!--      </div>-->
<!--&lt;!&ndash;      <div class="menu__item-container">&ndash;&gt;-->
<!--&lt;!&ndash;        <router-link to="/ads" class="menu__item">Объявления</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        <router-link to="/counter" class="menu__item"> Показания счетчиков</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--      <div class="menu__item-container">-->
<!--        <router-link to="/counter" class="menu__item"> Показания счетчиков</router-link>-->
<!--      </div>-->

    </div>
    <div class="main-item-container">
      <div class="main-item">

        <div class="main-item__point">Узнать все новости вашего микрорайона</div>

        <router-link to="/news" >
          <div class="main-item__img img-news"></div>
        </router-link>
        <div class="main-item__line"></div>
      </div>
      <div class="main-item">
        <div class="main-item__point">Какие квартиры в продаже?</div>
        <router-link to="/room">
          <div class="main-item__img img-rooms"></div>
        </router-link>
        <div class="main-item__line"></div>
      </div>
      <div class="main-item">
        <div class="main-item__point">Актуальные объявления и вопросы</div>
        <router-link to="/ads">
          <div class="main-item__img img-ads"></div>
        </router-link>
        <div class="main-item__line"></div>
      </div>
      <div class="main-item">
        <div class="main-item__point">Отсавить показания счетчиков</div>
        <router-link to="/counter">
          <div class="main-item__img img-counter"></div>
        </router-link>
        <div class="main-item__line"></div>
      </div>
      <div class="main-item">
        <div class="main-item__point">Посмотреть фото дома</div>
        <router-link to="/photo">
          <div class="main-item__img img-gallery"></div>
        </router-link>

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
.main-container
  margin-bottom: 30px

.main-banner
  position: relative
  width: 100%
  height: 200px
  &__background
    background-size: cover
    background-repeat: no-repeat
    height: 100%
    position: absolute
    top: 0
    right: 0
    width: calc(100% + 40px)
    opacity: 0.7
    background-image: url("../assets/banner.jpg")
    box-shadow: 20px -18px 8px 2px #ececec inset
  &__title
    text-shadow: 1px 1px 2px black, 0 0 1em black
    position: relative
    padding-top: 70px
    color: white
    font-size: 26px
    font-weight: bold
    text-align: center

.main-item
  display: flex
  flex-direction: column
  align-items: center
  padding: 0 10px
  &__point
    font-size: 20px
    font-weight: bold
    text-align: center

  &__img
    box-shadow: 0px 0px 8px 2px #ededed inset
    background: white
    padding: 10px
    min-width: 90px
    min-height: 90px
    border-radius: 45px
    position: relative
    cursor: pointer
    margin-top: 5px
    transition: min-width .3s ease, min-height .3s ease,border-radius .3s ease,background .3s ease
    &:hover
      background: #cad6e2
      min-width: 100px
      min-height: 100px
      border-radius: 50px
      transition: min-width .2s ease, min-height .2s ease,border-radius .2s ease,background .2s ease
    &:before
      left: calc(50% - 25px)
      top: calc(50% - 25px)
      position: absolute
      content: ''
      display: block
      width: 50px
      height: 50px
      background-repeat: no-repeat
      background-size: cover
    &.img-news
      &:before
        background-image: url("../assets/icon/news.svg")
    &.img-rooms
      &:before
        background-image: url("../assets/icon/rooms.svg")
    &.img-ads
      &:before
        background-image: url("../assets/icon/billboard.svg")
    &.img-counter
      &:before
        background-image: url("../assets/icon/counter.svg")
    &.img-gallery
      &:before
        background-image: url("../assets/icon/gallery.svg")
  &__line
    border-radius: 4px
    width: 4px
    height: 100px
    background: rgb(209,238,174)
    margin-top: 10px
    background: radial-gradient(circle, #838689 6%, #c7e1ed 100%)
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
  .main-banner
    height: 400px
    &__title
      padding-top: 150px
      font-size: 47px
  .main-item
    padding: 0 20px
    &__point
      font-size: 30px
    &__img
      padding: 20px
      min-width: 170px
      min-height: 170px
      border-radius: 85px
      margin-top: 10px
      &:hover
        background: #cad6e2
        min-width: 185px
        min-height: 185px
        border-radius: 95px
      &:before
        left: calc(50% - 50px)
        top: calc(50% - 50px)
        width: 100px
        height: 100px
    &__line
      width: 4px
      height: 150px
      background: rgb(209,238,174)
      margin-top: 10px
      background: radial-gradient(circle, #838689 6%, #c7e1ed 100%)
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
@media screen and (min-width: 1024px)
  .main-container
    margin-bottom: 60px
  .main-banner
    height: 500px
    &__title
      padding-top: 170px
      font-size: 50px
  .main-item
    &__img
      min-width: 190px
      min-height: 190px
      border-radius: 95px
      margin-top: 25px
    &__line
      height: 250px
      margin-top: 20px
  .menu
    &__item
      margin-top: 36px
      &:nth-child(2n)
        margin-left: 36px
@media screen and (min-width: 1440px)
  .main-container
    margin-bottom: 60px
  .main-banner
    height: 650px
    margin-bottom: 40px
    &__title
      padding-top: 250px
      font-size: 60px
  .main-item-container
    max-width: 1920px
    margin: 0 auto
    display: flex
    flex-wrap: wrap
  .main-item
    width: 50%
    &:last-child
      width: 100%
    &:nth-child(3)
      .main-item__line
        transform: rotate(-45deg)
        margin-left: 200px
    &:nth-child(4)
      .main-item__line
        transform: rotate(45deg)
        margin-right: 200px
    &__line
      width: 6px
    &__img
      min-width: 230px
      min-height: 230px
      border-radius: 115px
      margin-top: 25px
      &:hover
        min-width: 240px
        min-height: 240px
        border-radius: 120px
    &__line
      margin-top: 20px

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

@media screen and (min-width: 1920px)
  .main-banner
    height: 750px
    margin-bottom: 40px
    &__title
      padding-top: 350px
      font-size: 75px
</style>
