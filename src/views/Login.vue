<template>
  <div>
      <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="user.email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="user.password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"Login",
    data() {
        return {
           user:{
               email:'',
               password:''
           }
        }
    },
    methods: {
            ...mapActions("user",["loginUser"]),
                login(){
                    this.loginUser(this.user)
                }
         
    },

}
</script>

<style>

</style>
