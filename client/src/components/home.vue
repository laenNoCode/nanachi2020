<template>
<div class="wrapper">
<div class="title" style="position:absolute;top:18vw;left:9vw;">
    <span style="color: #dafcff">My</span> Wave</div>

    <!--trad.nomdepage["sinscrire"]-->
    <div class="btn" id="sub" style="position:absolute;top:30vw;left:28vw; transform:rotate(2deg)">
       {{trad.signupButton}}</div>

    <div class="btn" style="position:absolute;top:27vw;left:54vw; transform:rotate(-14deg)">
        {{trad.login}}</div>
    
    <div class="btn" @click="togglemenu"
    style="position:absolute;top:22vw;left:76vw; transform:rotate(-7deg)">
        {{trad.menu}}</div>


</div>
</template>

<script>
export default {
  props:["language"],
  data(){
    return{
      emit:{},
      trad:{
        "title":"My Wave",
        "signupButton":"Sub",
        "login":"connection",
        "logout":"Se déconnecter",
        "menu":"Menu",
        "author":"Site par Team Nanachi",
        "beaches":"Plages",
        "home":"Page d'accueuil",
        "profile":"Mon profil"
      }
    }
  },
  methods:{
    togglemenu: function(){
      this.$emit('emit')
    }
  },
  mounted() {
    console.log()
    fetch(this.language + ".json").then((d) =>{d.json().then((data)=>{
      this.trad = data.homePage
    }) })
  }
}
</script>
<style>
  
body{
    margin:0px;
    background-color:#9999FF;
    background-image : url('/BackgroundHome.jpg');
    background-size : 100%;
    background-repeat: no-repeat;
    }

    .title {
        color :#ffffff;
        font-family : "Helvetica";
        font-size : 7.5vw;
    }

    .btn {
        border: none;
        border-radius : 7px;
        background-color: transparent;
        padding: 2px 10px;
        font-size: 4vw;
        font-family: "Helvetica";
        color : #ffffff;
        cursor: pointer;
        display: inline-block;
      }
      
      /* On mouse-over */
      .btn:hover {background:#629bdc3f;}

      .btn:active {border: none;}


      @keyframes up-out {
        0%   {font-size:2px}
        100% {font-size:60px}
      }

      .up-outed {
          animation-name : up-out;
          animation-duration: 4s;
      }

</style>