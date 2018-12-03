<template>

<div class="footer">

<div class="details" >

  <h1>MoviePhile</h1>

  <h4 class="name">By Babakar Diop</h4>



</div>
<img  class="tmd-img" src="../assets/tmd.png"/>

</div>
</template>


<script>

  export default {
    name:'Footer',
    data(){
      return {


      }
    },

    methods:{

    }
  }

</script>


<style scoped>
.tmd-img{

  transform:scale(0.8);
  position:absolute;
  right:10%;
  opacity:0.7;
  top:30%;


}

.details{
  opacity:0.8;
  margin-left:50px;
}

.name{
  margin-top:50px;
  font-size:18px;
}

.footer{
  text-align:left;
  position:relative;
  padding: 150px 0px;
}

</style>
