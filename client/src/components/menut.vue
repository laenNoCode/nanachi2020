<template>
    <div id="menut" class="menu-wrapper">
        
    <div class="close" @click="$emit('close')"></div>
     <div class="ship">
    <div class="ship-middle-button" @click="$emit('home')"><br>{{trad.home}}</div>
    <div class="ship-right-button" @click="$emit('profile')"><br>{{trad.profile}}</div>
    <div class="ship-top-button" @click="$emit('beaches')"><br>{{trad.beaches}}</div>
     </div>
    </div>
</template>

<script>
export default {
      props:["language"],
  data(){
    return{
      trad:{
      "home":"Home",
      "beaches":"Beaches",
      "profile":"Profile"
    }
  }
},
mounted() {
    console.log()
    fetch(this.language + ".json").then((d) =>{d.json().then((data)=>{
      this.trad = data.menu
    }) })
}
}
</script>
<style>
.menu-wrapper{
    position: absolute;
    width:90%;
    margin-left: 5%;
    top: 5vh;
    border-radius: 40px;
    height: 90vh;
    background-color: #00000088;
}
.close{
    bottom: 50px;
    left:50px;
    position: absolute;
    height:195px;
    width: 195px;
    background-image: url("/BoutonFermerMenu.png");
}
.ship{
    color:white;
    bottom: 200px;
    left:500px;
    position: absolute;
    height:650px;
    width: 1000px;
    background-image: url("/CarteMenu.png");
}
.ship-middle-button{
    
    font-size:70px;
    position: absolute;
    height:360px;
    width: 540px;
    bottom: 00px;
    left:00px;
}
.ship-right-button{
    font-size:70px;
    position: absolute;
    height:255px;
    width: 365px;
    bottom: 70px;
    left:635px;
}
.ship-top-button{
    font-size:70px;
    position: absolute;
    height:240px;
    width: 350px;
    bottom: 415px;
    left:290px;
}
</style>