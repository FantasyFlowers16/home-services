<template>
<div class="b-ads">
  <transition name="modal-fade">
    <loader v-if="this.loader" ></loader>
  </transition>
<!--  <router-link to="/" class="back">Назад</router-link>-->
  <div>
    <h1 class="b-ads__title">Объявления</h1>
    <div class="b-ads__item-container">
      <div class="b-ads__item" :class="{warn:item.isWarn}" v-for="item in this.adsList" :key="item.id">
        <div class="b-ads__title">{{item.title}}</div>
        <div class="b-ads__text">{{item.text}}</div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import Loader from "@/components/loader";
export default {
  name: "ads",
  components: {Loader},
  data(){
    return{
      adsList:[
        {
          id:'1',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99',
          isWarn:false
        },
        {
          id:'2',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53',
          isWarn:false
        },
        {
          id:'3',
          title:'23.02 c 15:00-20:00 Произойдет отключение горячего водоснабжения',
          text:'В эту среду ориентировочно с 15:00-20:00 ' +
              'Приносим свои извенения за неудобства',
          isWarn:true
        },
        {
          id:'4',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает како-то информацией просьба звонить по номеру 8-267-334-59-21',
          isWarn:false
        },
        {
          id:'5',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89',
          warn:false
        },
        {
          id:'6',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99',
          warn:false
        },
        {
          id:'7',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53',
          warn:false
        },
        {
          id:'8',
          title:'Найден попугай',
          text:'Постоянно говорит "Кеша хочет кушать. ' +
              'Красивый ярко-красный окрас. Хозяева-отзовитесь. Тел. 76-88-80',
          warn:false
        },
        {
          id:'9',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает како-то информацией просьба звонить по номеру 8-267-334-59-21',
          warn:false
        },
        {
          id:'10',
          title:'Собрание жильцов',
          text:'12.05 во дворе дома Нечаева 36 будет проходить общедомовое собрание. Всех' +
              ' жильов просьба явиться с вопросами и предложеними.',
          isWarn:true
        },
        {
          id:'110',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89',
          isWarn:false
        },
      ],
      loader:true,
    }
  },
  methods:{
    closeLoader(){
      this.loader=false
    },
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
.b-ads
  margin: 6px 16px 0 16px
  &__title
    margin-top: 20px
    font-weight: bold
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
@media screen and (min-width: 768px)
  .b-ads
    &__item-container
      display: flex
      flex-wrap: wrap
    &__item
      width: calc(50% - 16px)
      &:nth-child(2n)
        margin-left: 32px

@media screen and (min-width: 1440px)
  .b-ads
    margin: 6px 80px 0 80px
    &__item
      width: calc(33% - 28px)
      margin-right: 32px
      &:nth-child(2n)
        margin-left: 0
      &:nth-child(3n)
        margin-left: 0
</style>