<template>

  <div class="container">

    <Banner></Banner>

    <TrendingMovies dataType="umovies" ></TrendingMovies>

    <TrendingMovies dataType="nowplaying" ></TrendingMovies>
  <!--  <TrendingMovies dataType="tmovies" ></TrendingMovies>-->
    <TrendingMovies dataType="toprated" ></TrendingMovies>

  </div>

</template>

<script>

import TrendingMovies from './TrendingMovies'
import axios from 'axios'
import Banner from './Banner'


export default {
  name: 'Home',
  components:{
    TrendingMovies,
    Banner
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

.container{
  height:100%;
  width:100%;
}


</style>
