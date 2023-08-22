import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e651779 = () => interopDefault(import('../pages/book.vue' /* webpackChunkName: "pages/book" */))
const _02965f3c = () => interopDefault(import('../pages/book/index.vue' /* webpackChunkName: "pages/book/index" */))
const _08173ca4 = () => interopDefault(import('../pages/book/search.vue' /* webpackChunkName: "pages/book/search" */))
const _0856723b = () => interopDefault(import('../pages/book/edit/_id.vue' /* webpackChunkName: "pages/book/edit/_id" */))
const _75d92efa = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _6fe7aa1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/book",
    component: _5e651779,
    children: [{
      path: "",
      component: _02965f3c,
      name: "book"
    }, {
      path: "search",
      component: _08173ca4,
      name: "book-search"
    }, {
      path: "edit/:id?",
      component: _0856723b,
      name: "book-edit-id"
    }]
  }, {
    path: "/inspire",
    component: _75d92efa,
    name: "inspire"
  }, {
    path: "/",
    component: _6fe7aa1c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
