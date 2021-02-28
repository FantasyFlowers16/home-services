<template>
<div class="photo-container">
  <img :src="photo.url" class="photo" v-on:click="openSlider(photo.id)">
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
  methods: {
    openSlider(x){
      console.log(x)
       this.$emit('clickItem', x);
    }
  },
  props:['photo'],

}

</script>

<style lang="sass" >

.photo
  width: calc(100% - 20px)
  height: auto
  margin: 10px
  border-radius: 10px
  object-fit: cover
  cursor: pointer
  max-width: 450px



@media screen and (min-width: 768px)  
  .photo
    width: 250px
    height: 250px
    max-width: none

@media screen and (min-width: 1024px)  
  .photo
    transition: all .3s ease-in-out 
    &:hover
      width: 260px
      height: 256px
</style>