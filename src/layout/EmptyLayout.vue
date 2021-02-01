<template>
  <div>
    <header>
      <div class="b-header-container">
        <div class="b-header__log"></div>
      </div>

    </header>
    <router-view />
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>

  </div>




</template>

<script>
import Loader from "@/components/loader";
export default {
  name: "MainLayout",
  components: {
    Loader
  },
  data () {
    return {
      loader:true,
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
  },
  mounted () {
    this.loader = setInterval(this.closeLoader, 1500)

  },
};
</script>

<style lang="sass">

@import '../assets/styles/mixin'
body
  +loader
  background-image: url("../assets/main.png")
.b-header-container
  position: relative
  width: 100%
  height: 60px
  background-color: white
  border-radius: 0 0 15px 15px
  box-shadow: 3px 2px 9px rgba(1, 0, 44, 0.55)
//.b-header
//  &__log
//    background-image: url('../assets/icon/favicon.ico')
</style>