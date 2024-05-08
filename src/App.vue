<template>
  <div>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/about">Login</router-link>
        <span v-if="isLoggedIn"> | <a @click="logoutUser">Logout</a></span>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name:"app",
  data() {
    return {
     
    }
  },
  computed: {
    ...mapGetters('user',["isLoggedIn"])
  },
  methods: {
    ...mapActions('user',["logoutUser"])
    
  },
}
</script>
<style>

</style>
