<template>
  <div class="b-about">
    <h1 class="b-about__title">О нас</h1>
    <div class="b-about-container">
      <div class="b-about__text">Website.com began in 2005. After years in the web hosting industry, we realized that it
        was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were
        simply too complicated, time consuming, and expensive to manage.

        We created the Website.com Site Builder with the user's perspective in mind. We wanted to offer a platform that
        would require no coding skills or design experience. We keep it simple, so users can focus on creating an
        amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand,
        or start selling products right away.

        After seeing an increased need for ecommerce solutions, we developed one of the only fully-featured, free and
        commission-free online store builders, allowing business owners to launch their online business.

        Today, we're proud to empower individuals and small business owners around the world. Everyone deserves a
        website, and we're excited to see what you create.</div>
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
    &__photo-container
      display: flex
      flex-wrap: wrap
    &__photo-item
      width: calc(50% - 16px)
      &:nth-child(2n)
        margin-left: 32px



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
