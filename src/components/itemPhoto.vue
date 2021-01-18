<template>
<div >
  <img :src="this.photo.url" class="photo" @click="openSlider">
    

</div>
</template>

<script>

export default {
  name: "ItemPhoto",
  components: {

  },
   data() {
    return {

    }
  },
  props:['photo'],

}

</script>

<style lang="sass" >
.photo-container
    display: flex
    flex-wrap: wrap
.photo
  width: 100px
  height: 100px
  margin: 10px
  border-radius:10px
  object-fit: cover
  cursor: pointer



@media screen and (min-width: 768px)  
  .photo
    width: 250px
    height: 250px
@media screen and (min-width: 1024px)  
  .photo
    transition: all .3s ease-in-out 
    &:hover
      width: 260px
      height: 256px
</style>