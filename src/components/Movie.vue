<template>

<div>

  <div class="container-fluid movie">
    <Header> </Header>


    <div class="banner" v-bind:style="{background:'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ), url(' + backImage + ')'}" >

<router-link to="/">
      <font-awesome-icon id="back" icon="chevron-left" size="3x"
          v-bind:style="{color:'white'}" />
</router-link>

    </div>

  </div>

  <div data-aos="fade-up"   data-aos-duration="1000" class="container details-wrapper">

    <div class=" movie-card"  v-bind:style="{background:'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ), url(' + posterImage + ')'}">

    </div>

    <div class="details">

      <h1 class="movie-title">{{movieInfo.title}}</h1>
      <h1 class="released">Released | {{movieInfo.original_language}}</h1>

      <font-awesome-icon class="star" icon="star"
      v-bind:style="{color:'white'}"/>
      <span class="vote">{{movieInfo.vote_average}} </span>

    </div>

    <div class="synopsis">

      <h1 class="tag-synopsis"> SYNOPSIS</h1>
      <p>
        {{movieInfo.overview}}
      </p>

    </div>



  </div>


</div>


</template>

<script>
import axios from 'axios'
import {store} from '@/store/store'
import router from '@/router/index'
import TrendingMovie from './TrendingMovie'

export default {
  name: 'Movie',
  components:{
    TrendingMovie
  },

  data () {
    return {
        movieCredits:{},
        movieInfo:{},
    }
  },

  computed:{
      backImage(){
        return this.$store.state.config  ? this.$store.state.config.base_url+
              this.$store.state.config.backdrop_sizes[2] +
              this.movieInfo.backdrop_path : {}
      },

      posterImage(){
        return this.$store.state.config ? this.$store.state.config.base_url+
              this.$store.state.config.poster_sizes[1] +
              this.movieInfo.poster_path : {}
      }
  },

  created(){
    // get the right movie from the array

    if(this.$route.params.type){
      this.movieInfo =  this.$store.getters.getMovieInfo(this.$route.params)
      axios.get(`https://api.themoviedb.org/3/movie/${this.movieInfo.id}/videos?api_key=${this.$store.state.apiKey}`)
        .then((response)=>{
          console.log(response)
        })

    } else {

      axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${this.$store.state.apiKey}`)
        .then((res)=>{


          this.movieInfo = res.data
              axios.get(`https://api.themoviedb.org/3/movie/${this.movieInfo.id}/videos?api_key=${this.$store.state.apiKey}`)
                .then((response)=>{
                  console.log(response)
                })
          })

        .catch((err)=>{
          console.log(err)
        })
    }






  },

  beforeRouteEnter(to,from, next){

    axios.get(`https://api.themoviedb.org/3/movie/${to.params.id}/credits?api_key=${store.state.apiKey}`)

        .then((res)=>{

          next(vm=>{
            vm.movieCredits = res.data
          })
        })
        .catch((err)=>{
          console.log(err)
        })

  }
}
</script>

<style scoped>

.banner{
  height:90vh;
  width:100%;
  position:relative;
}

.movie{
  padding:0px;
}

.details-wrapper{
  position:relative;
  margin-top:50px;
}

#back{
  position:absolute;
  opacity:0.9;
  left:50px;
  top:20px;
}

.movie-card{
  height:190px;
  width:126px;
  margin-left:20px;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  position:absolute;
  left:0px;
}

.details{
text-align:left;
margin-left:13%;

}

.movie-title{
  font-size:30px;
  font-weight:bold;
}
.released{
  font-size:20px;

}
.vote{
  font-size:20px;

}

.tag-synopsis{

  font-weight:400;
  font-size:25px;
  letter-spacing:5px;

}


.synopsis{
  margin:60px 150px 0px ;
  text-align:left;
}


</style>
