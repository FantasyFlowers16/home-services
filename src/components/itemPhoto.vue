<template>
<div>
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
  width: 100px
  height: 100px
  margin: 10px
  border-radius: 10px
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