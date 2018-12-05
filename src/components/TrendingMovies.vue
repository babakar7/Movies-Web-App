<template>

  <div class="container-fluid wrapper">

    <h5 class="title">{{title}}</h5>

    <font-awesome-icon id="prev" icon="chevron-left" size="4x" v-on:click="prev()"
    v-bind:style="{color:arrowColor}" class="arrow" />

    <div class="container">

    <transition-group name="fade"  tag="div" class="row rowsize" >

    <TrendingMovie

    v-bind:dataType="dataType"

    v-bind:key="tmovie.id"

     v-for="tmovie in movieArr"

     v-bind:tmovie="tmovie">

    </TrendingMovie>
  </transition-group>

</div>


    <font-awesome-icon id="next" icon="chevron-right" size="4x"  v-on:click="next()"
      v-bind:style="{color:arrowColor}"  class="arrow"/>


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
      arrowColor:"#4776c1"

    }
  },



  methods:{

      prev(){
          if(!this.position.start == 0){
            this.position.start -= 1
            this.position.end -= 1
          } else {
            this.position.start = this.$store.state.upcomingMovies.length - this.position.end
            this.position.end = this.$store.state.upcomingMovies.length
          }

      },

      next(){
        if(this.position.end < this.$store.state.upcomingMovies.length){
          this.position.start += 1
          this.position.end += 1
        } else{
          this.position.start = 0
          this.position.end = this.position.end
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

      // set size of movie slider

      console.log(this.$mq, 'mq')
              switch(this.$mq){

                  case "first":
                    this.position.end = 4
                    break;
                  case "second":
                    this.position.end = 2
                      break;


              }



    }

}


</script>

<style >

.fade-enter-active, .fade-leave-active{
  transition:all 1s;
}

.fade-leave-active{
  position: absolute;

}

@media only screen and (min-width:1200px){

  .rowsize{
    margin: 0px 100px;
  }

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
  margin-top:50px;
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

.arrow{
  opacity:0.8;
}

.arrow:hover{
  opacity:1;
}
</style>
