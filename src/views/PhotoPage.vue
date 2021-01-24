<template>
    <div>
      <transition name="modal-fade">
        <loader v-if="this.loader" ></loader>
      </transition>
      <router-link to="/" class="back" >Назад</router-link>
      <div class="b-photo__title">Photo:</div>
      <div v-if="!closeOpenSlider" class="b-photo-container">
        <div v-for="item in this.photoList" :key="item.id"  >
          <photo-item  :photo="item" @clickItem="openSlider()"></photo-item>
        </div>
      </div>
      <modal-slider v-if="this.modalVisible" @close="closeModal"></modal-slider>
      <div v-if="closeOpenSlider">
      </div>
    </div>
</template>

<script>
import PhotoItem from "../components/itemPhoto";
import ModalSlider from "@/components/modalSlider";
import Loader from "@/components/loader";

export default {
  components: {
    ModalSlider,PhotoItem,Loader
    // PhotoItem,
  },
  name: "photo-page",
  data () {
    return {
      loader:true,
      isActiveLoader: false,
      modalVisible:false,
      photoList:[
        {
          url:"https://is.gd/iEPxwm",
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
      closeOpenSlider: false,
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
    }
  },
  methods:{
    openSlider(){
      this.modalVisible=true
      this.loader=true
      this.openLoader(1500)

    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    openLoader(time){
      this.loader = setInterval(this.closeLoader, time)
    },
    closeLoader(){
      this.loader=false
    }
  },
  mounted () {
      this.loader = setInterval(this.closeLoader, 1500)
    // window.addEventListener('load', () => {
    //   this.isActiveLoader = true
    // })
  },

}
</script>

<style lang="sass">
@import '../assets/styles/mixin'
.b-photo
  &__title
    font-size: 23px
    font-weight: bold
body
  +loader

.b-photo-container
  display: flex
  flex-wrap: wrap
.modal-fade-enter,
.modal-fade-leave-active
  opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active
  transition: opacity .5s ease

.slide
  width: 300px
  height: auto
  display: flex!important
  align-items: center!important
  justify-content: center!important
.photo-slide
  width: 90%
  display: flex
  align-items: center
  height: auto
  object-fit: cover

  //filter: blur(1px)

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
@media screen and (min-width: 768px)
  .slide
    width: 200px
</style>