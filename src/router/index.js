import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Header" */ '../views/Home.vue'),
    redirect: 'test',
    children: [
      // 这里放页面
      {
        path: '/test',
        name: 'Test',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/Test.vue')
      },
      {
        path: '/test2',
        name: 'Test2',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/Test2.vue')
      },


    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
