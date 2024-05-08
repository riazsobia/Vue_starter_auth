import axios from 'axios'
import $store from '../store/'

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
})

const token = localStorage.getItem('token')
api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ""; // Ternery operators if token is set means its not empty , set to "Bearer toekn value" else set to empty

//BAdd a request interceptor :before a request is sent
axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor after a request has been semt
axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
            $store.dispatch("user/logoutUser")
            return Promise.reject(error);
        }
    })