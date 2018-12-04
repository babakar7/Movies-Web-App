<template>

  <div class="container-fluid home">
    <Header> </Header>
    <Banner></Banner>



    <TrendingMovies data-aos="fade-up"   data-aos-duration="1000" 
 dataType="umovies" ></TrendingMovies>

    <TrendingMovies data-aos="fade-up"      data-aos-duration="1000"
  dataType="nowplaying"  ></TrendingMovies>
  <!--  <TrendingMovies dataType="tmovies" ></TrendingMovies>-->
    <TrendingMovies data-aos="fade-up"      data-aos-duration="1000"
 dataType="toprated"   ></TrendingMovies>



    <Footer> </Footer>

  </div>



</template>

<script>

import TrendingMovies from './TrendingMovies'
import axios from 'axios'
import Banner from './Banner'
import Header from './Header'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    AOS.init();

  }
}
</script>

<style >


.home{
  padding:0px;
}



</style>
