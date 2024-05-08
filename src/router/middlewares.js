import $store from '../store'
//import { mapGetters } from 'vuex'
// import * as authService from '../services/auth.service'

// /**
//  * Current user state initialization
//  * @WARN Must be always first in middleware chain
//  */
// export function initCurrentUserStateMiddleware (to, from, next) {
//   const currentUserId = $store.state.user.currentUser.id

//   if (authService.getRefreshToken() && !currentUserId) {
//     return authService.refreshTokens()
//       .then(() => $store.dispatch('user/getCurrent'))
//       .then(() => next())
//       .catch(error => console.log(error))
//   }
//   next()
// }

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware(to, from, next) {
    //const userId = mapGetters('user', ["currentUser"])
    const userId = $store.getters['user/currentUser'].id
    const isAuthRoute = to.matched.some(item => item.meta.isAuth) //Loop through the routes array and check if the route being accessed has a meta with isAuth

    if (isAuthRoute && userId) return next() //If its an authroute and user id is set in the store. Allow entry
    if (isAuthRoute) return next({ name: 'login' }) //If its just an auth route and no user id is set, redirect to login
    next()
}

export function setPageTitleMiddleware(to, from, next) {
    const pageTitle = to.matched.find(item => item.meta.title)

    if (pageTitle) window.document.title = pageTitle.meta.title
    next()
}