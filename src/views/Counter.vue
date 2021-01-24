<template>
  <div class="b-counter">
    <transition name="modal-fade">
      <loader v-if="this.loader" ></loader>
    </transition>
    <modal-message v-if="isModalVisible"  @close="closeModal"></modal-message>
    <router-link to="/" class="back" >Назад</router-link>
    <div class="b-counter__title">Показания счетчиков</div>

    <div class="form-container">
      <div class="title-container">
        <div class="title-item" :class="{active:this.waterHot}" @click="SelectHotWater()">Горячая вода</div>
        <div class="title-item " :class="{active:this.waterCold}" @click="SelectColdWater()">Холодная вода</div>
      </div>
      <form  class="form" v-on:submit.prevent>
        <input class="input" name="fio" v-model="fio"><label for="fio" class="label">ФИО</label>
        <input class="input" name="house" v-model="house"><label for="house" class="label">Дом</label>
        <input class="input" name="room" v-model="room"><label for="room" class="label">Квартира</label>
        <input v-if="this.waterHot" class="input" name="data" v-model="dataHot"> <label v-if="this.waterHot"  for="data" class="label">Ваши показания счетчиков горячей воды</label>
        <input v-if="this.waterCold" class="input" name="data" v-model="dataCold"> <label v-if="this.waterCold" for="data" class="label">Ваши показания счетчиков хол. воды</label>
        <button class="button" @click="OpenModal()" v-on:submit.prevent>Отправить</button>
      </form>

    </div>
  </div>
</template>

<script>

import Loader from "@/components/loader";
import ModalMessage from "@/components/modalMessage";

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
      waterHot: true,
      waterCold:false,
      isModalVisible: false
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
    OpenModal(){
      if(this.fio.length>0&&this.house.length>0&&this.room.length>0){
        this.isModalVisible=true
        this.fio=''
        this.house=''
        this.room=''
      }

    }
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
  border: 1px solid #9ff1a0
  border-radius: 8px 8px 0 0
  overflow: hidden
.title-item
  box-sizing: border-box
  padding: 10px
  width: 50%
  text-align: center
  transition: background .4s ease
  &:first-child
    border-right: 0
  &.active
    transition: background .2s ease
    background: #9ff1a0
.form
  padding: 16px

</style>