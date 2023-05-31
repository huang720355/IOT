import Vue from 'vue'
import VueRouter from 'vue-router'
import  store  from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Header" */ '../views/Home.vue'),
    redirect: 'indexMain',
    children: [
      // 这里放页面
      {
        path: '/indexMain',
        name: 'IndexMain',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/IndexMain.vue')
      },
      {
        path: '/test2',
        name: 'Test2',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/Test2.vue')
      },
      {
        path: '/getInformation',
        name: 'GetInformation',
        meta: {
          title: '选卡'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/selfPaymentPage/GetInformation.vue')
      },
      {
        path: '/cardDetail',
        name: 'CardDetail',
        meta: {
          title: '卡详情'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/selfPaymentPage/CardDetail.vue')
      },
      {
        path: '/expenseDetails',
        name: 'ExpenseDetails',
        meta: {
          title: '费用明细'
        },
        component: () => import(/* webpackChunkName: "Header" */ '../views/selfPaymentPage/ExpenseDetails.vue')
      },


    ]
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  //根据不同的跳转页面改变是否显示头部状态，store
  if(to.name=='IndexMain'){
    store.commit('SET_ISHOMEPAGE',false)
  }else{
    store.commit('SET_ISHOMEPAGE',true)
  }
  next(true)
})
export default router
