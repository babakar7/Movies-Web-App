<template>

  <div class="nav">

<router-link to="/">

  <span class="homelink"> MoviePhile</span>

</router-link>

      <div class="searchbar">

        <form  v-on:submit.prevent="onSubmit" >

          <input type="text" class="form-control search-field"  v-model="query" aria-describedby="search" placeholder="Search movies...">

          <!--<button type="submit" class="btn submit-btn">Submit</button>-->
        </form>

      </div>
  </div>
</template>


<script>

  export default {
    name:'Header',
    data(){
      return {

        query:null

      }
    },

    methods:{
      onSubmit(){

        if(this.query){

          this.$emit('submission')
          this.$router.push({name:'results', query: { search: this.query }})

        }

      }
    }
  }

</script>


<style scoped>
.nav{
  padding: 20px 0px;
  position:relative;
}

.submit-btn{
  display:inline-block;
}

.search-field{
  display:inline-block;
  width:35%;
  border-radius:20px;
  font-size:14px;
}

.searchbar{
  width:100%
}

.homelink{
  color:white;
  cursor:pointer;
  font-size:25px;
  font-weight:500;
  display:inline-block;
  position:absolute;
  left:50px;
  font-weight: bold;


}

</style>
