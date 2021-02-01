import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/styles/index.scss"

const ax = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-type": "application/json"
    }
});

Vue.use(VueAxios, ax)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
