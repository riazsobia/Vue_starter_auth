export default {
    SET_USER(state, user) {
        state.user = user
    },
    AUTH_REQUEST: (state) => {
        state.status = "loading"
    },
    AUTH_SUCCESS: (state, { token, user }) => {
        state.status = "Success"
        state.token = token
        state.user = user
        state.isLoggedIn = true
    },
    AUTH_ERROR: (state) => {
        state.status = 'error'
    },
    LOGOUT: (state) => {
        state.status = ''
        state.token = ''
    }
}