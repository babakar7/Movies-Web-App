<template>

  <div >

    <Header v-on:submission="newSubmission"></Header>


    <h2 class="search-tag">SEARCH RESULTS FOR {{this.$route.query.search }} </h2>

    <hr class="separator" />

    <transition name="movies" mode="out-in">

    <div class="movies" v-show="movies.results">

    <TrendingMovie

    v-bind:key="movie.id"

     v-for="movie in movies.results"

     v-bind:tmovie="movie">

    </TrendingMovie>

    </div>

  </transition>


<transition name="animation" mode="out-in">
    <div class="animation" v-show="!movies.results">

            <breeding-rhombus-spinner
      :animation-duration="1500"
      :size="80"
      color="#4776c1"
      class="spinner"
      />

    </div>
</transition>


<transition name="results" mode="out-in">

    <div v-show="!dataBack">

        <p class="noresults">
           NO RESULTS FOUND
        </p>

    </div>

  </transition>



  </div>


</template>


<script>
import axios from 'axios'
import TrendingMovie from './TrendingMovie'
import Header from './Header'
import { BreedingRhombusSpinner } from 'epic-spinners'


  export default {
    name:'SearchResults',
    components:{
      TrendingMovie,
      BreedingRhombusSpinner,
      Header
    },
    data(){
      return {
          movies:{},
          dataBack:true
      }
    },

    methods:{
        newSubmission(){
          this.dataBack = true
        }
    },

    created(){

      console.log('created',`https://api.themoviedb.org/3/search/movie?query=${this.$route.query.search}&api_key=${this.$store.state.apiKey}` )
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.$route.query.search}&api_key=${this.$store.state.apiKey}`)
        .then((res)=>{

          setTimeout(()=>{

            this.movies = res.data
            if(res.data.results.length== 0){
              this.dataBack = false
            } else{
              this.dataBack = true
            }

          },1000)
          })
        .catch((err)=>{
          console.log(err)
        })
    },

    beforeRouteUpdate (to, from, next) {



              this.movies = {}

            axios.get(`https://api.themoviedb.org/3/search/movie?query=${to.query.search}&api_key=${this.$store.state.apiKey}`)
              .then((res)=>{
                 setTimeout(()=>{

                   console.log(res.data)
                   this.movies = res.data

                   if(res.data.results.length == 0){
                     this.dataBack = false
                   } else{
                     this.dataBack = true
                   }

                   next()
                 },1000)
                })
              .catch((err)=>{
                console.log(err)
              })
},
  }

</script>


<style scoped>

.movies{
  display:flex;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content:center;
}

.animation{
  position:absolute;
  left:45%;
  top:200px;

}

.spinner{
  margin-left:auto;
  margin-right:auto;
  margin-top:12%;
  opacity:0.9;
}

.noresults{
  margin-top:50px;
  font-weight:bold;
}

.animation-enter-active, .animation-leave-active{
  transition: all 1s;
  left:45%;

}
.animation-enter, .animation-leave-to{
  opacity:0;
}

.results-enter-active, .results-leave-active{
  transition: all 1s;
}

.results-enter, .results-leave-to{
  opacity:0;
}

.search-tag{
  margin-top:30px;
  text-transform:uppercase;

}

.separator{
    margin: 20px 0 50px;
  background-image:radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%);
  border:none;
  height:2px;
}
</style>
