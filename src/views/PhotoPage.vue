<template>
    <div>
      <h1 >Photo:</h1>
      <div v-if="!closeOpenSlider" class="photo-container">
        <div v-for="item in this.photoList" :key="item.id"  >
          <photo-item  :photo="item" @clickItem="openSlider()"></photo-item>
        </div>
      </div>
      <modal-slider v-if="this.modalVisible" @close="closeModal"></modal-slider>
      <div v-if="closeOpenSlider">
    <!--    <splide :options="options">-->
    <!--      <splide-slide  v-for="item in this.photoList" :key="item.id" class="slide">-->
    <!--        <img :src="item.url" class="photo-slide">-->
    <!--      </splide-slide>-->
    <!--    </splide>-->

      </div>
      <div v-if="this.isActiveLoader" class="loader"></div>
    </div>


</template>

<script>
import PhotoItem from "../components/itemPhoto";
import ModalSlider from "@/components/modalSlider";

export default {
  components: {
    ModalSlider,PhotoItem
    // PhotoItem,
  },
  name: "photo-page",
  data () {
    return {
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
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isActiveLoader = true
    })
  },
  updated: function () {
    this.$nextTick(function () {
      this.isActiveLoader = false
    })
  }
}
</script>

<style lang="sass">


.loader
  z-index: 100
  position: absolute
  background: grey
  top: 0
  left: 0
  bottom: 0
  right: 0
.slide
  width: 400px
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

</style>