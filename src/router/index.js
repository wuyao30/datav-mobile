import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'login' },
    component: () => import('@/views/login/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/public',
    children: [
      {
        path: 'public',
        name: 'Public',
        meta: { title: '公众报表' },
        component: () => import('@/components/public/Public')
      },
      {
        path: 'company',
        name: 'Company',
        meta: { title: '政企报表' },
        component: () => import('@/components/company/index')
      },
      {
        path: 'school',
        name: 'School',
        meta: { title: '校园报表' },
        component: () => import('@/components/school/index')
      },
      {
        path: 'mine',
        name: 'mine',
        meta: { title: '我的' },
        component: () => import('@/views/mine/Mine')
      }
    ]
  },
  {
    path: '/conversion',
    name: 'Conversion',
    meta: { title: '电商转化率' },
    component: () => import('@/components/commerce/conversion-rate/index')
  },
  {
    path: '/thatDay',
    name: 'thatDay',
    meta: { title: '电商当日发展' },
    component: () => import('@/components/commerce/thatDay/ThatDay')
  },
  {
    path: '/monthDev',
    name: 'monthDevPublic',
    meta: { title: '公众当月发展' },
    component: () => import('@/components/public/index')
  },
  {
    path: '/dayDev',
    name: 'DayDev',
    meta: {
      title: '大公众日发展报表'
    },
    component: () => import('@/components/public/DayDev')
  },
  {
    path: '/5g',
    name: '5g',
    mata: { title: '5G登网记录' },
    component: () => import('@/views/5g/5g')
  },
  {
    path: '/phonePackage',
    name: 'phonePackage',
    meta: {
      title: '高套佣金'
    },
    component: () => import('@/views/phonePackage/PhonePackage')
  },
  {
    path: '/channelPhonePackage',
    name: 'channelPhonePackage',
    meta: {
      title: '渠道高套佣金明细'
    },
    component: () => import('@/views/phonePackage/ChannelPhonePackage')
  },
  {
    path: '/password',
    name: 'Password',
    meta: {
      title: '修改密码'
    },
    component: () => import('@/views/mine/Password')
  }
]

const router = new VueRouter({
  routes
})

export default router
