<template>
  <div>

      <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
          <input id="name" type="text" v-model="registerData.name" required autofocus>
      </div>

      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="registerData.email" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="registerData.password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="registerData.password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"Register",
    data() {
        return {
            registerData:{
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                }
        }
    },

    methods: {
        ...mapActions("user",["registerUser"]),
            register(){
               this.registerUser(this.registerData)
            }
        }

}
</script>

<style>

</style>
