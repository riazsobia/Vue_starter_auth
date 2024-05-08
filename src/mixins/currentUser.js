import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters("user", ["currentUser"])
        //return this.$store.state.user.currentUser
    }
}