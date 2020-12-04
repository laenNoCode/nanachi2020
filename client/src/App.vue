<template>
  <div id="app">
    <home :language="language" v-on:toggle="togglemenu()" v-if="page=='home'"/>
    <profile :language="language" @edit="page='edit'" v-on:toggle="togglemenu()" v-if="page=='profile'"/>
    <edit :language="language" v-if="page=='edit'" @toggle="togglemenu()"/>
  <not_impostor v-if="page=='not_impostor'"/>
    <menut :language="language" v-if="menutoggled" @close="closemenu()" @home="page='home'; closemenu()"  @profile="page='profile';closemenu()" @beaches="page='beaches';closemenu()"/>
    
  </div>
</template>

<script>
import home from './components/home.vue'
import menut from "./components/menut"
import profile from "./components/profile"
import not_impostor from "./components/not_impostor"
import edit from "./components/profil_edit"
export default {
  name: 'App',
  methods:{
  togglemenu(){
      this.menutoggled = true
    },
  closemenu(){
      this.menutoggled = false
    }
  },
  data:function(){
    return {menutoggled:false,
    page:"home",
    language:"FR  "}
  },
  components: {
    home,menut,profile,not_impostor, edit
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
