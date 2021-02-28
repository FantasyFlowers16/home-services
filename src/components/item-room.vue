<template>
  <div class="room-container" v-if="this.data.moderate" >
    <div class="room-item">
      <div class="room-item__title">{{this.data.title}}</div>
      <div class="room-item__address">{{this.data.address}}</div>
      <div class="room-item__photo-container">
<!--        <img src="../assets/rooms/photo.jpg" class="room-item__photo">-->
        <img :src=this.data.img class="room-item__photo">
      </div>
      <div class="room-item__price">{{this.data.price}}<span> рублей</span></div>
      <div class="room-item__price-metr">{{this.data.metr}}<span> м<sup>2</sup></span></div>
      <div class="room-item__description">{{this.data.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],

}
</script>

<style lang="sass">

.room-item
  padding: 15px
  border-radius: 6px
  box-shadow: 0px 10px 24px 0 rgba(0,0,0,0.18)
  &__title
    font-size: 15px
    font-weight: bold
    line-height: 15px
    padding-bottom: 8px
  &__address
    font-size: 12px
    line-height: 12px
    color: gray
    padding-bottom: 8px
  &__photo-container
    border-radius: 6px
    width: 100%
    height: 100%
    position: relative
    padding-top: 80%
    overflow: hidden
  &__photo
    height: 100%
    object-fit: cover
    width: 100%
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
  &__price
    padding-bottom: 8px
    font-weight: bold
    font-size: 16px
  &__price-metr
    color: lightgrey
    font-size: 14px
  &__description
    font-size: 14px
</style>