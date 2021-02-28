<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <section class="modal-body">
              <splide :options="options">
                <splide-slide  v-for="item in this.photoList" :key="item.id" class="slide">
                  <img :src="item.url" class="photo-slide">
<!--                  <div :style="`background: url(${item.url})`" class="photo-slide"></div>-->
                </splide-slide>
              </splide>
            <button
                type="button"
                class="btn-close"
                @click="close"
            >
            </button>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ModalSlider",
  data () {
    return {
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
      closeOpenSlider: false,
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
    }

  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  props:['']
  }
</script>

<style lang="sass"  scoped>
.modal-backdrop
  z-index: 11
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0, 0, 0, 0.5)
  display: flex
  justify-content: center
  align-items: center
  opacity: 1


.modal
  width: 100%
  position: relative
  height: auto
  overflow-x: auto
  display: flex
  flex-direction: column
  justify-content: center
  box-shadow: 0 0 8px 8px white inset
  &:before
    content: ''
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #bdbdbd
    opacity: 0.9


.modal-fade-enter,
.modal-fade-leave-active
  opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active
  transition: opacity .5s ease

.modal-body
  position: relative
  padding: 20px 15px
  text-align: center
  font-size: 18px
  line-height: 28px
  display: flex
  justify-content: center



.btn-close
  background: transparent
  border: none
  font-size: 20px
  cursor: pointer
  font-weight: bold
  display: flex
  align-items: flex-start
  margin-left: 25px
  background-image: url("../assets/svg/close-cross.svg")
  background-size: cover
  width: 20px
  height: 20px


.btn-green
  color: white
  background: #4AAE9B
  border: 1px solid #4AAE9B
  border-radius: 2px


</style>