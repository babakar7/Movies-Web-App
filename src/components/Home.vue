<template>

  <div class="container-fluid home">
    <Header> </Header>
    <Banner></Banner>



    <TrendingMovies dataType="umovies" class="movies"></TrendingMovies>

    <TrendingMovies dataType="nowplaying" class="movies" ></TrendingMovies>
  <!--  <TrendingMovies dataType="tmovies" ></TrendingMovies>-->
    <TrendingMovies dataType="toprated" class="movies" ></TrendingMovies>



    <Footer> </Footer>

  </div>



</template>

<script>

import TrendingMovies from './TrendingMovies'
import axios from 'axios'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import {TweenMax, TimelineLite} from 'gsap/TweenMax'


export default {
  name: 'Home',
  components:{
    TrendingMovies,
    Banner,
    Header,
    Footer
  },
  data () {
    return {

    }
  },

  created(){

      if(!this.$store.state.config) this.$store.dispatch('getConfig')



  },

  mounted(){
    let movies = document.querySelectorAll('.movies')
    TweenMax.from(movies, 2, {opacity:0, y:100, delay:2, ease:Expo.easeOut,})
  }
}
</script>

<style >


.home{
  padding:0px;
}



</style>
