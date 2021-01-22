<template>
  <div class="nowplaying">
    <h1>NowPlaying</h1>
    <button @click="spotifyLogin">認証</button>
    <button @click="getNowPlaying">再生中の曲情報取得</button>

    <div class="switch">
        <select v-model="selected">
        <option>AppleMusic</option>
        <option>Spotify</option>
        </select>
    </div>


    <div class="form-inline my-2 my-lg-0">
      <div v-if="nowPlaying != null">
          <p>
          artist<input type="text" v-model="nowPlaying.item.artists[0].name">
          </p>
          <p>
          song<input type="text" v-model="nowPlaying.item.name">
          </p>
          <p>
          album<input type="text" v-model="nowPlaying.item.album.name">
          </p>
          <br>
          <button>Discography</button>
          <button>Producer</button>
          <button>Guitar</button> <br>
          <button>Bass</button>
          <button>Keyboard</button>
          <button>Drums</button><br><br>
          <input type="text" placeholder="その他のキーワード">

          <!-- 追加 -->

          <button type="button" @click="linkToOtherWindow('http://google.com')">Search</button>
        </div>
      </div>
    </div>
  </template>

<script>
  import axios from 'axios'

  export default {
    data: function() {
      return {
        nowPlaying: null
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
      spotifyLogin: function() {
        let endpoint = 'https://accounts.spotify.com/authorize'
        let response_type = 'token'
        let client_id = '2a05be441be3404292be9f7d8a2d0d8e'
        let redirect_uri = 'http://localhost:8080'
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
