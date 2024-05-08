import axios from 'axios'
import $router from '../../../router'
export default {
    loginUser: (context, user) => {
        context.commit('AUTH_REQUEST')
        axios.post('login', user)
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                context.commit('AUTH_SUCCESS', { token, user })

            })
            .then(() => { $router.push('/') })
            .catch(err => {
                    console.log(err);
                    context.commit('AUTH_ERROR')
                    localStorage.removeItem('token')
                },


            )
    },
    registerUser: (context, user) => {
        context.commit('AUTH_REQUEST')
        axios.post('register', user)
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                context.commit('AUTH_SUCCESS', { token, user })

            })
            .then(() => { $router.push('/') })
            .catch(err => {
                console.log(err);
                context.commit('AUTH_ERROR')
                localStorage.removeItem('token')


            })
    },
    logoutUser: (context) => {
        context.commit('LOGOUT')
            .then(() => {
                $router.push('/login')
            })
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
    }

}