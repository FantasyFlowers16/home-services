<template>
  <div class="b-room">
    <router-link to="/" class="back" >Назад</router-link>
    <div class="b-room__title">Продаются</div>
    <div class="b-room-item-container">
      <div class="b-room-item" v-for="item in this.rooms" :key="item.id">
        <item-room :data="item"></item-room>
      </div>

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
          metr:'88 000',
          img:'@/assets/rooms/photo.jpg'
        },
        {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остается.',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'12',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'@/assets/rooms/photo.jpg'
        },
        {
          id:2,
          title:'3-x комнатная квартира',
          description:'Продам одинокой грустной девушке славянской внешности.',
          address:'г. Томск, пер. Карпатова 23, 11',
          floor:'1',
          photo:'',
          price:'3 000 000',
          metr:'57 000',
          img:'@/assets/rooms/photo.jpg'
        },
        {
          id:2,
          title:'1-комнатная квартира',
          description:'Квартира для студетов',
          address:'г. Томск, пер. Нечаевский 5, 31. Есть мебльный гарнитур,свежий косметический ремонт',
          floor:'3',
          photo:'',
          price:'1 240 000',
          metr:'67 000',
          img:'@/assets/rooms/photo.jpg'
        },  {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'@/assets/rooms/photo.jpg'
        },  {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'@/assets/rooms/photo.jpg'
        },
        {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'@/assets/rooms/photo.jpg'
        },  {
          id:2,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'@/assets/rooms/photo.jpg'
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

@media screen and (min-width: 768px)
  .b-room-item-container
    display: flex
    flex-wrap: wrap
  .b-room-item
    padding: 10px
    width: 50%
    transition: background .6s
    cursor: pointer
    &:hover
      background: #d9e3d7
      transition: background .4s ease

@media screen and (min-width: 1024px)
  .b-room-item-container
    display: flex
    flex-wrap: wrap
    max-width: 1920px
    margin: 0 auto
  .b-room-item
    padding: 20px
    width: 33%


</style>