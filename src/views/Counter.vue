<template>
  <div class="b-counter">
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>
    <transition name="modal-fade">
      <modal-message v-if="isModalVisible"  @close="closeModal"></modal-message>
    </transition>
<!--    <router-link to="/" class="back" >Назад</router-link>-->
    <div class="b-counter__title">Показания счетчиков</div>

    <div class="form-container">
      <div class="title-container">
        <div class="title-item" :class="{active:this.waterHot}" @click="SelectHotWater()">Горячая вода</div>
        <div class="title-item " :class="{active:this.waterCold}" @click="SelectColdWater()">Холодная вода</div>
      </div>
      <form  class="form" v-on:submit.prevent>
        <input class="input" name="fio" v-model="fio"><label for="fio" class="label">ФИО</label>
        <input class="input" name="street" v-model="street"><label for="street" class="label">Улица/проспет</label>
        <input class="input" name="house" v-model="house"><label for="house" class="label">Дом</label>
        <input class="input" name="room" v-model="room"><label for="room" class="label">Квартира</label>
        <input v-if="this.waterHot" class="input" name="data" v-model="dataHot"> <label v-if="this.waterHot"  for="data" class="label">Ваши показания счетчиков горячей воды</label>
        <input v-if="this.waterCold" class="input" name="data" v-model="dataCold"> <label v-if="this.waterCold" for="data" class="label">Ваши показания счетчиков хол. воды</label>
        <div v-if="validForm" class="form-container__error">Заполните все поля</div>
        <button class="button" @click="sendDataCounter()" v-on:submit.prevent>Отправить</button>

      </form>

    </div>
  </div>
</template>

<script>

import Loader from "@/components/loader";
import ModalMessage from "@/components/modal-message";
import db from "@/firebaseinit";
import firebase from "firebase";

export default {
  name: "Counter",
  components: {
    Loader,ModalMessage
    // PhotoItem,
  },
  data () {
    return {
      fio:'',
      house:'',
      loader:true,
      room:'',
      dataHot:'',
      dataCold:'',
      street:'',
      waterHot: true,
      waterCold:false,
      isModalVisible: false,
      validForm:false,
      countCounter:0
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
    SelectHotWater(){
      this.waterHot=true
      this.waterCold=false
    },
    SelectColdWater(){
      this.waterHot=false
      this.waterCold=true
    },
    closeModal() {
      this.isModalVisible = false;
    },
    sendDataCounter(){
      let ListCounter = db.collection("counter").doc("4ZwmsUtEeIjQ5YIbvUYJ");
      console.log(ListCounter)
      let  newCounter = {
        id:this.countCounter,
        fio:this.fio,
        street:this.street,
        house:this.house,
        room:this.room,
        dataHot:this.dataHot,
        dataCold:this.dataCold
      }
      return ListCounter.update({
        counterList: firebase.firestore.FieldValue.arrayUnion(newCounter)

      })
          .then(() => {
            //Modall Succsess
            this.OpenModal()
            ListCounter.update({
              CountId: firebase.firestore.FieldValue.increment(1)
            });

          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },
    OpenModal(){
      console.log("hi")
      if(this.fio.length>0&&this.house.length>0&&this.room.length>0&&this.street.length>0){
        this.isModalVisible=true
        this.fio=''
        this.street=''
        this.house=''
        this.room=''
        this.validForm=false
      }else{
        this.validForm=true
      }

    },
    getCountId(){
      db.collection('counter').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{
          this.countCounter = doc.data().CountId
        })
      })
    }
  },

  created() {
    this.getCountId()
  },
  mounted () {
    this.loader = setInterval(this.closeLoader, 1500)

  },

}
</script>

<style lang="sass">
@import '../assets/styles/mixin'
@import '../assets/styles/controls'
body
  +loader
.b-counter
  padding: 16px
  &__title
    padding-top: 16px
    padding-bottom: 16px
    font-size: 23px
    font-weight: bold
    text-align: left
.title-container
  display: flex

  border-radius: 8px 8px 0 0
  overflow: hidden
.title-item
  box-sizing: border-box
  padding: 10px
  width: 50%
  text-align: center
  transition: background .4s ease
  background-color: #ccdeea
  cursor: pointer
  &:first-child
    border-right: 0
  &.active
    cursor: inherit
    transition: background .2s ease
    background: white
.form
  padding: 16px
  background-color: white
.form-container
  max-width: 450px
  margin: 20px auto
  &__error
    padding-top: 20px
    color: red
.button
  margin: 40px auto 10px auto
  min-width: 100%
  background: #ccdeea
  border: none

@media screen and (min-width: 768px)
  .form-container
    margin-top: 40px
@media screen and (min-width: 1280px)
  .form-container
    max-width: 650px
    margin: 70px auto
  .button
    min-width: 100%
  .b-counter
    max-width: 1920px
    margin: 0 auto
</style>
