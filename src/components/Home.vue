<template>

  <div class="container-fluid home">
    <Header> </Header>
    <Banner class="banner-comp"></Banner>


    <TrendingMovies data-aos="fade-up"   data-aos-duration="1000"
 dataType="umovies" ></TrendingMovies>

    <TrendingMovies data-aos="fade-up"  data-aos-duration="1000"
  dataType="nowplaying"  ></TrendingMovies>
  <!--  <TrendingMovies dataType="tmovies" ></TrendingMovies>-->
    <TrendingMovies data-aos="fade-up"   data-aos-duration="1000"
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
import 'aos/dist/aos.css'


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

  }
}
</script>

<style >


.home{
  padding:0px;
}

@media only screen and (max-width:768px){
  .banner-comp{
    display:none;
  }
}


</style>
