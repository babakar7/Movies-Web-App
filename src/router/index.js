import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from'@/components/Movie'

Vue.use(Router)

 const router =  new Router({

  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/movie/:id/:type',
      name: 'movie',
      component: Movie,

    },

    {
    path: '*',
    redirect: '/'

    }

  ],

  scrollBehavior (to, from, savedPosition) {
return { x: 0, y: 0 }
},



})


router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
      // Start the route progress bar.
      setTimeout(()=>{
        next()
      }, 250)

      NProgress.start()
      NProgress.inc();
      NProgress.inc(0.5);

})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
