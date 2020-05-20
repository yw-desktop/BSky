import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import reg from '../components/reg.vue'
import top from '../views/top.vue'
import rd_detail from '../components/rd_detail.vue'
import collection from '../components/collection.vue'
import audio from '../components/audio.vue'
import nvedio from '../components/nvedio.vue'
import cartoon from '../components/pictury.vue'
import cardl from '../components/cardl'
import v1 from '../components/listvideo'
Vue.use(VueRouter)

const routes = [
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:"/reg",
    component:reg,
    
  },
  {
    path:'/',
    component:top,
    
  },
  {
    path:"/rd_detail",
    component:rd_detail,
    
    beforeEnter:(to,from,next)=>{
      if(sessionStorage.getItem('username')&&sessionStorage.getItem('username')!=='undefined'){

        next()
      }else{
        alert('请登录')
        next({
          path:'/',
        })
      }
    }
  },
  {
    path:"/collection",
    component:collection,
    
  },
  {
    path:"/audio",
    component:audio,
    
  },
  {
    path:"/nvedio",
    component:nvedio,
   
    beforeEnter:(to,from,next)=>{
      if(sessionStorage.getItem('username')&&sessionStorage.getItem('username')!=='undefined'){
        next()
      }else{
        alert('请登录')
        next({
          path:'/',
          
        })
      }
    }
  },
  {
    path:'/cartoon',
    component:cartoon,
    meta:{needlogin:true}
  },
  {
    path:'/cardl',
    component:cardl
  },
  {
    path:'/v1',
    component:v1,
    meta:{needlogin:true},
    beforeEnter:(to,from,next)=>{
      if(sessionStorage.getItem('username')&&sessionStorage.getItem('username')!=='undefined'){

        next()
      }else{
        alert('请登录')
        next({
          path:'/',
        })
      }
    }
  },
  {
    path:'/videolist',
    component:()=>import(/*webpackChunkName: "videolist"*/ '../components/videolist')
  },
  {
    path:'/songlist',
    component:()=>import(/* webpackChunkName:'songlist'*/ '../components/songlist')
  },{
    path:'/manhua',
    component:()=>import(/* webpackChunkName:'songlist'*/ '../components/manhua')
  },
  {
    path:"*",
    component:()=>import(/* webpackChunkName:'songlist'*/ '../components/notdefoned')
  }
  

]

const router = new VueRouter({
  routes,
})

export default router
