import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap-4.5.3-dist/css/bootstrap.min.css'
import 'axios/dist/axios.min.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')