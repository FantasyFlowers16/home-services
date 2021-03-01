<template>
    <div class="b-photo">
      <transition name="modal-fade">
        <loader v-if="this.loader" ></loader>
      </transition>
<!--      <router-link to="/" class="back" >Назад</router-link>-->
      <h1 class="b-photo__title">Photo:</h1>

      <div v-if="!closeOpenSlider && !this.loader " class="b-photo-container">
        <div v-for="item in this.photoList" :key="item.id" class="b-photo-container">
          <photo-item v-if="!closeOpenSlider"  :photo="item" @clickItem="openSlider()"></photo-item>
        </div>
      </div>
      <modal-slider v-if="this.modalVisible" @close="closeModal"></modal-slider>
      <div v-if="closeOpenSlider">
      </div>
    </div>
</template>

<script>
import PhotoItem from "../components/item-photo";
import ModalSlider from "@/components/modal-slider";
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
    font-weight: bold
    padding: 10px
    margin-bottom: 10px
body
  //background-size: cover
  //background: #4CCEB2 /* Для браузеров, которые не поддерживают градиенты */
  //background: -webkit-radial-gradient(#4CCEB2, #2F8FD8) /* Для Opera 11.1 - 12.0 */
  //background: -o-radial-gradient(#4CCEB2, #2F8FD8) /* Для Opera 11.1 - 12.0 */
  //background: -moz-radial-gradient(#4CCEB2, #2F8FD8) /* Для Firefox 3.6 - 15 */
  //background: radial-gradient(#4CCEB2, #2F8FD8) /* Стандартный синтаксис */
  +loader

.b-photo-container
  pointer-events: none
  display: flex
  flex-wrap: wrap
  justify-content: center
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
  .b-photo-container
    pointer-events: inherit
  .slide
    width: 400px

  .b-photo
    max-width: 1920px
    margin: 0 auto
</style>
