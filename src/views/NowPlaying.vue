<head>
  <meta name="viewport" content="width=devide-width,user-scalable=no" />
</head>


<template>
  <div class="nowplaying">
    <div class="head">

      <div class="login">
        <button @click="spotifyLogin"><img src="img/login.svg"></button>
      </div>
      <div class="gets">
        <button @click="getNowPlaying"><img src="img/reload.svg"></button>
      </div>

      <div id="language">
        <input type="radio" v-model="radioValue" value="1" id="jap">
        <label for="jap">JAP</label>
        <nobr>/</nobr>
        <input type="radio" v-model="radioValue" value="2" id="eng">
        <label for="eng">EN</label>
      </div>

    </div>

    <div class="form-inline my-2 my-lg-0">
      <div v-if="nowPlaying != null">
        <div id="test">




          <div class="artist" name="searchForm">

            <img src="img/musician.svg">
          <div class="ar">
          <input type="text" name="searchBox" v-model="nowPlaying.item.artists[0].name">
          <div class="clearButton" v-on:click="ClearButton_Click1">×</div>
        </div>
        </div>

          <div class="song">
          <img src="img/song.svg">
          <div class="so">
          <input class="song" type="text" v-model="nowPlaying.item.album.name">
          <div class="clearButton" v-on:click="ClearButton_Click2">×</div>
        </div>
        </div>

          <div class="album">
          <img src="img/album.svg">
          <div class="al">
          <input class="album" type="text" v-model="nowPlaying.item.name">
          <div class="clearButton" v-on:click="ClearButton_Click3">×</div>
        </div>
        </div>

        <div class="ain">
            <div v-bind:class="web1">
              <button v-on:click="Web" class="type">
              <input type="image" v-if="test1 === ''" src="img/web/web_off.svg">
              <input type="image" v-else src="img/web/web_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">公式サイト</div> <div class="ENG" v-else-if="radioValue === '2'">Office site</div>
            </div>
            <div v-bind:class="disco1">
              <button v-on:click="Disco" class="type">
              <input type="image" v-if="test2 === ''" src="img/disco/disco_off.svg">
              <input type="image" v-else  src="img/disco/disco_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">ディスコグラフィー</div> <div class="ENG" v-else-if="radioValue === '2'">Discography</div>
            </div>
            <div v-bind:class="blog1">
              <button v-on:click="Blog" class="type">
              <input type="image" v-if="test3 === ''" src="img/blog/blog_off.svg">
              <input type="image" v-else  src="img/blog/blog_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">ブログ</div> <div class="ENG" v-else-if="radioValue === '2'">Blog</div>
            </div>
           <br><br>
            <div v-bind:class="wiki1">
              <button v-on:click="Wiki" class="type">
              <input type="image" v-if="test4 === ''" src="img/wiki/wiki_off.svg">
              <input type="image" v-else  src="img/wiki/wiki_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">ウィキペディア</div> <div class="ENG" v-else-if="radioValue === '2'">Wikipedia</div>
            </div>
            <div v-bind:class="face1">
              <button v-on:click="Face" class="type">
              <input type="image" v-if="test5 === ''" src="img/face/face_off.svg">
              <input type="image" v-else  src="img/face/face_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">フェイスブック</div> <div class="ENG" v-else-if="radioValue === '2'">Facebook</div>
            </div>
            <div v-bind:class="twitter1">
              <button v-on:click="Twitter" class="type">
              <input type="image" v-if="test6 === ''" src="img/twitter/twitter_off.svg">
              <input type="image" v-else  src="img/twitter/twitter_on.svg"></button>
              <div class="JAP" v-if="radioValue === '1'">ツイッター</div> <div class="ENG" v-else-if="radioValue === '2'">Twitter</div>
            </div>
        </div>
          <br>

          <div class="searchdiv">
          <div class="sea">
          <input class="bar" type="text" v-model="add" placeholder="その他のキーワード">
          <div class="clearButton" v-on:click="ClearButton_Click4">×</div>
          </div>
          <div class="search">
          <button type="button" @click="linkToOtherWindow(`http://google.com/search?q=${ nowPlaying.item.artists[0].name + ' ' + nowPlaying.item.name + ' ' + nowPlaying.item.album.name + ' ' + add  }`)" class="search"><input type="image" src="img/search.svg"></button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>


  </template>

<script>
const number = 2 * 10;
console.log(number);



  import axios from 'axios'

  export default {
    data: function() {
      return {
        nowPlaying: {
          item: {
            name:'',
            album:{name:''},
            artists: [{
              name:''}]
          }},
        selected: '',
        text1: '',
        add: '',
        count1:'Official site',
        count2:'Discography',
        count3:'Blog',
        count4:'Wikipedia',
        count5:'Facebook',
        count6:'Twiiter',
        count7:'公式サイト',
        count8:'ディスコグラフィー',
        count9:'ブログ',
        count10:'ウィキペディア',
        count11:'フェイスブック',
        count12:'ツイッター',
        radioValue:'1',
        test1: '',
        test2: '',
        test3: '',
        test4: '',
        test5: '',
        test6: '',
        web1: 'web1',
        disco1: 'disco1',
        blog1: 'blog1',
        wiki1: 'wiki1',
        face1: 'face1',
        twitter1: 'twitter1',
      }
    },

    props: {
      routeParams: Object
    },

    created: function() {
      if (this.$route.hash) {
        this.$router.push(this.$route.fullPath.replace('#','?'))
      }
    },
    methods: {
      linkToOtherWindow (url) {
      window.open(url, '')
    },
    ClearButton_Click1: function(){
      this.nowPlaying.item.artists[0].name="";
    },
    ClearButton_Click2: function (){
      this.nowPlaying.item.album.name="";
    },
    ClearButton_Click3: function(){
      this.nowPlaying.item.name="";
    },
    ClearButton_Click4: function(){
      this.add="";
    },
    Web: function (){
    if(this.radioValue == 2)
    {
      this.add = ''
      this.add += ' ' + this.count1
      this.test1 = ''
      this.test1 += 'add'
      this.test2 = ''
      this.test3 = ''
      this.test4 = ''
      this.test5 = ''
      this.test6 = ''
    } else if (this.radioValue == 1){
      this.add = ''
      this.add += ' ' + this.count7
      this.test1 = ''
      this.test1 += 'add'
      this.test2 = ''
      this.test3 = ''
      this.test4 = ''
      this.test5 = ''
      this.test6 = ''
    } if(this.test1 == 'add')
    {
      this.web1 = 'web2'
      this.disco1 = 'disco1'
      this.blog1 = 'blog1'
      this.wiki1 = 'wiki1'
      this.face1 = 'face1'
      this.twitter1 = 'twitter1'
    }
  },


    Disco: function (){
      if(this.radioValue == 2)
      {
        this.add = ''
        this.add += ' ' + this.count2
        this.test2 = ''
        this.test1 = ''
        this.test2 += 'add'
        this.test3 = ''
        this.test4 = ''
        this.test5 = ''
        this.test6 = ''
      } else if (this.radioValue == 1){
        this.add = ''
        this.add += ' ' + this.count8
        this.test2 = ''
        this.test1 = ''
        this.test2 += 'add'
        this.test3 = ''
        this.test4 = ''
        this.test5 = ''
        this.test6 = ''
      } if(this.test2 == 'add')
      {
        this.web1 = 'web1'
        this.disco1 = 'disco2'
        this.blog1 = 'blog1'
        this.wiki1 = 'wiki1'
        this.face1 = 'face1'
        this.twitter1 = 'twitter1'
      }
    },


    Blog: function () {
      if(this.radioValue == 2)
      {
        this.add = ''
        this.add += ' ' + this.count3
        this.test3 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 += 'add'
        this.test4 = ''
        this.test5 = ''
        this.test6 = ''
      } else if (this.radioValue == 1){
        this.add = ''
        this.add += ' ' + this.count9
        this.test3 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 += 'add'
        this.test4 = ''
        this.test5 = ''
        this.test6 = ''
      } if(this.test3 == 'add')
      {
        this.web1 = 'web1'
        this.disco1 = 'disco1'
        this.blog1 = 'blog2'
        this.wiki1 = 'wiki1'
        this.face1 = 'face1'
        this.twitter1 = 'twitter1'
      }
    },


    Wiki: function () {
      if(this.radioValue == 2)
      {
        this.add = ''
        this.add += ' ' + this.count4
        this.test4 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 += 'add'
        this.test5 = ''
        this.test6 = ''
      } else if (this.radioValue == 1){
        this.add = ''
        this.add += ' ' + this.count10
        this.test4 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 += 'add'
        this.test5 = ''
        this.test6 = ''
      } if(this.test4 == 'add')
      {
        this.web1 = 'web1'
        this.disco1 = 'disco1'
        this.blog1 = 'blog1'
        this.wiki1 = 'wiki2'
        this.face1 = 'face1'
        this.twitter1 = 'twitter1'
      }
    },



    Face: function () {
      if(this.radioValue == 2)
      {
        this.add = ''
        this.add += ' ' + this.count5
        this.test5 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 = ''
        this.test5 += 'add'
        this.test6 = ''
      } else if (this.radioValue == 1){
        this.add = ''
        this.add += ' ' + this.count11
        this.test5 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 = ''
        this.test5 += 'add'
        this.test6 = ''
      } if(this.test5 == 'add')
      {
        this.web1 = 'web1'
        this.disco1 = 'disco1'
        this.blog1 = 'blog1'
        this.wiki1 = 'wiki1'
        this.face1 = 'face2'
        this.twitter1 = 'twitter1'
      }
    },



    Twitter: function () {
      if(this.radioValue == 2)
      {
        this.add = ''
        this.add += ' ' + this.count6
        this.test6 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 = ''
        this.test5 = ''
        this.test6 += 'add'
      } else if (this.radioValue == 1){
        this.add = ''
        this.add += ' ' + this.count12
        this.test6 = ''
        this.test1 = ''
        this.test2 = ''
        this.test3 = ''
        this.test4 = ''
        this.test5 = ''
        this.test6 += 'add'
      }if(this.test6 == 'add')
      {
        this.web1 = 'web1'
        this.disco1 = 'disco1'
        this.blog1 = 'blog1'
        this.wiki1 = 'wiki1'
        this.face1 = 'face1'
        this.twitter1 = 'twitter2'
      }
    },



      spotifyLogin: function() {
        let endpoint = 'https://accounts.spotify.com/authorize'
        let response_type = 'token'
        let client_id = '2a05be441be3404292be9f7d8a2d0d8e'
        let redirect_uri = 'http://localhost:8080'
        // let redirect_uri = 'https://discovertest202129.herokuapp.com/'
        let scope = 'user-read-currently-playing'
        location.href = endpoint +
          '?response_type=' + response_type +
          '&client_id=' + client_id +
          '&redirect_uri=' + redirect_uri +
          '&scope=' + scope
       },
       getNowPlaying: function() {
         let endpoint = 'https://api.spotify.com/v1/me/player/currently-playing?market=JP'
         let data = {
           headers: {
           'Authorization': this.routeParams.token_type + ' ' + this.routeParams.access_token
         },
         data: {}
       }
       axios
       .get(endpoint, data)
       .then(res => {
         this.nowPlaying = res.data
       })
       .catch(err => {
         console.error(err)
       })
    },

  }

}




</script>
