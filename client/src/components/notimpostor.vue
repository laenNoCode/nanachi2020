<template>
    <div class="not-impostor-wrapper">
        <img src="/french.jpg" class="french_flag flag" @click="$emit('lang','RF')">
        <img src="/eng.jpg" class="english_flag flag"  @click="$emit('lang','AUS')">
        <div class="home-button" @click="$emit('home')">home</div>
    </div>
</template>



<style scoped>
.not-impostor-wrapper{
    width: 100%;
    height:100vh;
    background-image:url("/defeat.gif");
}
.home-button{
    color:#0274df;
    border-color:#0274df;
    border-radius: 20%;
    border-width: 5px;
    border-style: solid;
    position: absolute;
    bottom:20px;
    font-size:60px;
    left:45%;
    width:20%;
}
.home-button:hover{
    color:#0274df;
    background-color: #2c99ff;
}
.french_flag{
    position: absolute;
    bottom: 10px;
    left: 10px;
}
.english_flag{
    position: absolute;
    bottom: 10px;
    left: 200px;
}
.flag{
    cursor: pointer;
}
</style>