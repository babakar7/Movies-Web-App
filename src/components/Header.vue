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


.search-field{
  display:inline-block;
  width:40%;
  border-radius:20px;
  font-size:14px;
}

.searchbar{
  display:inline-block;
  vertical-align: top;
  width:75%;


}

.homelink{
  color:white;
  cursor:pointer;
  font-size:25px;
  font-weight:500;
  display:inline-block;
  margin-left: 20px;
  left:50px;
  font-weight: bold;
}


@media only screen and (max-width:768px){

  .search-field{
    margin-right:5%;
  }

  .homelink{
    font-size:18px;

  }


  .searchbar{
    width:60%;
  }



  .search-field{
    display:inline-block;
    width:70%;
    border-radius:20px;
    font-size:14px;
  }

}

</style>
