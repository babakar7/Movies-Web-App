<template>

  <div class="container-fluid wrapper">



    <h5 class="title">{{title}}</h5>

    <font-awesome-icon id="prev" icon="chevron-left" size="4x" v-on:click="prev()"
    v-bind:style="{color:arrowColor}" />


<transition-group name="fade" >

    <TrendingMovie

    v-bind:key="tmovie.id"

     v-for="tmovie in movieArr"

     v-bind:tmovie="tmovie">

    </TrendingMovie>

  </transition-group>

    <font-awesome-icon id="next" icon="chevron-right" size="4x"  v-on:click="next()"
      v-bind:style="{color:arrowColor}" />


<hr class="separator" />

  </div>

</template>

<script>
import axios from 'axios'
import TrendingMovie from './TrendingMovie'

export default {
  name: 'TrendingMovies',
  components:{
    TrendingMovie
  },
  props:{
      dataType:{
        type:String,
        required:true
      }
  },
  data () {
    return {

      position:{start:0, end:6},
      arrowColor:"#2b5aa5"

    }
  },



  methods:{

      prev(){
          if(!this.position.start == 0){
            this.position.start -= 1
            this.position.end -= 1
          } else {
            this.position.start = this.$store.state.upcomingMovies.length - 6
            this.position.end = this.$store.state.upcomingMovies.length
          }

      },

      next(){
        if(this.position.end < this.$store.state.upcomingMovies.length){
          this.position.start += 1
          this.position.end += 1
        } else{
          this.position.start = 0
          this.position.end = 6
        }
      }

  },

  computed:{

      movieArr(){

        if(this.$store.state.upcomingMovies && this.$store.state.nowPlaying &&
        this.$store.state.topRated){

          switch(this.dataType){

            case "umovies":
                return this.$store.state.upcomingMovies.slice(this.position.start, this.position.end)
                  break;
            case "nowplaying":
                return this.$store.state.nowPlaying.slice(this.position.start, this.position.end)
                   break;

            case "toprated":
              return this.$store.state.topRated.slice(this.position.start, this.position.end)
                break;

          }

        }

      },

      title(){
         switch(this.dataType){

           case "tmovies":
            return "TRENDING"
              break;
            case "umovies":
              return "UPCOMING"
                break;
              case "nowplaying":
              return"NOW PLAYING"
                break;

                case "toprated":
                return"TOP RATED"
                  break;
         }
      }
  },

  created(){


      if(this.dataType == 'tmovies'){
        if(!this.$store.state.trendingMovies) this.$store.dispatch('getTmovies')

      } else if(this.dataType == 'umovies'){
        if(!this.$store.state.trendingMovies) this.$store.dispatch('getUmovies')

      }  else if(this.dataType == 'nowplaying'){
        if(!this.$store.state.nowPlaying) this.$store.dispatch('getNowPlaying')

      } else if(this.dataType == 'toprated'){
        if(!this.$store.state.topRated) this.$store.dispatch('getTopRated')
      }

    }

}


</script>

<style >

.fade-enter-active, .fade-leave-actve{
  transition:all 1s;
}

.fade-leave-active{
  position: absolute;

}

.fade-enter-to, .fade-leave{
  opacity:0.5;
}

.fade-enter, .fade-leave-to{
  opacity:0!important;
  transform:translateY(50px);
}

.fade-move{
  transition: transform 0.3s;
}


.wrapper{
  position:relative;
}

.card:first-child{
margin-left:0px!important;
}


#prev{
  position:absolute;
  top:35%;
  left:8%;
  cursor:pointer;

}

#next{
position:absolute;
top:35%;
right:8%;
cursor:pointer;

}

.title{
  font-size:20px;
  text-align:left;
  margin-left:13%;
}


.separator{
  margin-top:50px;
  background-image:radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%);
  border:none;
  height:2px;
}

</style>
