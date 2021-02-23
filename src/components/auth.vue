<template>
  <div>
    <form class="b-auth-container" @submit.prevent="LoginAdmin">
      <label>Логин</label>
      <input class="input" name="login" type="email" v-model.trim="email"><label for="login" class="label">Логин</label>
      <input class="input" type="password" name="password" v-model="password"><label for="password" class="label">Пароль</label>

      <button class="b-auth__but  button" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>


  export default {

    name: "auth",
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      async LoginAdmin(){
        const FormData = {
          email:this.email,
          password:this.password
        }
        try {
          await this.$store.dispatch('login', FormData)
        }
        catch(e) {}
      }
    }

  }
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



</style>