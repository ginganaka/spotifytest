

<template>
  <div class="nowplaying">



    <div class="head">

      <div class="login">
        <button @click="spotifyLogin"><img src="img/login.png"></button>
      </div>
      <div class="gets">
        <button @click="getNowPlaying"><img src="img/reload.png"></button>
      </div>

      <div id="language">
        <input type="radio" v-model="radioValue" value="1" id="jap">
        <label for="jap">JAP/</label>
        <input type="radio" v-model="radioValue" value="2" id="eng">
        <label for="eng">EN</label>
      </div>

    </div>

    <div class="form-inline my-2 my-lg-0">
      <div v-if="nowPlaying != null">
        <div id="test">
          <p class="artist">
          <img src="img/musician.png">
          <input type="search" v-model="nowPlaying.item.artists[0].name">
        </p>
          <p class="song">
          <img src="img/song.png">
          <input class="song" type="search" v-model="nowPlaying.item.album.name">
          </p>
          <p class="album">
          <img src="img/album.png">
          <input class="album" type="search" v-model="nowPlaying.item.name">
          </p>

        <div class="ain">
            <div v-bind:class="disco1">
              <button v-on:click="Disco" class="type">
              <input type="image" v-if="test1 === ''" src="img/disco/discography_off.png">
              <input type="image" v-else src="img/disco/discography_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">ディスコグラフィ</div> <div class="ENG" v-else-if="radioValue === '2'">Discography</div>
            </div>
            <div v-bind:class="prod1">
              <button v-on:click="Prod" class="type">
              <input type="image" v-if="test2 === ''" src="img/producer/producer_off.png">
              <input type="image" v-else  src="img/producer/producer_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">プロデューサー</div> <div class="ENG" v-else-if="radioValue === '2'">Producer</div>
            </div>
            <div v-bind:class="guitar1">
              <button v-on:click="Guitar" class="type">
              <input type="image" v-if="test3 === ''" src="img/guitar/guitar_off.png">
              <input type="image" v-else  src="img/guitar/guitar_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">ギター</div> <div class="ENG" v-else-if="radioValue === '2'">Guitar</div>
            </div>
           <br><br>
            <div v-bind:class="bass1">
              <button v-on:click="Bass" class="type">
              <input type="image" v-if="test4 === ''" src="img/bass/bass_off.png">
              <input type="image" v-else  src="img/bass/bass_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">ベース</div> <div class="ENG" v-else-if="radioValue === '2'">Bass</div>
            </div>
            <div v-bind:class="key1">
              <button v-on:click="Key" class="type">
              <input type="image" v-if="test5 === ''" src="img/keyboard/keyboard_off.png">
              <input type="image" v-else  src="img/keyboard/keyboard_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">キーボード</div> <div class="ENG" v-else-if="radioValue === '2'">Keyboard</div>
            </div>
            <div v-bind:class="drum1">
              <button v-on:click="Drums" class="type">
              <input type="image" v-if="test6 === ''" src="img/drums/drums_off.png">
              <input type="image" v-else  src="img/drums/drum_on.png"></button>
              <div class="JAP" v-if="radioValue === '1'">ドラム</div> <div class="ENG" v-else-if="radioValue === '2'">Drum</div>
            </div>
        </div>
          <br>

          <div class="searchdiv">
          <input class="bar" type="search" v-model="add" placeholder="その他のキーワード">
          <div class="search">
          <button type="button" @click="linkToOtherWindow(`http://google.com/search?q=${ nowPlaying.item.artists[0].name + ' ' + nowPlaying.item.name + ' ' + nowPlaying.item.album.name + ' ' + add  }`)" class="search"><input type="image" src="img/search.png"></button>
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
        add: '',
        count1:'Discography',
        count2:'Producer',
        count3:'Guitar',
        count4:'Bass',
        count5:'Keyboard',
        count6:'Drums',
        count7:'ディスコグラフィー',
        count8:'プロデューサー',
        count9:'ギター',
        count10:'ベース',
        count11:'キーボード',
        count12:'ドラム',
        radioValue:'1',
        test1: '',
        test2: '',
        test3: '',
        test4: '',
        test5: '',
        test6: '',
        disco1: 'disco1',
        prod1: 'prod1',
        guitar1: 'guitar1',
        bass1: 'bass1',
        key1: 'key1',
        drum1: 'drum1',
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
    Disco: function (){
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
      this.disco1 = 'disco2'
      this.prod1 = 'prod1'
      this.guitar1 = 'guitar1'
      this.bass1 = 'bass1'
      this.key1 = 'key1'
      this.drum1 = 'drum1'
    }
  },


    Prod: function (){
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
        this.disco1 = 'disco1'
        this.prod1 = 'prod2'
        this.guitar1 = 'guitar1'
        this.bass1 = 'bass1'
        this.key1 = 'key1'
        this.drum1 = 'drum1'
      }
    },


    Guitar: function () {
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
        this.disco1 = 'disco1'
        this.prod1 = 'prod1'
        this.guitar1 = 'guitar2'
        this.bass1 = 'bass1'
        this.key1 = 'key1'
        this.drum1 = 'drum1'
      }
    },


    Bass: function () {
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
        this.disco1 = 'disco1'
        this.prod1 = 'prod1'
        this.guitar1 = 'guitar1'
        this.bass1 = 'bass2'
        this.key1 = 'key1'
        this.drum1 = 'drum1'
      }
    },



    Key: function () {
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
        this.disco1 = 'disco1'
        this.prod1 = 'prod1'
        this.guitar1 = 'guitar1'
        this.bass1 = 'bass1'
        this.key1 = 'key2'
        this.drum1 = 'drum1'
      }
    },



    Drums: function () {
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
        this.disco1 = 'disco1'
        this.prod1 = 'prod1'
        this.guitar1 = 'guitar1'
        this.bass1 = 'bass1'
        this.key1 = 'key1'
        this.drum1 = 'drum2'
      }
    },



      spotifyLogin: function() {
        let endpoint = 'https://accounts.spotify.com/authorize'
        let response_type = 'token'
        let client_id = '2a05be441be3404292be9f7d8a2d0d8e'
        let redirect_uri = 'https://discovertest202129.herokuapp.com/'
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
