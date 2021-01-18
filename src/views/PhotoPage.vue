<template>
<div>
  <router-link to="/" class="back" >Назад</router-link>
  <h1 @click="openSlider()">Photo:</h1>
  <div class="photo-container">
    <div v-for="item in this.photoList" :key="item.id"  >
      <photo-item :photo="item" ></photo-item>
    </div>
  </div>
  <div v-if="closeOpenSlider">
    <div class="rielt-history-slider history-slider">
      <swiper class="history-slider__inner"   :options="swiperOption">
        <swiper-slide  class="history-slider__item" v-for="photo in photoList" :key="photo.id">
          <img :src="photo.url"  class="history-slider__img">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</div>

</template>

<script>
import PhotoItem from "../components/itemPhoto";
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    PhotoItem,
    swiper,
    swiperSlide
  },
  name: "photo-page",
  data () {
    return {
      closeOpenSlider: false,
      photoList:[
          {
            url:"https://is.gd/xNetps",
            id:1
          },
          {
            url:"https://is.gd/6ISirt",
            id:3
          },
          {
            url:"https://is.gd/iEPxwm",
            id:4
          },{
            url:"https://is.gd/v8WtTv",
            id:5
          },{
            url:"https://is.gd/y87P2w",
            id:6
          },{
            url:"https://is.gd/NjTZsr",
            id:7
          },{
            url:"https://is.gd/Rx7SPg",
            id:8
          },
        {
          url:"https://is.gd/xNetps",
          id:9
        },
        {
          url:"https://is.gd/6ISirt",
          id:10
        },
        {
          url:"https://is.gd/iEPxwm",
          id:11
        },{
          url:"https://is.gd/v8WtTv",
          id:12
        },{
          url:"https://is.gd/y87P2w",
          id:13
        },{
          url:"https://is.gd/NjTZsr",
          id:14
        },{
          url:"https://is.gd/Rx7SPg",
          id:15
        }




      ],
      swiperOption:{
        loop: false,
        spaceBetweenSlides: 50,
        slidesPerView: 'auto',
      },
    }
  },
  methods:{
    openSlider(){
      this.closeOpenSlider=!this.closeOpenSlider
    }
  }
}
</script>

<style lang="sass">

.back
  text-decoration: none
  color: black
  text-align: left
  padding-top: 20px
  padding-left: 40px
  position: relative
  cursor: pointer
  display: block
  &:before
    content: ''
    display: block
    position: absolute
    background-image: url('../assets/arrow.png')
    background-size: cover
    width: 16px
    height: 12px
    left: 10px

</style>