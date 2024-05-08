// profile
// import profilePage from '../pages/profile/ProfilePage.vue'
// import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Secure from '../views/dashboard/secure.vue'

//import Product from '../views/Product.vue'

import NotFound from '../views/NotFound.vue'

//import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../env'

export const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: `${DOMAIN_TITLE} | Welcome` }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: `${DOMAIN_TITLE} | Login` }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { title: `${DOMAIN_TITLE} | About Us` }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { title: `${DOMAIN_TITLE} | Register` }
    },
    {
        path: '/dashboard/secure',
        name: 'secure',
        component: Secure,
        meta: { isAuth: true, title: `${DOMAIN_TITLE} | Secure ` }
    },
    // {
    //     path: '/product/:id',
    //     name: 'Product',
    //     component: Product,
    //     meta: { title: `${DOMAIN_TITLE} | Product` },
    //     props: true
    // },

    // {
    //   path: '/news',
    //   name: 'news',
    //   component: newsPage,
    //   meta: { title: `${DOMAIN_TITLE} | news` },
    //   props: routePropResolver
    // },


    // {
    //   path: '/profile',
    //   component: profilePage,
    //   meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
    //   children: [
    //     {
    //       path: '',
    //       name: 'profile',
    //       component: profilePostsPage
    //     }
    //   ]
    // },
    {
        path: '*',
        component: NotFound,
        meta: { title: `${DOMAIN_TITLE} | not found` }
    }
]