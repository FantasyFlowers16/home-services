<template>
  <div>
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>
    <div class="b-ads">
  <transition name="modal-fade">
    <modal-message v-if="isModalVisible"  @close="closeModal"></modal-message>
  </transition>

    <div v-if="this.addForm" >
      <transition name="modal-fade">
        <div class="modal-ads-backdrop">
          <div class="modal-ads">
            <section class="modal-body">
              <button
                  type="button"
                  class="modal-ads-btn-close"
                  @click="close"
              >
                x
              </button>
              <slot name="body">
                <form  class="form" v-on:submit.prevent>
                  <input class="input" name="fio" v-model="fio"><label for="fio" class="label">ФИО</label>
                  <input class="input" name="house" v-model="title"><label for="title" class="label">Заголовок объявления</label>
                  <input class="input" name="room" v-model="text"><label for="text" class="label">Полный текст объявления</label>
                  <div v-if="validForm" class="form-container__error">Заполните все поля</div>
                  <button class="button" @click="OpenModal()" v-on:submit.prevent>Отправить</button>
                </form>
              </slot>
            </section>
          </div>
        </div>
      </transition>
    </div>
  <div v-if="!this.loader">

    <h1 class="b-ads__title">Объявления</h1>
    <button class="b-ads__add desktop " @click="openAddForm">Добавить свое объявление</button>
    <button class="b-ads__add mobile" @click="openAddForm">+</button>

    <div class="b-ads__wrapper">
      <div class="b-ads__item-container" v-for="item in this.adsLists" :key="item.id">
        <div class="b-ads__item" :class="{warn: item.isWarn}" v-if="item.moderate" >
          <div class="b-ads__title">{{item.title}}</div>
          <div class="b-ads__text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>

</div>
  </div>

</template>

<script>
import Loader from "@/components/loader";
import db from "@/firebaseinit";
import ModalMessage from "@/components/modal-message";
import firebase from "firebase";

export default {
  name: "ads-admin",
  components: {Loader,ModalMessage},

  data(){
    return{
      isModalVisible:false,
      adsLists:[],
      title: '',
      text :'',
      fio:'',
      adsListTest:[
        {
          id:'1',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99',
          isWarn:false,
          moderate:true
        },
        {
          id:'2',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53',
          isWarn:false,
          moderate:true
        },
        {
          id:'3',
          title:'23.02 c 15:00-20:00 Произойдет отключение горячего водоснабжения',
          text:'В эту среду ориентировочно с 15:00-20:00 ' +
              'Приносим свои извенения за неудобства',
          isWarn:true,
          moderate:false
        },
        {
          id:'4',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает какой-то информацией просьба звонить по номеру 8-267-334-59-21',
          isWarn:false,
          moderate:true
        },
        {
          id:'5',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89',
          warn:false,
          moderate:false
        },
        {
          id:'6',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99',
          warn:false,
          moderate:true
        },
        {
          id:'7',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53',
          warn:false,
          moderate:true
        },
        {
          id:'8',
          title:'Найден попугай',
          text:'Постоянно говорит "Кеша хочет кушать. ' +
              'Красивый ярко-красный окрас. Хозяева-отзовитесь. Тел. 76-88-80',
          warn:false,
          moderate:false
        },
        {
          id:'9',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает како-то информацией просьба звонить по номеру 8-267-334-59-21',
          warn:false,
          moderate:true
        },
        {
          id:'10',
          title:'Собрание жильцов',
          text:'12.05 во дворе дома Нечаева 36 будет проходить общедомовое собрание. Всех' +
              ' жильов просьба явиться с вопросами и предложеними.',
          isWarn:true,
          moderate:true
        },
        {
          id:'11',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89',
          isWarn:false,
          moderate:true
        },
      ],
      loader:true,
      addForm:false,
      validForm:false,
      countAds: 0
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
    closeModal() {
      this.isModalVisible = false;
    },
    close() {
      this.addForm=false
    },
    openAddForm(){
      this.addForm=true
    },
    OpenModal(){
      if(this.fio.length>0&&this.text.length>0&&this.title.length>0){
        this.sendDataAds()
        this.isModalVisible=true
        this.addForm=false
        this.fio=''
        this.text=''
        this.title=''
        this.validForm=false
      }else{
        this.validForm=true

      }
    },
    sendDataAds(){
        let ListAds = db.collection("ads").doc("olH7NHHUrWOJP35mk88b");
        let newCountId=this.countAds+1
        let  newAds = {
          id:newCountId,
          title:this.title,
          text:this.text,
          isWarn:false,
          moderate:false
        }
      return ListAds.update({
          adsList: firebase.firestore.FieldValue.arrayUnion(newAds)

        })
            .then(() => {
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
    getDataAds(){

      db.collection('ads').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{

          doc.data().adsList.forEach(item=>{
            this.countAds+=1
            const data={
              id:item.id,
              title:item.title,
              text:item.text,
              isWarn:item.isWarn,
              moderate:item.moderate
            }
            this.adsLists.push(data)
          })
        })
      })
    },
    getCountId(){
      db.collection('ads').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{

          this.countAds = doc.data().CountId

        })
      })
    }
  },
  mounted () {
    this.loader = setInterval(this.closeLoader, 1500)

  },
  created() {
    this.getDataAds()
    this.getCountId()
  },
}

</script>

<style lang="sass">
@import '../assets/styles/mixin'
body
  +loader
.b-ads
  position: relative
  margin: 6px 16px 0 16px
  &__wrapper
    display: flex
    flex-wrap: wrap
  &__item-container
      //margin-left: 30px
  &__title
    margin-top: 20px
    font-weight: bold
  &__add
    position: absolute
    display: block
    top: 20px
    right: 30px
    border: none
    -webkit-box-shadow: 2px 2px 5px #808080
    -moz-box-shadow: 2px 2px 5px #808080
    box-shadow: 2px 2px 5px #808080
    padding: 10px 20px
    border-radius: 10px
    transition: background .3s ease,color .3s ease
    &.mobile
      font-size: 20px
      font-weight: bold
      right: 10px
      top: 30px
      padding: 4px 12px
    &.desktop
      display: none
    &:hover
      transition: background .2s ease,color .2s ease
      background: #275975
      color: white

  &__item
    margin-top: 20px
    background-color: #f9f6f6
    padding: 16px
    position: relative
    -webkit-box-shadow: 2px 2px 5px #808080
    -moz-box-shadow: 2px 2px 5px #808080
    box-shadow: 2px 2px 5px #808080
    &.warn
      box-shadow: 1px 1px 9px #d93838

    &:before
      content: ""
      position: absolute
      top: 0
      right: 0
      width: 0px
      height: 0px
      border-bottom: 30px solid #eee
      border-left: 30px solid #ffffff00
      transform: scale(-1, 1)
      -webkit-box-shadow: 7px 7px 7px rgba(0,0,0,0.3)
      -moz-box-shadow: 7px 7px 7px rgba(0,0,0,0.3)
      box-shadow: 7px 7px 7px rgba(0,0,0,0.3)
.modal-ads
  opacity: 1
  margin: 100px auto
  width: 100%

  &-backdrop
    position: fixed
    top: 0
    left: 0
    z-index: 1040
    width: 100vw
    height: 100vh
    background-color: #9d9999
    opacity: 0.95
  &-btn-close
    position: absolute
    right: 18px
    background: white
    border: none
    color: green
    border-radius: 10px
    padding: 4px 16px
  &-header
    display: flex
    align-items: flex-end
    justify-content: flex-end
    padding: 1rem 1rem
    border-bottom: 1px solid #dee2e6
    border-top-left-radius: calc(0.3rem - 1px)
    border-top-right-radius: calc(0.3rem - 1px)
@media screen and (min-width: 768px)
  .b-ads
    &__item
      height: 100%
    &__item-container
      margin-bottom: 30px
      width: calc(50% - 16px)
      &:nth-child(2n)
        margin-left: 32px
    &__add
      position: absolute
      display: block
      top: 20px
      right: 30px
      &.mobile
        display: none
      &.desktop
        display: block
  .modal-ads
    width: 70%
    max-width: 768px
@media screen and (min-width: 1440px)
  .b-ads
    padding: 0 40px
    max-width: 1920px
    margin: 0 auto
    &__item-container
      margin-right: 20px
      width: calc(25% - 15px)
      &:nth-child(2n)
        margin-left: 0px
      &:nth-child(4n)
        margin-right: 0

</style>
