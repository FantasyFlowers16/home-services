<template>
<div class="b-ads">
  <router-link to="/" class="back">Назад</router-link>
  <div>
    <div class="b-ads__title">Объявления</div>
    <div class="b-ads__item-container">
      <div class="b-ads__item" v-for="item in this.adsList" :key="item.id">
        <div class="b-ads__title">{{item.title}}</div>
        <div class="b-ads__text">{{item.text}}</div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "ads",
  data(){
    return{
      adsList:[
        {
          id:'1',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99'
        },
        {
          id:'2',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53'
        },
        {
          id:'3',
          title:'Найден попугай',
          text:'Постоянно говорит "Кеша хочет кушать. ' +
              'Красивый ярко-красный окрас. Хозяева-отзовитесь. Тел. 76-88-80'
        },
        {
          id:'4',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает како-то информацией просьба звонить по номеру 8-267-334-59-21'
        },
        {
          id:'5',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89'
        },
        {
          id:'1',
          title:'Пропала собака!',
          text:'Откликается на Динго. ' +
              'Большая белая полоса на спине. Сама бурого цвета. За любую информацию-вознаграждение. Тел. 8-999-99-99-99'
        },
        {
          id:'2',
          title:'Продам гараж',
          text:'Находится в гаражном комплексе ПН-4. Два ключа. ' +
              'Площадь 8м2. Цена договорная. Звоните 8-956-234-34-53'
        },
        {
          id:'3',
          title:'Найден попугай',
          text:'Постоянно говорит "Кеша хочет кушать. ' +
              'Красивый ярко-красный окрас. Хозяева-отзовитесь. Тел. 76-88-80'
        },
        {
          id:'4',
          title:'Потерян поспорт',
          text:'12.05 был потерян паспорт на имя Иванова Ивана Ивановича' +
              'Кто располагает како-то информацией просьба звонить по номеру 8-267-334-59-21'
        },
        {
          id:'5',
          title:'Найдена карта СБ',
          text:'11.05 Нашли карту СБ. Отдадим владельцу при предъявлении паспорта' +
              'Тел. 8-555-257-39-89'
        },
      ]
    }
  }
  }

</script>

<style lang="sass">
.b-ads
  margin: 6px 16px 0 16px
  &__title
    font-size: 23px
    font-weight: bold
  &__item
    margin-top: 20px
    background-color: #f9f6f6
    padding: 16px
    position: relative
    -webkit-box-shadow: 5px 5px 5px rgba(0,0,0,0.8)
    -moz-box-shadow: 5px 5px 5px rgba(0,0,0,0.8)
    box-shadow: 2px 2px 5px rgb(202 177 168)
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
</style>