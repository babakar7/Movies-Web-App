<template>

  <div  class="card" v-bind:style="{backgroundImage:'url('+posterPath+')'}">

    <div class="rating">
      <font-awesome-icon class="star" icon="star"
      v-bind:style="{color:'white'}"/>

    <span class="rating-num">{{tmovie.vote_average}}</span>

    </div>

      <router-link  v-if="dataType" v-bind:to="{name:'movie', params:{id: tmovie.id, type:dataType}}">

        <div class="link-wrap">

        </div>

      </router-link>


      <router-link  v-if="!dataType" v-bind:to="{name:'movie', params:{id: tmovie.id}}">

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
  position:relative;
  margin-bottom:10px;

}

.card:hover{
  transition: opacity 0.5s;
  transition: transform 0.5s;


  opacity:1;
  transform:scale(1.15)
}

.link-wrap{
height:100%;
width:100%;
}


.rating{
  position:absolute;
  left:0;
  top:5px;
  background-color: rgba(0, 0, 0, 0.8);
  display:flex;
  padding: 0 5px 0px 5px;
  opacity:0.8;
}

.star{
  height:12px;
  width:12px;
  margin-right:10px;
  margin-top:2px;

}

.rating-num{
  font-size:13px;
  font-weight:bold;
}

</style>
