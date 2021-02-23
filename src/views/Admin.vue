<template>
  <div>
    <div v-if="auth">
      <form class="b-auth-container" @submit.prevent="LoginAdmin">
        <label>Логин</label>
        <input class="input" name="login" type="email" v-model.trim="email"><label for="login" class="label">Логин</label>
        <input class="input" type="password" name="password" v-model="password"><label for="password" class="label">Пароль</label>

        <button class="b-auth__but  button" type="submit">Войти</button>
      </form>
    </div>
    <div v-else>
      <h3>Объявления</h3>
      <ads></ads>

      <div class="b-rooms"></div>
      <div class="b-news"></div>
      <div class="b-count"></div>
    </div>
  </div>
</template>

<script>

import db from "@/components/firebaseinit";
import ads from "../components/ads-admin"

export default {
  components: {
    ads
  },
  data() {
    return {
      auth: false,
      email:'',
      password:'',
      adsLists:[]
    };
  },
  name: "admin",
  methods:{
    async LoginAdmin(){
      const FormData = {
        email:this.email,
        password:this.password
      }
      try{
        await this.$store.dispatch('login', FormData)
        this.auth=false
      }
      catch (e){ console.log("fail")}
    }
  },
  created() {
    db.collection('ads').get().then
    (querySnapshot=>{
      querySnapshot.forEach(doc=>{

        console.log(doc.data().adsList)
        doc.data().adsList.forEach(item=>{

          // eslint-disable-next-line no-unused-vars
          const data={
            id:item.id,
            title:item.title,
            text:item.text,
            isWarn:item.isWarn
          }
          this.adsLists.push(data)
        })
      })
    })

  },
};
</script>

<style lang="sass">

.b-auth
  &-container
    background: white
    margin: 150px 20px 20px 20px
    padding: 20px
    display: flex
    flex-direction: column
    box-shadow: 2px 2px 20px 1px
  &__input
    margin-bottom: 40px
    border: none
    font-size: 20px

.b-ads
  display: flex
  &__but-container
    display: flex
  &-moderate
    width: 50%
  &-no-moderate
    width: 50%
  &__container
    margin: 10px
    padding: 15px
    border: 1px solid grey
    border-radius: 10px
  &__container2
    background: #f99797
    border: 1px solid grey
    border-radius: 10px
    padding: 15px
    margin: 10px
.button
  box-sizing: border-box
  &.green
    color: white
    background: green
    min-width: 40%
    margin: 10px
  &.red
    color: white
    background: darkred
    min-width: 40%
    margin: 10px
</style>