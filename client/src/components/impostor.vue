<template>
    <div class="not-impostor-wrapper">
        <img src="/french.jpg" class="french_flag flag" @click="$emit('lang','fr')">
        <img src="/eng.jpg" class="english_flag flag"  @click="$emit('lang','en')">
        <img src="/1337.jpg" class="leet flag" @click="$emit('lang','1337')">
        <div class="home-button" @click="$emit('home','e')">home</div>
    </div>
</template>



<style scoped>
.not-impostor-wrapper{
    width: 100%;
    height:100vh;
    background-image:url("/victory.gif");
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
.leet{
    position: absolute;
    bottom: 10px;
    left: 375px;
}
.flag{
    cursor: pointer;
}

</style>