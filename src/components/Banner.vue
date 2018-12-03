<template>

<div>

<transition name="banner-fade" mode="out-in">

  <div class="banner" v-bind:key="position" v-bind:style="{background:  'linear-gradient( rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4) ), url(' + backImage + ')' }">

    <router-link v-bind:to="{name:'movie', params:{id: currentMovie.id, type:'nowplaying'}}">

      <div class="router-wrap">

    <div class="progress">
      <div class="progress-bar" role="progressbar" v-bind:style="{width: progress}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


    <div class="info" v-if="currentMovie">

      <h1 class="tag"> LATEST</h1>
      <h1 class= "movie-title"> {{currentMovie.title}} </h1>
      <p class="details">

        <font-awesome-icon class="star" icon="star"
        v-bind:style="{color:'white'}"/>
        <span> {{currentMovie.vote_average}} </span>

      </p>

    </div>

  </div>



  </router-link>

  </div>

  </transition>

</div>


</template>

<script>



export default {
  name: 'Banner',

  data () {
    return {

        position:0,
    }

  },

  methods:{

    next(){

    },

    prev(){

    }
  },

  computed:{

    progress(){

      switch(this.position){
        case 0:
          return '20%'
          break;
        case 1:
          return '40%'
            break;
        case 2:
          return '60%'
            break;
          case 3:
            return '80%'
            break;
          case 4:
            return '100%'
              break;
      }
    },

    currentMovie(){

      return this.movies[this.position] ? this.movies[this.position] : 0


    },

      movies(){
        return this.$store.state.nowPlaying? this.$store.state.nowPlaying.slice(0,5) : {}
      },

      backImage(){


        return this.$store.state.config && this.$store.state.nowPlaying ? this.$store.state.config.base_url+
              this.$store.state.config.backdrop_sizes[2] +
              this.currentMovie.backdrop_path : {}
      }


  },

  created(){


      setInterval(()=>{
        this.position < 4 ?  this.position += 1 : this.position = 0
        console.log(this.position)
      }, 5000)

  }

}
</script>

<style scoped>

.banner{
  height:85vh;
  width:100%;
  background-repeat: no-repeat;
  position:relative;
  background-size: auto;
  margin-bottom:150px;
}

.info{
  position:absolute;
  bottom:5%;
  left:5%;
  text-align:left;
  color:white;


}

.tag{
  font-size:22px;
  font-weight:500;
  text-align:left;
  margin-left:0px;
}

.movie-title{
  font-weight:bold;
  font-size:25px;
  text-transform: uppercase;
  text-align:left;
  margin: 0px;
}

.details{
  font-size:18px;
  font-weight:700;
}

.progress{
  height:4px;
}

.progress-bar{
  background-color:#2b5aa5;
}

.router-wrap{
  height:100%;
  width:100%;
}

.banner-fade-enter-active, .fade-leave-active{
  transition:all 0.6s ease;

}

.banner-fade-enter{
  transform:translateX(50px);
}
</style>
