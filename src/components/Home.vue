<template>

  <div class="container-fluid home">
    <Header> </Header>
    <Banner></Banner>

    <TrendingMovies dataType="umovies" ></TrendingMovies>

    <TrendingMovies dataType="nowplaying" ></TrendingMovies>
  <!--  <TrendingMovies dataType="tmovies" ></TrendingMovies>-->
    <TrendingMovies dataType="toprated" ></TrendingMovies>


    <Footer> </Footer>

  </div>



</template>

<script>

import TrendingMovies from './TrendingMovies'
import axios from 'axios'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'


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

  }
}
</script>

<style >


.home{
  padding:0px;
}



</style>
