<template>

  <div class="card" v-bind:style="{backgroundImage:'url('+posterPath+')'}">

      <router-link v-bind:to="{name:'movie', params:{id: tmovie.id, type:dataType}}">

        <div class="link-wrap">

        </div>


      </router-link>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'TrendingMovie',
  props:{
    tmovie:{
      type:Object,
      required:true
    },

        dataType:{
          type:String,
          required:true
        }

  },
  data () {
    return {


    }
  },

  computed:{
    posterPath(){

        return this.$store.state.config ? this.$store.state.config.base_url+
              this.$store.state.config.poster_sizes[1] +
              this.tmovie.poster_path : {}

    }

  },

  created(){


  }
}
</script>

<style scoped>


.card{
  height:190px;
  width:126px;
  margin-left:20px;
  display:inline-block;
  border-radius: 5px;
  opacity:0.5;
  background-size: cover;
}

.card:hover{
  transition: all 0.5s;

  opacity:1;
  transform:scale(1.15)
}

.link-wrap{
height:100%;
width:100%;
}


</style>
