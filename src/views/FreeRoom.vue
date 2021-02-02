<template>
  <div class="b-room">
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>
<!--    <router-link to="/" class="back" >Назад</router-link>-->
    <h1 class="b-room__title">Продаются</h1>
    <div v-if="!this.loader" class="b-room-item-container">
      <div class="b-room-item" v-for="item in this.rooms" :key="item.id">
        <item-room :data="item"></item-room>
      </div>

  </div>
  </div>
</template>

<script>
import itemRoom from "../components/itemRoom";
import Loader from "@/components/loader";
export default {
  name: "FreeRoom",
  components:{
    itemRoom,Loader
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
          img:'../img/photo.2e93fc17.jpg'
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
          img:'../img/photo2.jpg'
        },
        {
          id:3,
          title:'3-x комнатная квартира',
          description:'Продам одинокой грустной девушке славянской внешности.',
          address:'г. Томск, пер. Карпатова 23, 11',
          floor:'1',
          photo:'',
          price:'3 000 000',
          metr:'57 000',
          img:'../img/photo3.jpg'
        },
        {
          id:4,
          title:'1-комнатная квартира',
          description:'Квартира для студетов',
          address:'г. Томск, пер. Нечаевский 5, 31. Есть мебльный гарнитур,свежий косметический ремонт',
          floor:'3',
          photo:'',
          price:'1 240 000',
          metr:'67 000',
          img:'../img/photo4.jpg'
        },  {
          id:5,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'../img/photo5.jpg'
        },  {
          id:6,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'../img/photo6.jpg'
        },
        {
          id:7,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'../img/photo7.jpg'
        },  {
          id:8,
          title:'2-x комнатная квартира',
          description:'Квартира для небольшой семьию Мебель остаетсяю',
          address:'г. Томск, пер. Нечаевский 5, 31',
          floor:'4',
          photo:'',
          price:'2 240 000',
          metr:'78 000',
          img:'../img/photo8.jpg'
        }
      ],
      loader:true,
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    }
  },
  mounted () {
    this.loader = setInterval(this.closeLoader, 1500)

  },
}
</script>

<style lang="sass">
@import '../assets/styles/mixin'
body
  +loader
.b-room
  margin: 16px
  &__title
    margin-top: 20px

    font-weight: bold
.b-room-item
  margin-top: 20px
.room-container
  background: white
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
@media screen and (min-width: 1440px)
  .b-room-item
    width: 25%
  .b-room
    &__title
      margin: 0 auto
      max-width: 1920px
</style>
