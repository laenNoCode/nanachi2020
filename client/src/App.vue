<template>
  <div id="app">
    <home :language="language" v-on:toggle="togglemenu()" v-if="page=='home'" @impostor="page='impostor'" @notimp="page='not_impostor'; impostorLang()"/>
    <profile :language="language" @edit="page='edit'" v-on:toggle="togglemenu()" v-if="page=='profile'"/>
    <edit :language="language" v-if="page=='edit'" @toggle="togglemenu()"/>
  <notimpostor v-if="page=='not_impostor'" @lang="setLang" @home="page='home'"/>
    <menut :language="language" @lang="setLang" v-if="menutoggled" @close="closemenu()" @home="page='home'; closemenu()"  @profile="page='profile';closemenu()" @beaches="page='beaches';closemenu()"/>
    
    <impostor @lang="setLang" @home="page='home'" v-if="page=='impostor'"/>
  </div>
</template>

<script>
import home from './components/home.vue'
import menut from "./components/menut"
import profile from "./components/profile"
import notimpostor from "./components/notimpostor"
import edit from "./components/profil_edit"
import impostor from './components/impostor.vue'
export default {
  name: 'App',
  methods:{
  togglemenu(){
      this.menutoggled = true
    },
  closemenu(){
      this.menutoggled = false
    },
  setLang(lang){
    this.language = lang
    
  },
  impostorLang(){
    if (this.language.toUpperCase() == "EN"){
      this.language = "AUS"
    if (this.language.toUpperCase() == "FR")
      this.language = "RF"
    }
  }
  },
  data:function(){
    return {menutoggled:false,
    page:"home",
    language:"FR"}
  },
  components: {
    home,menut,profile,notimpostor, edit,
    impostor
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
