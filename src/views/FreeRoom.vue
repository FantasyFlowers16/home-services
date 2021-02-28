<template>
  <div class="b-room">
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>
    <transition name="modal-fade">
      <modal-message v-if="isModalVisible"  @close="closeModal"></modal-message>
    </transition>

    <div v-if="this.addForm" >
      <transition name="modal-fade">
        <div class="modal-ads-backdrop">
          <div class="modal-ads">

            <header class="modal-ads-header">
              <slot name="header">
                <button
                    type="button"
                    class="modal-ads-btn-close"
                    @click="close"
                >
                  x
                </button>
              </slot>
            </header>
            <section class="modal-body">
              <slot name="body">
                <form  class="form" v-on:submit.prevent>
                  <input class="input" name="fio" v-model="fio"><label for="fio" class="label">Ваша ФИО</label>
                  <input class="input" name="title" v-model="title"><label for="title" class="label">Заголовок объявления</label>
                  <input class="input" name="text" v-model="description"><label for="description" class="label">Описание объекта</label>
                  <input class="input" name="text" v-model="address"><label for="address" class="label">Адрес</label>
                  <input class="input" name="floor" v-model="floor"><label for="floor" class="label">Этаж</label>
                  <input class="input" name="price" v-model="price"><label for="price" class="label">Цена</label>
                  <input class="input" name="priceMetr" v-model="metr"><label for="metr" class="label">Цена за м2</label>
                  <div v-if="validForm" class="form-container__error">Заполните все поля</div>
                  <button class="button" @click="OpenModal()" v-on:submit.prevent>Отправить</button>
                </form>
              </slot>
            </section>
          </div>
        </div>
      </transition>
    </div>
<!--    <router-link to="/" class="back" >Назад</router-link>-->
    <h1 class="b-room__title">Продаются</h1>
    <button class="b-room__add desktop" @click="openAddForm">Добавить свое объявление</button>
    <button class="b-room__add mobile" @click="openAddForm">+</button>
    <div v-if="!this.loader" class="b-room-item-container">
      <div class="b-room-item" v-for="item in this.roomsList" :key="item.id">
        <item-room :data="item"></item-room>
      </div>

  </div>
  </div>
</template>

<script>
import itemRoom from "../components/item-room";
import Loader from "@/components/loader";
import ModalMessage from "@/components/modal-message";
import db from "@/firebaseinit";
import firebase from "firebase";
// import firebase from "firebase";
export default {
  name: "FreeRoom",
  components:{
    itemRoom,Loader,ModalMessage
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
      title:'',
      address:'',
      description:'',
      floor:'',
      price:'',
      metr:'',
      fio:'',
      validForm:false,
      roomsList:[],
      loader:true,
      addForm:false,
      countAds:0,
      isModalVisible:false
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
    openAddForm(){
      this.addForm=true
    },
    closeModal() {
      this.isModalVisible = false;
    },
    sendDataRoom(){

        let ListAds = db.collection("rooms").doc("BcPBB7lozTbXU6qiyJ1o");
        let newCountId = this.countAds + 1
        let newRoom = {
          id: newCountId,
          title: this.title,
          moderate: false,
          description: this.description,
          floor: this.floor,
          price: this.price,
          metr: this.metr,
          address:this.address,
          img: 'https://clck.ru/TUHjw'
        }
      console.log(newRoom)
        return ListAds.update({
          rooms: firebase.firestore.FieldValue.arrayUnion(newRoom)

        })
            .then(() => {
              console.log(2)
              //Modall Succsess
              ListAds.update({
                CountId: firebase.firestore.FieldValue.increment(1)
              });

            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
    },
    OpenModal(){
      if(this.fio.length>0&&this.title.length>0&&this.description.length>0&&this.floor.length>0&&this.price.length>0&&this.metr.length>0&&this.address.length>0){
        this.isModalVisible=true
        this.sendDataRoom()
        this.addForm=false
        this.fio=''
        this.description=''
        this.title=''
        this.floor=''
        this.price=''
        this.metr=''
        this.validForm=false

      }else{
        this.validForm=true

      }
    },
    close() {
      this.addForm=false
    },
    getDataRooms(){

      db.collection('rooms').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{

          doc.data().rooms.forEach(item=>{
            this.countAds+=1
            const data={
              address:item.address,
              description:item.description,
              moderate:item.moderate,
              floor:item.floor,
              id:item.id,
              img:item.img,
              metr:item.metr,
              price:item.price,
              title:item.title
            }
            this.roomsList.push(data)
          })
        })
      })
    },
    getCountId(){
      db.collection('rooms').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{
          this.countAds = doc.data().CountId
        })
      })
    }
  },
  created() {
    this.getDataRooms()
    this.getCountId()
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
  &__add
    position: absolute
    display: block
    top: 40px
    right: 30px
    border: none
    box-shadow: 2px 2px 5px #808080
    padding: 10px 20px
    border-radius: 10px
    border-radius: 10px
    &.desktop
      display: none
    &.mobile
      font-size: 20px
      font-weight: bold
      right: 15px
      top: 80px
      padding: 4px 12px
.b-room-item
  margin-top: 20px
.room-container
  background: white
@media screen and (min-width: 768px)
  .b-room
    &__add
      &.desktop
        display: block
        top: 80px
      &.mobile
        display: none
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
