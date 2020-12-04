

<template>
<div class="profile-wrapper">
<div class="title"
style="position:absolute;top:4vw;left:5vw;">
    {{trad.title.split(" ")[0]}}<span style="color: #dafcff"> {{trad.title.split(" ")[1]}}</span></div>

<div class="subtitle">
{{trad.profile}}
</div>
    <!--trad.nomdepage["sinscrire"]-->
    <div class="btn" id="sub"
        style="position:absolute;top:8.5vw;left:28vw; transform:rotate(-2deg)"
        onclick="profil()">
        {{trad.profile}}</div>

    <div class="btn"
        style="position:absolute;top:5vw;left:54vw; transform:rotate(-11deg)"
        onclick="logout()">
        {{trad.logout}}</div>
    
    <div class="btn" style="position:absolute;top:2.5vw;left:76vw; transform:rotate(2deg)" @click="$emit('toggle','e')">
        {{trad.menu}}</div>


    
    
        <div class="frame">
            <div class="line">
                <span class="intitule">Pseudo</span>
                <span class="intitule">nivaluna</span>
            </div>
            <div class="line">
                <span class="intitule">{{trad.email}}</span>
                <span class="intitule">nivaluna</span>
            </div>
            <div class="line">
                <span class="intitule">{{trad.pwd}}</span>
                <span class="intitule">nivaluna</span>
            </div>
        </div>

        <div style="position:absolute;top:45vw;left:70vw;">
            <span class="btn action" @click="$emit('edit')">{{trad.Edit}}</span>
        </div>


        <div style="position:absolute;top:50vw;left:5vw;">
            <img src="/eng.jpg" width=40vw alt="eng">
            <img src="/french.jpg" width=40vw alt="fr">  
        </div>
    </div>
</template>


<style>
.profile-wrapper{
    margin:0px;
    background-color:#2586e6;
    background-image : url('/BackgroundProfil.jpg');
    background-size : 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    top:0px;
    padding-top: 0px;
    }

    .title {
        color :#ffffff;
        font-family : "Helvetica";
        font-size : 5vw;
    }
 .subtitle {
     color: #ffffff;
     font-family: "Helvetica";
     font-size: 3.5vw;
     position: absolute;
     top:12vw;
     left:3vw;
 }
 .btn {
     border: none;
     border-radius : 7px;
     background-color: transparent;
     padding: 2px 10px;
     font-size: 3vw;
     font-family: "Helvetica";
     color : #ffffff;
     cursor: pointer;
     display: inline-block;
   }
   
   /* On mouse-over */
   .btn:hover {background:#629bdc3f;}
   div.frame{
     border-style: solid;
     border-color: #ffffff;
     width: 70vw;
     border-radius: 7px;
     border-width: 0.5vw;
     position: absolute;
     top:20vw;
     left:10vw;
 }
     div.line{
         margin: 2vw;
         font-family: "Helvetica";
         font-size: 2.5vw;
     }
     span.intitule{
         display: inline-block;
         width: 30vw;
         color: #ffffff;
     }
     input.field{
         background-color: #d4fcff;
         width: 30vw;
         height: 2vw;
     }
     .action {
         font-size: 2vw;
         }
</style>

<script>
export default {
    props:["language"],
    data(){
        return{
            trad:{
                "title":"My Wave",
                "profile":"Profile",
                "signup":"Sign up",
                "login":"Log in",
                "logout":"Log out",
                "menu":"Menu",
                "name":"Name",
                "email":"Email address",
                "pwd":"Password",
                "Edit":"Edit"
            }
        }
    },
    mounted() {
    fetch(this.language + ".json").then((d) =>{d.json().then((data)=>{
      this.trad = data.profilePage
    }) })
}
}
</script>