<template>
  <div class="b-about">
    <h1 class="b-about__title">О нас</h1>
    <div class="b-about-container">
      <div class="b-about__text">
        Основанная в 1992 году, сегодня компания Home Services является крупнейшим широкопрофильным дистрибьютором на российском рынке. Компания успешно развивает такие сегменты дистрибуции, как: компьютерная, цифровая и бытовая техника, канцелярские принадлежности, офисная мебель, подарки для бизнеса. Кроме этого, особое внимание уделяется развитию VAD дистрибуции – как оборудования, так и программного обеспечения.

        <br>Репутация надежного, ответственного и опытного партнера, всегда выполняющего свои обязательства, позволила компании MERLION построить прочные отношения с большинством ведущих мировых производителей – в портфеле компании MERLION свыше 920 брендов.
        <img src="../assets/about.jpg" class="b-about__text-img">
        Более 400 прямых дистрибьюторских соглашений. Партнерская сеть Home Services насчитывает более 8700 компаний во всех регионах России и странах СНГ. Офисы продаж находятся в Москве, Самаре, Санкт-Петербурге, Нижнем Новгороде, Екатеринбурге, Новосибирске, Ростове-на-Дону.
        <br>Многолетний опыт, инновационные технологии, внимательность к трендам и забота о своих клиентах — слагаемые успеха, компании, который можно измерить в цифрах.
         Home Services сегодня — это тысячи профессионалов, которые развивают национальный дистрибуторский рынок в нескольких сегментах и делают высокотехнологичные продукты доступными для каждого жителя России.
        <br>Сотрудничая со знаковыми архитектурными бюро, ГК «Инград» строит жилые кварталы с помещениями для коммерческой инфраструктуры на первых этажах, подземными паркингами и линейными парковками, детскими садами, школами и приватными дворами. Каждый проект имеет свое лицо и имя, в каждом — уникальный подход к архитектуре, дизайну общественных зон, инженерным и планировочным решениям, благоустройству территории.
      </div>

    </div>

    <div class="b-about-container">
      <h2>Наши сотрудники</h2>
      <div class="b-about__photo-container">
        <div class="b-about__photo-item">
          <img src="../assets/photo-person/photo1.jpg" class="b-about__img">
          <div class="b-about__text-container">
            <div class="b-about__status">Директор</div>
            <div class="b-about__fio">Пологов Игорь Валентинович</div>
          </div>
        </div>

        <div class="b-about__photo-item">
          <img src="../assets/photo-person/photo2.jpg" class="b-about__img">
          <div class="b-about__text-container">
            <div class="b-about__status">Бухгалтер</div>
            <div class="b-about__fio">Гончарова Наталья Валерьевна</div>
          </div>
        </div>
        <div class="b-about__photo-item">
          <img src="../assets/photo-person/photo3.jpg" class="b-about__img">
          <div class="b-about__text-container">
            <div class="b-about__status">Слесарь</div>
            <div class="b-about__fio">Богач Павел Горитович</div>
          </div>
        </div>
        <div class="b-about__photo-item">
          <img src="../assets/photo-person/photo4.jpg" class="b-about__img">
          <div class="b-about__text-container">
            <div class="b-about__status">Уборщица</div>
            <div class="b-about__fio">Гончарова Наталья Валерьевна</div>
          </div>
        </div>

      </div>
    </div>
    <div class="b-about-container">
      <div><span class="b-about__bold"> Адрес:</span> ул.Аркадия Иванова, дом 56</div>
      <div><span  class="b-about__bold"> Телефон:</span> 45-23-56</div>
    </div>
  </div>
</template>
<style lang="sass">

.b-about
  margin: 30px
  &__title
    padding: 10px 0
  &__photo-item
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 50px
  &__img
    max-height: 400px
    width: 100%
    overflow: hidden
    object-fit: cover
    border-radius: 30px
  &__text-img
    margin: 10px 0
    width: 100%
    height: 130px
    object-fit: cover
    border-radius: 5px
  &__status
    padding-top: 10px
    font-weight: bold
    font-size: 20px
  &__fio
    font-size: 18px
  &__text-container
    display: flex
    flex-direction: column
    align-items: center
  &__bold
    font-weight: bold
    padding-right: 5px
.b-about-container > h2
  margin-bottom: 30px
.b-about-container
  padding: 20px
  background: white
  border-radius: 30px
  opacity: 0.9
  margin-bottom: 30px
@media screen and (min-width: 768px)
  .b-about
    &__text-img
      width: 300px
      height: 150px
      float: right
      margin-left: 10px

    &__photo-container
      display: flex
      flex-wrap: wrap
    &__photo-item
      width: calc(50% - 16px)
      &:nth-child(2n)
        margin-left: 32px

@media screen and (min-width: 1440px)
  .b-about
    &__text
      font-size: 22px
    &__text-img
      width: 500px
      height: 250px
      margin-right: 20px
@media screen and (min-width: 1440px)
  .b-about
    &__photo-item
      margin-left: 32px
      width: calc(25% - 32px)
      max-height: 370px
      &:first-child
        margin-left: 0
@media screen and (min-width: 1920px)
  .b-about
    max-width: 1860px
    margin: 0 auto

</style>
