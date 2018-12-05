<template>
  <div id="app">
    <transition name="slide" mode="out-in">

      <router-view/>

    </transition>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  name: 'App',
  created(){
    AOS.init();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-bottom:100px;
}



.slide-enter-active{
animation: slide-in 200ms ease-out ;

}


.slide-leave-active{
  animation: slide-out 200ms ease-out ;


}


@keyframes slide-in{

  from{

    transform: translateY(-30px);
    opacity:0;

  }


  to{
    transform: translateY(0);
    opacity:1;

  }
}




@keyframes slide-out{

  from{

    transform: translateY(0);
    opacity:1;

  }


  to{
    transform: translateY(-30px);
    opacity:0;

  }
}

</style>
