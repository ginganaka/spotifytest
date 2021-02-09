import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  test from './views/NowPlaying.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//     el:"#test",
//     data:{
//         add: 'その他',
//     }
// })

console.log(test)
