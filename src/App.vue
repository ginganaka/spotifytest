<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <a href='http://localhost:8888'>
    <button>Login With Spotify</button>
    </a> -->
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}

body {
background: linear-gradient(#4f4f4f, #000000);
background-repeat:no-repeat;
height:960px;
}


.head{
  width:300px;
  display: inline-block;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}

#language input[type=radio]{
  display: none;
}
#language input[type=radio]:checked + label{
  color: #1db954;
  font-weight: lighter;
  font-style: HelveticaNeue;
}

#language {
  display: inline-block;
  font-size: 15px;
  color:#cccccc;
  position: absolute;
  margin-left: 70px;
  top:26px;
  font-style: HelveticaNeue;
}


/* .switch {
  font-size: 12px;
  display: inline-block;
} */

.login{
  display: inline-block;
}
.login button {
  background: transparent;
  border: none;
  outline: none;
  margin-right: 5px;

}
.login button img {
  width:65px;
  height:20px;
}
.gets {
  display: inline-block;
}
.gets button {
  background: transparent;
  border: none;
  outline: none;
}
.gets button img {
  width:67px;
  height:19px;
  display: inline-block;
  margin-right: 10px;
}
/* .gets {
  display: inline-block;
  margin:5px 15px 5px 0px;
} */

/* .test{
  height: 150px;
} */

.artist {
  margin-top: 7px;
  margin-bottom:7px;
}
.ar {
  width:250px;
  display: inline-block;
  position: relative;
}
.artist .clearButton{
  position: absolute;
  display: inline-block;
  right:15px;
  top:7px;
  font-size: 23px;
  color:grey;
}

.artist img{
  height:40px;
  width:40px;
  vertical-align: middle;
  margin-right: 10px;
}
.artist input{
  width:245px;
  height: 43px;
  border-radius: 25px 25px;
  border-width: thin;
}

/* input[type="text"]{
  transform: scale(0.7);
} */

.song {
  margin-top: 7px;
  margin-bottom:4px;
}


.so {
  width:250px;
  display: inline-block;
  position: relative;
}

.song .clearButton{
  position: absolute;
  display: inline-block;
  right:15px;
  top:15px;
  font-size: 23px;
  color:grey;
}

.song img{
  height:40px;
  width:40px;
  vertical-align: middle;
  margin-right: 10px;
}
.song input{
  width:245px;
  height: 43px;
  border-radius: 25px 25px;
  border-width: thin;
}


.album {
  margin-top: 7px;
  margin-bottom:7px;
}

.al {
  width:250px;
  display: inline-block;
  position: relative;
}

.al .clearButton{
  position: absolute;
  display: inline-block;
  right:15px;
  top:15px;
  font-size: 23px;
  color:grey;
}
.album img{
  height:40px;
  width:40px;
  vertical-align: middle;
  margin-right: 10px;
}
.album input{
  width:245px;
  height: 40px;
  border-radius: 25px 25px;
  border-width: thin;
}




.type{
  border: none;
  outline: none;
  background: transparent;
}

.ain {
  color:#cccccc;
  font-size: 10px;
  font-weight: bold;
}

.disco1 {
  display: inline-block;
  margin-right: 12px;
}
.disco2 {
  display: inline-block;
  color: #1db954;
  margin-right: 12px;
}
.prod1 {
  display: inline-block;
  margin-right: 12px;
}
.prod2 {
  display: inline-block;
  color: #1db954;
  margin-right: 12px;
}
.guitar1 {
  display: inline-block;
}
.guitar2 {
  display: inline-block;
  color: #1db954;
}

.bass1 {
  display: inline-block;
  margin-right: 12px;
}
.bass2 {
  display: inline-block;
  color: #1db954;
  margin-right: 12px;
}
.key1 {
  display: inline-block;
  margin-right: 12px;
}
.key2 {
  display: inline-block;
  color: #1db954;
  margin-right: 12px;
}
.drum1 {
  display: inline-block;
}
.drum2 {
  display: inline-block;
  color: #1db954;
}

button input{
  height:80px;
  width:80px;
}
.searchdiv{
  display: inline-block;
}

.sea {
  position: relative;
  display: inline-block;
}

.searchdiv .clearButton{
  position: absolute;
  display: inline-block;
  right:15px;
  top:7px;
  font-size: 23px;
  color:grey;
}
.search{
  border: none;
  outline: none;
  background: transparent;
  float: right;
}

.searchdiv input {
  width: 225px;
  height: 40px;
  border-radius: 10px !important;
  margin-right: 6px;
}

.search button input {
  height:40px;
  width:54px;
  margin-left: 5px;

}
/* .source {
  font-size: 12px;
} */

</style>
