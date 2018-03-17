<template>
  <div>



    <router-view id="app">

    </router-view>


    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import axios from 'axios'
  import Tabbar from "./components/tabbar.vue"
  export default {
    name: 'app',
    components:{
      Tabbar
    },
    created () {
      this.$router.push('/shouye')
    }
  }
</script>

<style >
  *{padding: 0;margin: 0;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
