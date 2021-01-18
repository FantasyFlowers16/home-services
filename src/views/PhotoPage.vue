<template>
<div>
  <router-link to="/" class="back" >Назад</router-link>
  <h1 >Photo:</h1>
  <div v-if="!closeOpenSlider" class="photo-container">
    <div v-for="item in this.photoList" :key="item.id"  >
      <photo-item  :photo="item" @click="openSlider"></photo-item>
    </div>
  </div>
  <div v-if="closeOpenSlider">

    <splide :options="options">
      <splide-slide  v-for="item in this.photoList" :key="item.id" class="slide">
        <img :src="item.url" class="photo-slide">
      </splide-slide>

    </splide>

  </div>
</div>

</template>

<script>
import PhotoItem from "../components/itemPhoto";


export default {
  components: {
    PhotoItem,
  },
  name: "photo-page",
  data () {
    return {
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
      closeOpenSlider: true,
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
    }
  },
  methods:{
    openSlider(){
      this.closeOpenSlider = !this.closeOpenSlider
    }
  }
}
</script>

<style lang="sass">

.slide
  width: 400px
  height: auto
  display: flex!important
  align-items: center!important
  justify-content: center!important
.photo-slide
  width: 600px
  display: flex
  align-items: center
  height: 400px
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