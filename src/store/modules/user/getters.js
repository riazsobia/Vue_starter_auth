export default {
    currentUser: (state) => {
        return state.user
    },
    isLoggedIn: (state) => {
        return !!state.token // converts token state to boolean.True if it has value and false if it has no value.
    }

}