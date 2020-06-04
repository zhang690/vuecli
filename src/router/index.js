import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Login = () => import('@/components/Login')
const HomePage = () => import('@/components/HomePage')
const StudyPage = () => import('@/components/StudyPage')
const MyPage = () => import('@/components/MyPage')
const H5Pay = () => import('@/components/H5Pay')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'H5Pay',
      component: H5Pay
    },
    
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/studyPage',
      name: 'StudyPage',
      component: StudyPage,
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component: MyPage,
    }

  ]
})
