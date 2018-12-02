import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({

state:{

  apiKey: "164f91a00bb33839a1cc01e1302cd1d0",
  apiRAT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRmOTFhMDBiYjMzODM5YTFjYzAxZTEzMDJjZDFkMCIsInN1YiI6IjVjMDJjZmZiYzNhMzY4NjViYzBhMDM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVfiwYDkvj3S065Lpxib5JTDpM0fDZkMrSsIq1qPbZw",
  //trendingMovies: null,
  upcomingMovies:null,
  nowPlaying: null,
  topRated:null,
  config: null
},

mutations: {

//  setTrendingMovies(state, trendingMovies){
//    state.trendingMovies = trendingMovies
  //},

  setConfig(state, config){
    state.config = config
  },

  setUpcomingMovies(state, upcomingMovies){
    state.upcomingMovies = upcomingMovies
  },

  setNowPlaying(state, nowPlaying){
    state.nowPlaying = nowPlaying
  },

  setTopRated(state, topRated){
    state.topRated = topRated
  },

  setLatest(state, latestMovies){

    state.latestMovies = latestMovies
  }

 },

 actions:{

   getConfig(context){

     axios.get(`https://api.themoviedb.org/3/configuration?api_key=${context.state.apiKey}`)
       .then((res)=>{

           context.commit('setConfig', res.data.images)
       })
       .catch((err)=>{
         console.log(err)
       })
   },



   getUmovies(context){
     // get upcoming movies
     axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${context.state.apiKey}`)
       .then((res)=>{

         context.commit('setUpcomingMovies', res.data.results)

         })
       .catch((err)=>{
         console.log(err)
       })

   },

   getNowPlaying(context){
     // get moviies playing now
     axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${context.state.apiKey}`)
       .then((res)=>{

         context.commit('setNowPlaying', res.data.results)

         })
       .catch((err)=>{
         console.log(err)
       })

   },

   getTopRated(context){
     // get moviies playing now
     axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${context.state.apiKey}`)
       .then((res)=>{

         context.commit('setTopRated', res.data.results)

         })
       .catch((err)=>{
         console.log(err)
       })
   },



 }


})
