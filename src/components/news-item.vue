<template>
  <div class="news-item">

    <div class="news-item__title">{{data.title}}</div>
    <div class="news-item__text">{{data.text}}</div>

  </div>

</template>

<script>
export default {
  props: ['data'],
}

</script>

<style lang="sass" >

.news-item
  cursor: pointer
  background: #ccdeea
  z-index: 10
  padding: 5px 10px 15px 10px
  border-radius: 10px
  border: 1px solid cadetblue
  opacity: 0.9
  text-align: left
  transition: all .2s ease-in
  max-height: 195px
  overflow: hidden
  line-height: 23px
  position: relative
  &:hover
    opacity: 1
    background-color: #89b3d4

  &__title
    margin: 10px 0 5px 0
    font-size: 18px
    font-weight: bold
  &__text
    font-size: 15px
    text-overflow: ellipsis
    max-height: 163px
    overflow: hidden
    display: -webkit-box
    -moz-line-clamp: 3
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  &__delete
    display: block
    position: absolute
    top: 12px
    right: 20px
    padding: 5px
    border-radius: 10px
    background: #a72222
    color: white
    cursor: pointer
    box-shadow: 3px 3px 2px 0 rgb(0 0 0 / 35%)
@media screen and (min-width: 768px)
  .news-item
    max-height: 216px
    overflow: hidden
    line-height: 28px
    &__title
      font-size: 22px
    &__text
      font-size: 15px

</style>