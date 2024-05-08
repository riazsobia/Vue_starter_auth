import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

import { checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'

Vue.use(VueRouter)

const router = new VueRouter({
        routes
    })
    //router.beforeEach(initCurrentUserStateMiddleware)
router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)
export default router