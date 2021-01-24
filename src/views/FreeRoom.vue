<template>
  <div class="b-room">
    <router-link to="/" class="back" >Назад</router-link>
    <div class="b-room__title">Продаются</div>
    <div class="b-room-item" v-for="item in this.rooms" :key="item.id">
      <item-room :data="item"></item-room>
    </div>
  </div>

</template>

<script>
import itemRoom from "../components/itemRoom";
export default {
  name: "FreeRoom",
  components:{
    itemRoom
  },
  data(){
    return{
      rooms:[
        {
          id:1,
          title:'3-х комнатная квартира',
          description:'Теплаю и уютная кваритира с видомна ценральную площадь',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'3 400 000',
          metr:'88 000'
        },
        {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.b-room
  margin: 16px
  &__title
    font-size: 23px
    font-weight: bold
.b-room-item
  margin-top: 20px

</style>